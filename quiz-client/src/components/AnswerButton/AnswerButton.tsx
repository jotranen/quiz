import React from "react";

import './AnswerButton.css';

export interface AnswerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: "primary" | "danger"; 
  shape?: "rounded";
  name: string;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
    children,
    variant,
    shape,
    ...props
  }) => {
    const classNames = `btn select`;
    return (
      <div className="answerbutton-center">
      <button className={classNames} {...props}>
        {children}
      </button>
      </div>
    );
  };

export default AnswerButton;