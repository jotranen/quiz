import React from 'react'
import AnswerButton from '../AnswerButton';
import Question from '../Question';

import './QuestionCard.css';

export interface QuestionCardProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    question: string
    answers: string[]
}
  
  export const QuestionCard: React.FC<QuestionCardProps> = ({
      children,
      ...props
    }) => {
    //   const classNames = `btn btn-${variant} btn-${shape}`;
      const classNames = `questioncard`;
      return (
        <div className={classNames} {...props}>
          <div className='element'>
            <Question title={props.question}></Question>
          </div>
          <div className='element' {...props}>
              { props.answers.map(answer => (
                <div>
                <AnswerButton variant={'danger'} name={''}>{answer}</AnswerButton>
                </div>
              ))}
          </div>          
        </div>
      );
    };
  
  export default QuestionCard;