import React from 'react';
import "./style.scss"

const Button = ({
    children,
    variant="",
    color="",
    className
}) => {
    return <button className={`button ${variant} ${color} ${className}`}>{children}</button>;
};

export default Button;