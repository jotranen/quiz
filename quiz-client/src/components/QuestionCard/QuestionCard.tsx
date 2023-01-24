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
          <div className='qc_question'>
            <Question title={props.question}></Question>
          </div>
            { props.answers.map(answer => (
                <div className='qc_answers' {...props}>
                  <AnswerButton variant={'danger'} name={'kissa'}>{answer}</AnswerButton>
                </div>
          ))}
        </div>
      );
    };
  
  export default QuestionCard;