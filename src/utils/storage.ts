import { Difficulty, StoredData } from '../types';

const STORAGE_KEY = 'quem-e-o-jogador-data';

const defaultData: StoredData = {
  highScore: 0,
  totalGamesPlayed: 0,
  bestStreak: 0,
  lastDifficulty: 'easy',
  history: [],
};

export const loadStoredData = (): StoredData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultData };
    return { ...defaultData, ...JSON.parse(raw) };
  } catch {
    return { ...defaultData };
  }
};

export const saveGameResult = (score: number, difficulty: Difficulty, streak: number) => {
  try {
    const data = loadStoredData();
    if (score > data.highScore) data.highScore = score;
    if (streak > data.bestStreak) data.bestStreak = streak;
    data.lastDifficulty = difficulty;
    data.totalGamesPlayed += 1;
    data.history = [
      { date: new Date().toLocaleDateString('pt-BR'), score, difficulty },
      ...data.history,
    ].slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
};
