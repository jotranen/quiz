import React from 'react'
import AnswerButton from '../AnswerButton';
import Question from '../Question';

import './QuestionCard.css';

export interface QuestionCardProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    question: string
    answers: string[]
    buttonHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
  
  export const QuestionCard: React.FC<QuestionCardProps> = ({
      children,
      buttonHandler,
      ...props
    }) => {
    //   const classNames = `btn btn-${variant} btn-${shape}`;
      const classNames = `questioncard`;
      return (
        <div className={classNames} {...props}>
          <div className='qc_question' key="kissa">
            <Question key="props.question" title={props.question}></Question>
          </div>
            { props.answers.map((answer,index) => (
                <div className='qc_answers' key={index} {...props}>
                  <AnswerButton variant={'danger'} key={index} name={`${answer}`} buttonhandler={buttonHandler}>{answer}</AnswerButton>
                </div>
          ))}
        </div>
      );
    };
  
  export default QuestionCard;