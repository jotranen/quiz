import React from 'react'
import AnswerButton from '../AnswerButton';
import Question from '../Question';

import './QuestionCard.css';

export interface QuestionCardProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    question: string
    answers: string[]
    buttonHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
  
  export const QuestionCard: React.FC<QuestionCardProps> = ({
      children,
      buttonHandler,
      ...props
    }) => {
    //   const classNames = `btn btn-${variant} btn-${shape}`;
      const classNames = `questioncard`;
      let buttons;
      if (buttonHandler) {
        buttons = props.answers.map((answer,index) => (
            <div className='qc_answers' key={index} {...props}>
              <AnswerButton variant={'danger'} id={`${index}`} name={`${answer}`} buttonhandler={buttonHandler} key={''}>{answer}</AnswerButton>
            </div>
        ))
      } else {
        buttons = props.answers.map((answer,index) => (
            <div className='qc_answers' key={index} {...props}>
              <AnswerButton variant={'danger'} id={`${index}`} name={`${answer}`} key={''}>{answer}</AnswerButton>
            </div>
        ))
      }        
      return (
        <div className={classNames} {...props}>
          <div className='qc_question' key="kissa">
            <Question key="props.question" title={props.question}></Question>
          </div>
            { buttons }
        </div>
      );
    };
  
  export default QuestionCard;