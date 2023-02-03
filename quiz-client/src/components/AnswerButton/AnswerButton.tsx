import React from "react";

import './AnswerButton.css';

export interface AnswerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: "primary" | "danger" | "answer" | "answered"; 
  name: string;
  buttonhandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
  buttonId?: number
  selected?: boolean
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
    children,
    variant,
    buttonId,
    buttonhandler,
    name,
    selected,
    ...props
  }) => {
    let button;
    if (buttonId) {
      let classNames = `btn-answered`;
      if (selected) {
        classNames = `btn-answered2`;
      }
      button =  <button className={classNames} onClick={buttonhandler} {...props}>
                  {name}
                </button>
    } else {
      const classNames = `btn select`;
      button =  <button className={classNames} onClick={buttonhandler} {...props}>
                  {name}
                </button>
    }

    return (
      <div className="answerbutton-center">
        {button}
      </div>
    );
  };

export default AnswerButton;