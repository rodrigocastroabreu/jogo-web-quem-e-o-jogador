import { useState, useCallback, useEffect } from 'react';
import { Difficulty, GamePhase } from './types';
import { scenarios, shuffleArray, getScenariosByDifficulty } from './data/scenarios';
import { loadStoredData, saveGameResult } from './utils/storage';
import { BASE_CORRECT, PENALTY_WRONG, calcTimeBonus, calcStreakBonus } from './utils/scoring';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import FeedbackPanel from './components/FeedbackPanel';
import ResultScreen from './components/ResultScreen';

const QUESTIONS_PER_GAME = 4;

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('start');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questionList, setQuestionList] = useState(() => shuffleArray(scenarios).slice(0, QUESTIONS_PER_GAME));
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [lastSelectedIds, setLastSelectedIds] = useState<string[]>([]);
  const [lastTimeBonus, setLastTimeBonus] = useState(0);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [storedData, setStoredData] = useState(() => loadStoredData());

  const currentScenario = questionList[questionIndex];

  const startGame = (d: Difficulty) => {
    const pool = getScenariosByDifficulty(d);
    const sampled = shuffleArray(pool.length >= QUESTIONS_PER_GAME ? pool : scenarios);
    setQuestionList(sampled.slice(0, QUESTIONS_PER_GAME));
    setDifficulty(d);
    setQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectAnswers(0);
    setPhase('playing');
  };

  const handleSubmit = useCallback(
    (selectedIds: string[], timeLeft: number) => {
      const correct = currentScenario.correctIds;
      const allCorrect =
        selectedIds.length > 0 &&
        selectedIds.every((id) => correct.includes(id)) &&
        correct.every((id) => selectedIds.includes(id));

      const timedOutNow = selectedIds.length === 0 && timeLeft === 0;
      const tBonus = allCorrect ? calcTimeBonus(timeLeft) : 0;

      let newStreak = streak;
      let delta = 0;

      if (timedOutNow) {
        newStreak = 0;
        delta = 0;
      } else if (allCorrect) {
        newStreak = streak + 1;
        const sBonus = calcStreakBonus(newStreak);
        delta = BASE_CORRECT + tBonus + sBonus;
        setCorrectAnswers((c) => c + 1);
      } else {
        const wrongCount = selectedIds.filter((id) => !correct.includes(id)).length;
        const missedCount = correct.filter((id) => !selectedIds.includes(id)).length;
        newStreak = 0;
        delta = -(wrongCount + missedCount) * PENALTY_WRONG;
      }

      setStreak(newStreak);
      setBestStreak((b) => Math.max(b, newStreak));
      setScore((s) => Math.max(0, s + delta));
      setLastSelectedIds(selectedIds);
      setLastTimeBonus(tBonus);
      setWasCorrect(allCorrect);
      setTimedOut(timedOutNow);
      setPhase('feedback');
    },
    [currentScenario, streak]
  );

  const handleNext = useCallback(() => {
    if (questionIndex + 1 >= questionList.length) {
      setPhase('result');
    } else {
      setQuestionIndex((i) => i + 1);
      setPhase('playing');
    }
  }, [questionIndex, questionList.length]);

  useEffect(() => {
    if (phase === 'result') {
      saveGameResult(score, difficulty, bestStreak);
      setStoredData(loadStoredData());
    }
  }, [phase, score, difficulty, bestStreak]);

  if (phase === 'start') {
    return <StartScreen storedData={storedData} onStart={startGame} />;
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        score={score}
        bestStreak={bestStreak}
        correctAnswers={correctAnswers}
        totalQuestions={questionList.length}
        difficulty={difficulty}
        storedData={storedData}
        onPlayAgain={() => startGame(difficulty)}
        onHome={() => setPhase('start')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {phase === 'playing' && currentScenario && (
          <QuestionCard
            key={currentScenario.id}
            scenario={currentScenario}
            score={score}
            streak={streak}
            questionIndex={questionIndex}
            totalQuestions={questionList.length}
            onSubmit={handleSubmit}
          />
        )}

        {phase === 'feedback' && currentScenario && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Questão {questionIndex + 1} de {questionList.length}
              </span>
              <span className="text-sm font-black text-white">{score} pts</span>
            </div>
            <FeedbackPanel
              scenario={currentScenario}
              selectedIds={lastSelectedIds}
              wasCorrect={wasCorrect}
              timedOut={timedOut}
              timeBonus={lastTimeBonus}
              onNext={handleNext}
              isLast={questionIndex + 1 >= questionList.length}
            />
          </div>
        )}
      </div>
    </div>
  );
}
