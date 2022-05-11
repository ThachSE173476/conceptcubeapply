import React, {useState} from 'react';
import './header.scss';
import logo from '../../assets/img/logo.png'
import './header.scss'

const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const handleToggleClick = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="" />
                <a className="header-link">Discover</a>
                <a className="header-link">Job</a>
            </div>
            <div className="header-middle">
                <input type="text" placeholder="Search for motion trend..." />
            </div>
            <div className="header-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <a href="" className="header-link">Login</a>
                <a href="" className="header-link">Sign up</a>
            </div>
            <div className="header-toggle" onClick={handleToggleClick}>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className="header-sidebar" style={{display: openSidebar ? "block" : "none"}}>
                <div className="header-sidebar__close" onClick={() => {setOpenSidebar(false)}}>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div className="header-sidebar__search">
                    <input type="text" placeholder="Search for motion trend"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="header-sidebar__btns">
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
