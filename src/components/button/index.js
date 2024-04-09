import React from 'react';
import "./style.scss"

const Button = ({
    children,
    variant="",
    color="",
}) => {
    return <button className={`button ${variant} ${color}`}>{children}</button>;
};

export default Button;