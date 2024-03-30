import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: "violet" | "blue" | "purple";
    size: "small" | "big";
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    color,
    size,
    className,
    children,
    ...rest
}) => {

const colorButtonClasses = {
    "purple": "background-color: #DA71FF",
    "blue": "background-color: #80D1FF",
    "violet": "background-color: rgba(134, 56, 229, 0.80)",
};

const sizeButtonClasses = {
    "small": "style='width: 400px'",
    "big": "",
};

    const buttonClasses = classNames(
        colorButtonClasses[color],
        sizeButtonClasses[size],
        className,
      );
    

    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    )
}
export default Button;
