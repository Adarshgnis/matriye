import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 8) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (    
        <div className={`nav-container ${isSticky ? 'sticky' : ''}`} style={{marginLeft: "260px", paddingRight: "30px", paddingLeft: "15px"}}>
            <div
                className="d-flex align-items-center justify-content-between"
                style={{ padding: "1.9rem 1rem 0 1rem" }}
            >
                <div className="menu-icon" style={{ visibility: "hidden" }}>
                    <MdOutlineMenu />
                </div>
                <div className="d-flex align-items-center flex-row justify-content-end gap-3">
                    <Link >
                        <img src="/assets/email-icon.png" alt="" />
                    </Link>
                    <Link >
                        <img src="/assets/notification-icon.png" alt="" />
                    </Link>
                    <Link className="profile-picture">
                        <img
                            src="/assets/profile-dp.png"
                            alt=""
                            className="w-100 object-fit-cover"
                        />
                    </Link>
                    <button>login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
