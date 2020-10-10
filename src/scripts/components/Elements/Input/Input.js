import React from 'react'
import "./Input.scss";

const Input = ({type, placeHolder, onChangeFunction, name}) => {
    return (
        <input className="input mb-20" type={type} placeholder={placeHolder} onChange={onChangeFunction} name={name}></input>
    )
}

export default Input
