import React from 'react';
import './navigation-item.scss'

const NavigationItem = (props) => {
    return (
        <div className={`navigation-item ${props.focus ? "focus" : ""}`}>
            <p>{props.text}</p>
        </div>
    );
}

export default NavigationItem;
