import React, {useState} from 'react';
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import HomeMain from "../components/HomeMain/HomeMain";
import Banner from "../components/Banner/Banner"
import Footer from '../components/Footer/Footer'
import Modal from '../components/Modal/Modal'

const Home = () => {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <Header/>
            <Navigation/>
            <HomeMain setModalOpen={(bool) => setOpen(bool)}/>
            <Banner/>
            <Footer/>
            <Modal open={open} setModalOpen={(bool) => setOpen(bool)}/>
        </div>
    );
}

export default Home;
