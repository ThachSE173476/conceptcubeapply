import React from 'react';
import './data-item.scss';

const DataItem = (props) => {
    return (
        <div className="data">
            <div className="data-title">
                {props.title}
            </div>
            <div className="data-img">
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}

export default DataItem;
