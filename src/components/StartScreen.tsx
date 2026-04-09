import { Play, Trophy, Brain, Zap, RotateCcw } from 'lucide-react';
import { Difficulty, StoredData } from '../types';
import { getDifficultyLabel } from '../utils/scoring';

interface Props {
  storedData: StoredData;
  onStart: (difficulty: Difficulty) => void;
}

const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

const diffConfig = {
  easy: {
    color: 'from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400',
    border: 'border-emerald-500/40',
    desc: '4 questões · Cenários diretos',
  },
  medium: {
    color: 'from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400',
    border: 'border-yellow-500/40',
    desc: '4 questões · Múltiplos jogadores',
  },
  hard: {
    color: 'from-red-600 to-red-500 hover:from-red-500 hover:to-red-400',
    border: 'border-red-500/40',
    desc: '4 questões · Informação assimétrica',
  },
};

export default function StartScreen({ storedData, onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5">
            <Brain size={14} className="text-blue-400" />
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">Teoria dos Jogos</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl font-black text-white leading-tight">
              Quem é o<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Jogador?
              </span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
              Identifique os agentes estratégicos em cenários reais de Teoria dos Jogos
            </p>
          </div>
        </div>

        {storedData.totalGamesPlayed > 0 && (
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center">
              <Trophy size={16} className="text-yellow-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white">{storedData.highScore}</div>
              <div className="text-xs text-slate-400">Recorde</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center">
              <Zap size={16} className="text-orange-400 mx-auto mb-1 fill-orange-400" />
              <div className="text-lg font-black text-white">{storedData.bestStreak}x</div>
              <div className="text-xs text-slate-400">Melhor sequência</div>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center">
              <RotateCcw size={16} className="text-blue-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white">{storedData.totalGamesPlayed}</div>
              <div className="text-xs text-slate-400">Partidas</div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider text-center">
            Escolha a dificuldade
          </p>
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => onStart(d)}
              className={`
                w-full flex items-center justify-between px-5 py-4 rounded-xl
                bg-gradient-to-r ${diffConfig[d].color}
                border ${diffConfig[d].border}
                text-white font-bold transition-all duration-200 active:scale-95
              `}
            >
              <span className="text-base">{getDifficultyLabel(d)}</span>
              <span className="text-xs opacity-80 font-normal">{diffConfig[d].desc}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4 space-y-2">
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Como jogar</p>
          <ul className="space-y-1.5 text-xs text-slate-400 leading-relaxed">
            <li className="flex gap-2"><span className="text-blue-400">•</span> Leia o cenário e identifique os JOGADORES</li>
            <li className="flex gap-2"><span className="text-emerald-400">•</span> +10 pts por acerto · -5 pts por erro</li>
            <li className="flex gap-2"><span className="text-yellow-400">•</span> Bônus por tempo restante e sequência de acertos</li>
            <li className="flex gap-2"><span className="text-purple-400">•</span> Pode haver mais de um jogador correto!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
