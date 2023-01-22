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
    const classNames = `btn btn-${variant} btn-${shape}`;
    return (
      <button className={classNames} {...props}>
        {children}
      </button>
    );
  };

export default AnswerButton;