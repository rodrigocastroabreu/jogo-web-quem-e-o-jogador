import { CheckCircle, XCircle, Clock, ChevronRight } from 'lucide-react';
import { Scenario } from '../types';

interface Props {
  scenario: Scenario;
  selectedIds: string[];
  wasCorrect: boolean;
  timedOut: boolean;
  timeBonus: number;
  onNext: () => void;
  isLast: boolean;
}

export default function FeedbackPanel({
  scenario,
  selectedIds,
  wasCorrect,
  timedOut,
  timeBonus,
  onNext,
  isLast,
}: Props) {
  const wrongSelected = selectedIds.filter((id) => !scenario.correctIds.includes(id));
  const correctSelected = selectedIds.filter((id) => scenario.correctIds.includes(id));

  return (
    <div
      className={`rounded-2xl border-2 p-5 space-y-4 ${
        timedOut
          ? 'bg-orange-900/20 border-orange-500/40'
          : wasCorrect
          ? 'bg-emerald-900/20 border-emerald-500/40'
          : 'bg-red-900/20 border-red-500/40'
      }`}
    >
      <div className="flex items-center gap-2">
        {timedOut ? (
          <Clock size={20} className="text-orange-400" />
        ) : wasCorrect ? (
          <CheckCircle size={20} className="text-emerald-400" />
        ) : (
          <XCircle size={20} className="text-red-400" />
        )}
        <h3
          className={`font-bold text-base ${
            timedOut ? 'text-orange-300' : wasCorrect ? 'text-emerald-300' : 'text-red-300'
          }`}
        >
          {timedOut
            ? 'Tempo esgotado!'
            : wasCorrect
            ? 'Resposta correta!'
            : 'Resposta incorreta'}
          {timeBonus > 0 && !timedOut && (
            <span className="ml-2 text-yellow-300 text-sm font-normal">+{timeBonus} bônus tempo</span>
          )}
        </h3>
      </div>

      <div className="text-sm text-slate-300 leading-relaxed">
        <p className="font-semibold text-slate-200 mb-1">Conceito: {scenario.concept}</p>
        <p>{scenario.explanation}</p>
      </div>

      {correctSelected.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Por que são jogadores:</p>
          {correctSelected.map((id) => {
            const opt = scenario.options.find((o) => o.id === id);
            return (
              <div key={id} className="text-xs text-emerald-200 bg-emerald-900/30 rounded-lg px-3 py-2">
                <span className="font-medium">{opt?.label}:</span>{' '}
                {scenario.correctExplanations[id]}
              </div>
            );
          })}
        </div>
      )}

      {wrongSelected.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-semibold text-red-400 uppercase tracking-wide">Por que NÃO são jogadores:</p>
          {wrongSelected.map((id) => {
            const opt = scenario.options.find((o) => o.id === id);
            return (
              <div key={id} className="text-xs text-red-200 bg-red-900/30 rounded-lg px-3 py-2">
                <span className="font-medium">{opt?.label}:</span>{' '}
                {scenario.wrongExplanations[id]}
              </div>
            );
          })}
        </div>
      )}

      <button
        onClick={onNext}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors"
      >
        {isLast ? 'Ver Resultado Final' : 'Próxima Questão'}
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
