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
      ...props
    }) => {
    //   const classNames = `btn btn-${variant} btn-${shape}`;
      const classNames = `questioncard`;
      return (
        <div className={classNames} {...props}>
          <div className='qc_question'>
            <Question key="props.question" title={props.question}></Question>
          </div>
            { props.answers.map(answer => (
                <div className='qc_answers' {...props}>
                  {/* <AnswerButton variant={'danger'} key={'answers[1]'} name={'kissa'} buttonHandler={props.buttonHandler}>{answer}</AnswerButton> */}
                </div>
          ))}
        </div>
      );
    };
  
  export default QuestionCard;