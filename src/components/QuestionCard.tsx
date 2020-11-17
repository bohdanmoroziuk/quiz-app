import React from 'react';

import { UserAnswer } from 'types';

import { Wrapper, ButtonWrapper } from 'components/QuestionCard.styles';

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
  <Wrapper>
    <p className="number">
      Question: {questionNumber} / {numberOfQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {availableAnswers.map(answer => (
        <ButtonWrapper
          key={answer}
          isCorrect={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button 
            disabled={!!userAnswer} 
            value={answer} 
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
