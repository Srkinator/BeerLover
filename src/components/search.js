import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            searchedTerm: ""
        }
    }

    collectInput =(e) => {
        e.preventDefault();
        this.props.dispatch(e.target.value);
    }
    
    render() {
        return (
            <nav className="navbar navbar-light bg-faded search">
                <form className="form-inline">
                    <input onChange={this.collectInput} className="form-control mr-sm-2 searchInput" type="text" placeholder="Search" />
                    <button className="btn btn-primary my-2 my-sm-0 " type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Search;