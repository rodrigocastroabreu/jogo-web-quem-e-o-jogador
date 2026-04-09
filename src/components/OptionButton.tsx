import { Check, X, User, Bot } from 'lucide-react';

type State = 'idle' | 'selected' | 'correct' | 'wrong' | 'missed';

interface Props {
  label: string;
  state: State;
  disabled: boolean;
  onClick: () => void;
}

const stateClasses: Record<State, string> = {
  idle: 'bg-slate-800 border-slate-600 hover:border-blue-400 hover:bg-slate-700 text-slate-200 cursor-pointer',
  selected: 'bg-blue-600/30 border-blue-400 text-white cursor-pointer scale-[1.01]',
  correct: 'bg-emerald-600/30 border-emerald-400 text-emerald-200',
  wrong: 'bg-red-600/30 border-red-400 text-red-200',
  missed: 'bg-amber-600/20 border-amber-400/60 text-amber-200 opacity-80',
};

export default function OptionButton({ label, state, disabled, onClick }: Props) {
  const Icon =
    state === 'correct' ? Check
    : state === 'wrong' ? X
    : state === 'missed' ? User
    : state === 'selected' ? Bot
    : null;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left
        font-medium text-sm transition-all duration-200
        ${stateClasses[state]}
        ${disabled && state === 'idle' ? 'opacity-40 cursor-not-allowed' : ''}
      `}
    >
      <div
        className={`
          w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold border-2
          ${state === 'correct' ? 'bg-emerald-500 border-emerald-300 text-white'
            : state === 'wrong' ? 'bg-red-500 border-red-300 text-white'
            : state === 'missed' ? 'bg-amber-500 border-amber-300 text-white'
            : state === 'selected' ? 'bg-blue-500 border-blue-300 text-white'
            : 'bg-slate-700 border-slate-500 text-slate-300'}
        `}
      >
        {Icon ? <Icon size={14} /> : <span>?</span>}
      </div>
      <span className="flex-1">{label}</span>
    </button>
  );
}
