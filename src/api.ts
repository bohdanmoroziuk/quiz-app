import config from 'config';
import { shuffle } from 'utils';
import { Question, QuizQuestion } from 'types';

const { baseUrl } = config.api;

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
};

const formatQuestion = (question: Question): QuizQuestion => ({
  ...question,
  availableAnswers: shuffle([
    ...question.incorrect_answers, 
    question.correct_answer
  ]),
  correctAnswer: question.correct_answer
});

export const fetchQuizQuestions = async (
  amount: number, 
  difficulty: Difficulty
): Promise<QuizQuestion[]> => {
  const endpoint = `${baseUrl}&amount=${amount}&difficulty=${difficulty}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  const quizQuestions = data.results.map(formatQuestion);

  return quizQuestions;
};