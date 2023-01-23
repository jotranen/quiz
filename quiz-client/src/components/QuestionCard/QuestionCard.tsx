import React from 'react'
import AnswerButton from '../AnswerButton';
import Question from '../Question';

// import './Button.css';

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
      const classNames = `list-item`;
      return (
        <div>
          <div>
            <Question title={props.question}></Question>
          </div>
          <div className={classNames} {...props}>
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