export const BASE_CORRECT = 10;
export const PENALTY_WRONG = 5;
export const TIME_LIMIT = 20;

export const calcTimeBonus = (timeLeft: number): number => {
  if (timeLeft > 15) return 5;
  if (timeLeft > 10) return 3;
  if (timeLeft > 5) return 1;
  return 0;
};

export const calcStreakBonus = (streak: number): number => {
  if (streak >= 5) return 15;
  if (streak >= 3) return 8;
  if (streak >= 2) return 3;
  return 0;
};

export const getDifficultyLabel = (d: string) => {
  if (d === 'easy') return 'Fácil';
  if (d === 'medium') return 'Médio';
  return 'Difícil';
};

export const getRank = (score: number, total: number): { title: string; color: string } => {
  const ratio = score / (total * BASE_CORRECT || 1);
  if (ratio >= 0.9) return { title: 'Estrategista Mestre', color: 'text-yellow-400' };
  if (ratio >= 0.7) return { title: 'Analista Experiente', color: 'text-blue-400' };
  if (ratio >= 0.5) return { title: 'Estudante Dedicado', color: 'text-green-400' };
  return { title: 'Aprendiz de Teoria', color: 'text-slate-400' };
};
