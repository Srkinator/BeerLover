import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded search">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 searchInput" type="text" placeholder="Search" />
                    <button className="btn btn-primary my-2 my-sm-0 " type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Search;