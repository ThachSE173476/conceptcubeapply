import React from 'react';
import './button.scss'

const Button = (props) => {
    return (
        <button className={`${props.trans ? "btn-trans" : "btn"} ${props.width100 ? "width-100" : ""}`}>
            {props.children}
        </button>
    );
}

export default Button;
