import React from 'react';
import './home-main.scss'
import ImgCompo from '../ImgCompo/ImgCompo';

import home1 from "../../assets/img/home1.jpg";
import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";
import home4 from "../../assets/img/home4.jpg";
import home5 from "../../assets/img/home5.jpg";
import home6 from "../../assets/img/home6.jpg";
import home7 from "../../assets/img/home7.jpg";
import home8 from "../../assets/img/home8.jpg";
import home9 from "../../assets/img/home9.jpg";
import home10 from "../../assets/img/home10.jpg";
import home11 from "../../assets/img/home11.jpg";
import home12 from "../../assets/img/home12.jpg";
import home13 from "../../assets/img/home13.jpg";
import home14 from "../../assets/img/home14.jpg";
import home15 from "../../assets/img/home15.jpg";

import user1 from '../../assets/img/user1.jpg'
import user2 from '../../assets/img/user2.jpg'

import Banner from "../Banner/Banner";

const HomeMain = () => {
    const imgComponents = [
        {
            img: home1,
            owner: "Kim Aeyong",
            cmt: "This is the space that contains the video......",
            time: "02:33",
            label: true,
            userImg: user1
        },
        {
            img: home2,
            owner: "Multiple owners",
            userImg: user1
        },
        {
            img: home3,
            owner: "Im Junghan",
            userImg: user1
        },
        {
            img: home4,
            userImg: user2,
            owner: "Cayley"
        },
        {
            img: home5,
            userImg: user2,
            owner: "Hamilton"
        },
        {
            img: home4,
            userImg: user1,
            owner: "Kim Aeyong"
        },
        {
            img: home5,
            userImg: user1,
            owner: "Kim Jimin"
        },
        {
            img: home1,
            userImg: user2,
            owner: "Im Junghan"
        },
        {
            img: home6,
            userImg: user2,
            owner: "Cayley"
        },
        {
            img: home7,
            userImg: user2,
            owner: "Hamilton"
        },
        {
            img: home8,
            userImg: user1,
            owner: "Kim Aeyong"
        },
        {
            img: home9,
            userImg: user2,
            owner: "Kim Jimin"
        },
        {
            img: home10,
            userImg: user2,
            owner: "Im Junghan"
        },
        {
            img: home11,
            userImg: user2,
            owner: "Cayley"
        },
        {
            img: home12,
            userImg: user2,
            owner: "Hamilton"
        },
        {
            img: home13,
            userImg: user1,
            owner: "Kim Aeyoung"
        },
        {
            img: home14,
            userImg: user1,
            owner: "Kim Jimin"
        },
        {
            img: home15,
            userImg: user2,
            owner: "Im Junghan"
        },
        {
            img: home8,
            userImg: user2,
            owner: "Cayley"
        },
        {
            img: home9,
            userImg: user2,
            owner: "Hamilton"
        },
        {
            img: home1,
            userImg: user1,
            owner: "Kim Aeyong"
        },
        {
            img: home2,
            userImg: user1,
            owner: "Kim Jimin"
        },
        {
            img: home3,
            userImg: user2,
            owner: "Im Junghan"
        },
        {
            img: home4,
            userImg: user2,
            owner: "Cayley"
        },
        {
            img: home5,
            userImg: user2,
            owner: "Hamilton"
        },
    ]

    return (
        <div className="home-main">
            <ul className="home-main__filters">
                <a href="" className="home-main__filters--item focus">Motion trend pick</a>
                <a href="" className="home-main__filters--item">Latest</a>
                <a href="" className="home-main__filters--item">Recommended</a>
            </ul>

            <div className="home-main__img-list">
                {
                    imgComponents.map(compo => <ImgCompo {...compo}/>)
                }
            </div>
        </div>
    );
}

export default HomeMain;
