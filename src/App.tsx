import React, { useState } from 'react';

import QuestionCard from 'components/QuestionCard';

import { fetchQuizQuestions, Difficulty } from 'api';
import { QuizQuestion, UserAnswer } from 'types';

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setLoading(false);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const question = questions[questionNumber];

      const isCorrect = question.correctAnswer === answer;

      if (isCorrect) {
        setScore(previousScore => previousScore + 1);
      }

      const userAnswer: UserAnswer = {
        question: question.question,
        answer,
        isCorrect,
        correctAnswer: question.correctAnswer
      };

      setUserAnswers(previousUserAnswers => [
        ...previousUserAnswers,
        userAnswer
      ]);
    }
  };

  const nextQuestion = () => {
    const nextQuestionNumber = questionNumber + 1;

    if (nextQuestionNumber === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestionNumber);
    }
  };

  return (
    <div className="App">
      <h1>Quiz</h1>

      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startQuiz}>
          Start
        </button>
      )}
      
      {!gameOver && (
        <p className="score">Score: {score}</p>
      )}

      {loading && (
        <p className="spinner">Loading questions</p>
      )}


      {(!loading && !gameOver) && (
        <QuestionCard 
          questionNumber={questionNumber + 1}
          numberOfQuestions={questions.length}
          question={questions[questionNumber]?.question ?? ""}
          availableAnswers={questions[questionNumber]?.availableAnswers ?? []}
          userAnswer={userAnswers[questionNumber]}
          callback={checkAnswer}
        />
      )}

      {(!gameOver && !loading && userAnswers.length === questionNumber + 1 && questionNumber !== TOTAL_QUESTIONS - 1) && (
        <button className="next" onClick={nextQuestion}>
          Next question
        </button>
      )}
    </div>
  );
};

export default App;
