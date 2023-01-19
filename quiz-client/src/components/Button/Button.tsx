import React from "react";

import './Button.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: "primary" | "danger"; 
  shape?: "rounded";
  name: string;
}

export const Button: React.FC<ButtonProps> = ({
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

export default Button;