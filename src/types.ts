export type UserAnswer = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizQuestion = Question & {
  availableAnswers: string[];
  correctAnswer: string;
};
