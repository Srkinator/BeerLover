import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse bg-primary">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Beer Lover</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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