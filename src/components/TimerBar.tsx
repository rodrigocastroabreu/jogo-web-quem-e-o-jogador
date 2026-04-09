import { TIME_LIMIT } from '../utils/scoring';

interface Props {
  timeLeft: number;
}

export default function TimerBar({ timeLeft }: Props) {
  const pct = (timeLeft / TIME_LIMIT) * 100;
  const danger = timeLeft <= 5;
  const warn = timeLeft <= 10;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Tempo</span>
        <span
          className={`text-sm font-bold tabular-nums ${
            danger ? 'text-red-400 animate-pulse' : warn ? 'text-yellow-400' : 'text-slate-300'
          }`}
        >
          {timeLeft}s
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-700 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${
            danger
              ? 'bg-red-500'
              : warn
              ? 'bg-yellow-400'
              : 'bg-emerald-400'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
