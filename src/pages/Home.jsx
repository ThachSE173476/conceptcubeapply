import React from 'react';
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import HomeMain from "../components/HomeMain/HomeMain";
import Banner from "../components/Banner/Banner"

const Home = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <HomeMain/>
            <Banner/>
        </div>
    );
}

export default Home;
