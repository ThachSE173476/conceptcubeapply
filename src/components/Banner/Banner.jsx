import React from 'react';
import './banner.scss';
import play from '../../assets/img/play.png'
import banner1 from '../../assets/img/banner1.jpg'
import banner2 from '../../assets/img/banner2.jpg'
import banner3 from '../../assets/img/banner3.jpg'
import banner4 from '../../assets/img/banner4.jpg'


const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-left">
                <h1>tutorial</h1>
                <p>Let's look at 7 ways to use motion trend more effectively in the first tutorial.</p>
                <button>watch now</button>
            </div>
            <div className="banner-middle">
                <img src={banner1} alt="" className="banner-middle--bg" />
                <div className="banner-middle__wrapper">
                    <img src={play} alt="" className="banner-middle--play"/>
                    <span>LIVE</span>
                    <h5>02:33</h5>
                </div>
            </div>
            <div className="banner-right">
                <div className="banner-right__item">
                    <img src={banner2} alt="" />
                    <div className="banner-right__item--wrap">
                        <h1>Tutorial</h1>
                        <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
                        <div className="banner-right__icons">
                            <div className="banner-right__icons--wrap">
                                18
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div className="banner-right__icons--wrap">
                                18
                                <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-right__item">
                    <img src={banner3} alt="" />
                    <div className="banner-right__item--wrap">
                        <h1>Tutorial</h1>
                        <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
                        <div className="banner-right__icons">
                            <div className="banner-right__icons--wrap">
                                18
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div className="banner-right__icons--wrap">
                                18
                                <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-right__item">
                    <img src={banner4} alt="" />
                    <div className="banner-right__item--wrap">
                        <h1>Tutorial</h1>
                        <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
                        <div className="banner-right__icons">
                            <div className="banner-right__icons--wrap">
                                18
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div className="banner-right__icons--wrap">
                                18
                                <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
