import { useState, useCallback } from 'react';
import { BookOpen, Send } from 'lucide-react';
import { Scenario } from '../types';
import { getDifficultyLabel } from '../utils/scoring';
import OptionButton from './OptionButton';
import TimerBar from './TimerBar';
import ScoreDisplay from './ScoreDisplay';
import { useTimer } from '../hooks/useTimer';
import { TIME_LIMIT } from '../utils/scoring';

type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'missed';

interface Props {
  scenario: Scenario;
  score: number;
  streak: number;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: (selectedIds: string[], timeLeft: number) => void;
}

export default function QuestionCard({
  scenario,
  score,
  streak,
  questionIndex,
  totalQuestions,
  onSubmit,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [optionStates, setOptionStates] = useState<Record<string, OptionState>>(() =>
    Object.fromEntries(scenario.options.map((o) => [o.id, 'idle']))
  );

  const handleExpire = useCallback(() => {
    if (!submitted) {
      setSubmitted(true);
      const states: Record<string, OptionState> = {};
      scenario.options.forEach((o) => {
        if (scenario.correctIds.includes(o.id)) states[o.id] = 'missed';
        else states[o.id] = 'idle';
      });
      setOptionStates(states);
      onSubmit([], 0);
    }
  }, [submitted, scenario, onSubmit]);

  const { timeLeft } = useTimer(TIME_LIMIT, !submitted, handleExpire);

  const toggleOption = (id: string) => {
    if (submitted) return;
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      const states: Record<string, OptionState> = {};
      scenario.options.forEach((o) => {
        states[o.id] = next.includes(o.id) ? 'selected' : 'idle';
      });
      setOptionStates(states);
      return next;
    });
  };

  const handleSubmit = () => {
    if (submitted || selected.length === 0) return;
    setSubmitted(true);
    const states: Record<string, OptionState> = {};
    scenario.options.forEach((o) => {
      if (selected.includes(o.id)) {
        states[o.id] = scenario.correctIds.includes(o.id) ? 'correct' : 'wrong';
      } else if (scenario.correctIds.includes(o.id)) {
        states[o.id] = 'missed';
      } else {
        states[o.id] = 'idle';
      }
    });
    setOptionStates(states);
    onSubmit(selected, timeLeft);
  };

  const diffColors: Record<string, string> = {
    easy: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40',
    medium: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/40',
    hard: 'text-red-400 bg-red-500/20 border-red-500/40',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${diffColors[scenario.difficulty]}`}
        >
          {getDifficultyLabel(scenario.difficulty)}
        </span>
        <ScoreDisplay
          score={score}
          streak={streak}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
      </div>

      <TimerBar timeLeft={timeLeft} />

      <div className="bg-slate-800/60 rounded-2xl border border-slate-700 p-5 space-y-3">
        <div className="flex items-center gap-2 text-blue-400">
          <BookOpen size={16} />
          <span className="text-xs font-semibold uppercase tracking-wide">Cenário</span>
        </div>
        <p className="text-slate-200 text-sm leading-relaxed">{scenario.description}</p>
      </div>

      <div className="bg-slate-800/40 rounded-2xl border border-slate-700/60 p-5 space-y-3">
        <p className="text-white font-bold text-base">{scenario.context}</p>
        <p className="text-xs text-slate-400">
          Selecione todas as opções corretas. Clique em cada jogador correto — você pode marcar mais de uma opção.
        </p>
        <div className="space-y-2.5">
          {scenario.options.map((opt) => (
            <OptionButton
              key={opt.id}
              label={opt.label}
              state={optionStates[opt.id]}
              disabled={submitted}
              onClick={() => toggleOption(opt.id)}
            />
          ))}
        </div>
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected.length === 0}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all
            disabled:opacity-30 disabled:cursor-not-allowed
            bg-blue-600 hover:bg-blue-500 active:scale-95 text-white"
        >
          <Send size={16} />
          Confirmar Resposta
        </button>
      )}
    </div>
  );
}
