export type Difficulty = 'easy' | 'medium' | 'hard';
export type GamePhase = 'start' | 'playing' | 'feedback' | 'result';

export interface Option {
  id: string;
  label: string;
}

export interface Scenario {
  id: string;
  difficulty: Difficulty;
  description: string;
  context: string;
  options: Option[];
  correctIds: string[];
  explanation: string;
  wrongExplanations: Record<string, string>;
  correctExplanations: Record<string, string>;
  concept: string;
}

export interface AnswerResult {
  optionId: string;
  correct: boolean;
}

export interface GameState {
  phase: GamePhase;
  score: number;
  streak: number;
  bestStreak: number;
  currentDifficulty: Difficulty;
  questionIndex: number;
  answeredIds: string[];
  results: AnswerResult[];
  timeBonus: number;
  totalQuestions: number;
  correctAnswers: number;
}

export interface StoredData {
  highScore: number;
  totalGamesPlayed: number;
  bestStreak: number;
  lastDifficulty: Difficulty;
  history: { date: string; score: number; difficulty: Difficulty }[];
}
