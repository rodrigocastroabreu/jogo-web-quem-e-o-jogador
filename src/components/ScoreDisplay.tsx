import { Zap } from 'lucide-react';

interface Props {
  score: number;
  streak: number;
  questionIndex: number;
  totalQuestions: number;
}

export default function ScoreDisplay({ score, streak, questionIndex, totalQuestions }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-right">
        <div className="text-xs text-slate-400 uppercase tracking-wide">Pontos</div>
        <div className="text-2xl font-black text-white tabular-nums">{score}</div>
      </div>

      {streak >= 2 && (
        <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/40 rounded-lg px-2 py-1">
          <Zap size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-yellow-300 font-bold text-sm">{streak}x</span>
        </div>
      )}

      <div className="text-right">
        <div className="text-xs text-slate-400 uppercase tracking-wide">Questão</div>
        <div className="text-sm font-bold text-slate-300">
          {questionIndex + 1}/{totalQuestions}
        </div>
      </div>
    </div>
  );
}
