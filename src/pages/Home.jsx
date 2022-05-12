import React from 'react';
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import HomeMain from "../components/HomeMain/HomeMain";
import Banner from "../components/Banner/Banner"
import Footer from '../components/Footer/Footer'
import Modal from '../components/Modal/Modal'

const Home = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <HomeMain/>
            <Banner/>
            <Footer/>
            <Modal/>
        </div>
    );
}

export default Home;
