import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse bg-primary">
            <a className="navbar-brand" href="#">Beer Lover</a>
            <div  id="navbarSupportedContent">
                <ul className="navbar-nav navfix">
                    <Link to='/about' >
                        <li className="nav-item active navfixli1">
                            <p className="nav-link">About</p>
                        </li>
                    </Link>
                    <li className="nav-item active navfixli2">
                        <p className="nav-link" href="#">Favourites</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;