import React from 'react';
import './modal.scss';
import Button from "../Button/Button";
import ModalTag from "./ModalTag/ModalTag";
import ImgCompo from '../ImgCompo/ImgCompo'

import user from '../../assets/img/modal-user.png'
import modal1 from '../../assets/img/modal1.png'
import modal2 from '../../assets/img/modal2.png'
import modal3 from '../../assets/img/modal3.png'
import modal4 from '../../assets/img/modal4.png'
import play from '../../assets/img/play.png'
import home1 from '../../assets/img/home1.jpg'
import home2 from '../../assets/img/home2.jpg'
import home3 from '../../assets/img/home3.jpg'
import home4 from '../../assets/img/home4.jpg'
import user1 from '../../assets/img/user1.jpg'
import user2 from '../../assets/img/user2.jpg'
import prev from '../../assets/img/prev.png'
import next from '../../assets/img/next.png'
import bannerNext from '../../assets/img/modal-banner-next.png'
import cmt1 from '../../assets/img/cmt1.jpg'
import cmt2 from '../../assets/img/cmt2.jpg'
import cmt3 from '../../assets/img/cmt3.jpg'
import cmt4 from '../../assets/img/cmt4.jpg'
import location from '../../assets/img/location.png'
import premiere from '../../assets/img/premiere.png'
import photoshop from '../../assets/img/photoshop.png'
import illustrator from '../../assets/img/illustrator.png'


const Modal = (props) => {
    const listImg = [
        {
            img: home1,
            owner: "Kim Aeyong",
            userImg: user2
        },
        {
            img: home2,
            owner: "Kim Jimin",
            userImg: user1
        },
        {
            img: home3,
            owner: "Im Junghan",
            userImg: user2
        },
        {
            img: home4,
            owner: "Cayley",
            userImg: user1
        },
    ]

    const cmtList = [
        {
            user: cmt1,
            name: "Kim Aeyong",
            text: "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!"
        },
        {
            user:cmt2,
            name:"Kim Jimin",
            text: "Amazing work you have here. feels like an alternative reality with that much saturation.. love it!"
        },
        {
            user: cmt3,
            name: "Im Junghan",
            text: "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!"
        },
        {
            user:cmt4,
            name: "Cayley",
            text: "Amazing work you have here. feels like an alternative reality with that much saturation.. love it!"
        },
        {
            user: cmt1,
            name: "Kim Aeyong",
            text: "Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!"
        },
    ]

    return (
        <div className={`modal ${props.open ? "" : "d-none"}`}>
            <div className="overlay" onClick={() => {
                props.setModalOpen(false)
            }}></div>
            <div className="modal-main">
                <div className="modal-header">
                    <div className="modal-header__wrap">
                        <img src={user} alt="" />
                        <div className="modal-header__wrap--in4">
                            <h2>The first portfolio movement.</h2>
                            <div className="wrapper">
                                <h6>Kim Aeyong</h6>
                                <span>Design, Music Video, Advertising</span>
                            </div>
                            <div className="modal-header__wrap--btns">
                                <Button trans={true}><i class="fa-regular fa-heart"></i> Like</Button>
                                <Button><i class="fa-regular fa-user"></i> Follow</Button>
                                <Button><i class="fa-regular fa-rectangle-history"></i> Add</Button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-header__right">
                        <Button trans={true}>Edit project</Button>
                    </div>
                </div>
                <div className="modal-images">
                    <div className="modal-images__main">
                        <img src={modal1} alt="" className="modal-images__main--bg"/>
                        <img src={play} alt="" className="modal-images__main--play"/>
                        <div className="modal-images__main--btn modal-images__main--btn-prev">
                            <img src={prev} alt="" />
                        </div>
                        <div className="modal-images__main--btn modal-images__main--btn-next">
                            <img src={next} alt="" />
                        </div>
                    </div>
                    <p>Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is  my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.</p>
                    <ul className="modal-images__list">
                        <li><img src={modal2} alt="" /></li>
                        <li><img src={modal3} alt="" /></li>
                        <li><img src={modal4} alt="" /></li>
                    </ul>
                    <div className="modal-images__footer">
                        <h1>The first portfolio movement.</h1>
                        <div className="modal-images__footer--icon-list">
                            <div className="modal-images__footer--icon">
                                <i class="fa-solid fa-heart"></i>
                                <span>1,688</span>
                            </div>
                            <div className="modal-images__footer--icon">
                                <i class="fa-solid fa-eye"></i>
                                <span>18,178</span>
                            </div>
                            <div className="modal-images__footer--icon">
                                <i class="fa-solid fa-user"></i>
                                <span>332</span>
                            </div>
                        </div>
                        <p>Publishing date : 2020.10.15</p>
                        <div className="modal-images__footer--btns">
                            <Button trans={true}><i class="fa-regular fa-heart"></i>Like</Button>
                            <Button><i class="fa-regular fa-rectangle-history"></i>Add</Button>
                        </div>
                    </div>
                </div>

                <div className="modal-banner">
                    <div className="modal-banner__user">
                        <img src={user} alt="" />
                        <span>Kim Aeyong</span>
                    </div>
                    <div className="modal-banner__list">
                        {
                            listImg.map(img => <ImgCompo {...img}/>)
                        }
                        <div className="modal-banner__next">
                            <img src={bannerNext} alt="" />
                        </div>
                    </div>
                </div>

                <div className="modal-comment">
                    <div className="modal-comment-right">
                        <h1>Comment</h1>
                        <div className="modal-comment-right__input">
                            <input type="text" placeholder="Write a comment now..."/>
                            <button><i class="fa-solid fa-right-long"></i></button>
                        </div>
                        <ul className="modal-comment-right__list">
                            {
                                cmtList.map(cmt => 
                                <div className="modal-comment-right__item">
                                    <div className="modal-comment-right__item--wrap">
                                        <img src={cmt.user} alt="" />
                                        <div>
                                            <h2>{cmt.name}</h2>
                                            <span>2020. 07. 26</span>
                                        </div>
                                    </div>
                                    <p>{cmt.text}</p>
                                </div>)
                            }
                        </ul>
                        <Button trans={true} width100={true}>More comments <i class="fa-solid fa-down-long"></i></Button>
                    </div>
                    <div className="modal-comment-left">
                        <div className="modal-comment-left__item">
                            <h5>Owner</h5>
                            <div className="modal-comment-left__item--user">
                                <img src={user} alt="" />
                                <div className="">
                                    <h1>Kim Aeyong</h1>
                                    <span><img src={location} alt="" />Korea, Republic of</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-comment-left__item">
                            <h2>The first portfolio movement.</h2>
                            <div className="modal-comment-left__item--icons">
                                <span>
                                    <i class="fa-solid fa-heart"></i>
                                    18
                                </span>
                                <span>
                                    <i class="fa-solid fa-eye"></i>
                                    18
                                </span>
                                <span>
                                    <i class="fa-solid fa-message"></i>
                                    18
                                </span>
                            </div>
                            <p>Publishing date : 2020.10.15</p>
                        </div>
                        <div className="modal-comment-left__item">
                            <h5>Creative field</h5>
                            <div className="modal-comment-left__item--field">
                                <img src={premiere} alt="" />
                                <img src={photoshop} alt="" />
                                <img src={illustrator} alt="" />
                            </div>
                        </div>
                        <div className="modal-comment-left__item">
                            <div className="modal-comment-left__item--tags">
                                <span>Editing</span>
                                <span>Camera action, Angle</span>
                                <span>Sound, Beat</span>
                                <span>Graphical</span>
                                <span>Experimental</span>
                                <span>Editing</span>
                            </div>
                        </div>
                        <div className="modal-comment-left__item">
                            <Button trans={true} width100={true}>
                            <i class="fa-solid fa-ban"></i> Report
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-close" onClick={() => {
                props.setModalOpen(false)
            }}>
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="modal-tools">
                <div className="modal-tools-item">
                    <i class="fa-solid fa-upload"></i>
                    <span>Page</span>
                </div>
                <div className="modal-tools-item">
                    <i class="fa-solid fa-heart"></i>
                    <span>Like</span>
                </div>
                <div className="modal-tools-item">
                    <i class="fa-solid fa-rectangle-history"></i>
                    <span>Add</span>
                </div>
                <div className="modal-tools-item">
                    <i class="fa-solid fa-share-nodes"></i>
                    <span>Share</span>
                </div>
            </div>
            <div className="modal-tags">
                <ModalTag type={true} title="TZ"/>
                <ModalTag type={false} title="HR"/>
            </div>
        </div>
    );
}

export default Modal;
