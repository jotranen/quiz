import React from "react";

import './AnswerButton.css';

export interface AnswerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: "primary" | "danger"; 
  shape?: "rounded";
  name: string;
  key: number;
  buttonhandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
    children,
    variant,
    shape,
    buttonhandler,
    ...props
  }) => {
    const classNames = `btn select`;
    return (
      <div className="answerbutton-center">
      <button className={classNames} onClick={buttonhandler} {...props}>
        {children}
      </button>
      </div>
    );
  };

export default AnswerButton;