import React from 'react';

import { UserAnswer } from 'types';

type Props = {
  question: string;
  availableAnswers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: UserAnswer | undefined;
  questionNumber: number;
  numberOfQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  availableAnswers,
  callback,
  userAnswer,
  questionNumber,
  numberOfQuestions
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {numberOfQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {availableAnswers.map(answer => (
        <button 
          key={answer} 
          disabled={!!userAnswer} 
          value={answer} 
          onClick={callback}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
