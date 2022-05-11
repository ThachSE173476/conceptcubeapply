import React from 'react';
import './img-compo.scss';
import label from '../../assets/img/label.png'

const ImgCompo = (props) => {
    return (
        <div className="img-compo">
            <div className="img-compo__head">
                <img src={props.img} alt="" className="img-compo__img"/>
                {props.label ? <img src={label} alt="" className="img-compo__head--label" /> : ''}
                <p className="img-compo__head--cmt">{props.cmt}</p>
                <span>{props.time}</span>
            </div>
            <div className="img-compo__foot">
                <div className="img-compo__user">
                    <img src={props.userImg} alt="" />
                    <span>{props.owner} {props.owner === "Multiple owners" ? <i class="fa-solid fa-angle-down"></i> : ""}</span>
                </div>
                <div className="img-compo__icons">
                    <div className="img-compo__icons--wrap">
                        18
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className="img-compo__icons--wrap">
                        18
                        <i class="fa-solid fa-eye"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgCompo;
