import React, { Children } from 'react';

const Button = (props) => {
    return (
        <button className={`btn ${props.trans ? "trans" : ""}`}>
            {Children}
        </button>
    );
}

export default Button;
