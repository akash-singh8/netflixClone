import React, { useEffect, useState } from 'react';
import './Nav.css';
import netflixLogo from './netFlixLogo.png';
import userLogo from './akash.png';


function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src={netflixLogo} alt="Netflix Logo" className="nav_logo" />
            <img src={userLogo} alt="User Logo" className="user_logo" />
        </div>
    )
}

export default Nav;