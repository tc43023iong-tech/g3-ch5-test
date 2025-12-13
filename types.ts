export enum QuestionType {
  FILL_BLANK = 'FILL_BLANK',
  REARRANGE = 'REARRANGE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  GRAMMAR_SELECT = 'GRAMMAR_SELECT',
}

export interface BaseQuestion {
  id: string;
  section: string; // "A", "B", "C", etc.
  instruction: string;
  type: QuestionType;
}

export interface FillBlankQuestion extends BaseQuestion {
  type: QuestionType.FILL_BLANK;
  parts: string[]; // "My mum gives me a ", " to use..."
  answer: string;
  options: string[]; // Word bank
}

export interface RearrangeQuestion extends BaseQuestion {
  type: QuestionType.REARRANGE;
  words: string[];
  correctOrder: string[]; // Array of strings matching words
  displayAnswer: string; // The full string for feedback
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: QuestionType.MULTIPLE_CHOICE;
  questionText: string;
  options: { label: string; value: string; isCorrect: boolean }[];
  contextImage?: string; // Optional emoji or text context
}

export interface GrammarSelectQuestion extends BaseQuestion {
  type: QuestionType.GRAMMAR_SELECT;
  preText: string;
  grammarOptions: string[]; // ["want", "wants"]
  correctGrammar: string;
  midText: string; // " to "
  vocabOptions: string[]; // ["plant", "build"]
  correctVocab: string;
  postText: string; // " vegetables."
}

export type QuizQuestion = 
  | FillBlankQuestion 
  | RearrangeQuestion 
  | MultipleChoiceQuestion 
  | GrammarSelectQuestion;

export interface AppState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  history: boolean[]; // true if correct, false if wrong
}