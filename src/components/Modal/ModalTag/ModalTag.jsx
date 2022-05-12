import React from 'react';
import './modal-tag.scss'

const ModalTag = (props) => {
    return (
        <div className={`modal-tag ${props.type ? "red" : "blue"}`}>
            <span>{props.title}</span>
        </div>
    );
}

export default ModalTag;
