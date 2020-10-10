import React from 'react';
import "./Button.scss";

const Button = ({text, onClickFunction}) => {
    return (
        <button className="button mb-20" onClick={onClickFunction}>{text}</button>
    )
}

export default Button
