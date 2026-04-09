import { Trophy, Zap, RotateCcw, Home, Star } from 'lucide-react';
import { Difficulty, StoredData } from '../types';
import { getRank, getDifficultyLabel } from '../utils/scoring';

interface Props {
  score: number;
  bestStreak: number;
  correctAnswers: number;
  totalQuestions: number;
  difficulty: Difficulty;
  storedData: StoredData;
  onPlayAgain: () => void;
  onHome: () => void;
}

export default function ResultScreen({
  score,
  bestStreak,
  correctAnswers,
  totalQuestions,
  difficulty,
  storedData,
  onPlayAgain,
  onHome,
}: Props) {
  const rank = getRank(score, totalQuestions);
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const isNewHighScore = score >= storedData.highScore && score > 0;

  const accuracyColor =
    accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-5">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 mb-2">
            <Trophy size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-black text-white">Partida Concluída!</h2>
          <p className={`text-lg font-bold ${rank.color}`}>{rank.title}</p>
          {isNewHighScore && (
            <div className="inline-flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-3 py-1">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-300 text-xs font-bold">Novo Recorde!</span>
            </div>
          )}
        </div>

        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5 grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-0.5">{score}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Pontuação Final</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-black mb-0.5 ${accuracyColor}`}>{accuracy}%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Precisão</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-white mb-0.5">
              {correctAnswers}/{totalQuestions}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Acertos</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <Zap size={18} className="text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-black text-white">{bestStreak}x</span>
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Melhor sequência</div>
          </div>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 grid grid-cols-2 gap-3 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Dificuldade:</span>
            <span className="text-white font-semibold">{getDifficultyLabel(difficulty)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Recorde:</span>
            <span className="text-yellow-300 font-semibold">{storedData.highScore}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Partidas:</span>
            <span className="text-white font-semibold">{storedData.totalGamesPlayed}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Melhor seq.:</span>
            <span className="text-orange-300 font-semibold">{storedData.bestStreak}x</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onHome}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white font-bold transition-colors"
          >
            <Home size={16} />
            Menu
          </button>
          <button
            onClick={onPlayAgain}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold transition-all active:scale-95"
          >
            <RotateCcw size={16} />
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
}
