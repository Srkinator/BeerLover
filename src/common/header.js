import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixed-top navbar-inverse bg-primary">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Beer Lover</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Favourites</a>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Header;