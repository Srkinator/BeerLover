import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Search from './search';


class MainFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: [],
            search: []
        }

    }

    componentDidMount() {
        this.loadBeers();
    }

    loadBeers = (search) => {
        fetch("https://api.punkapi.com/v2/beers")
            .then(result => result.json())
            .then(result => {
                this.setState({
                    beers: result
                });
            });
        if (search) {
            fetch(`https://api.punkapi.com/v2/beers?beer_name=${search}`)
                .then(result => result.json())
                .then(result => {
                    this.setState({
                        search: result
                    });
                });
        }
    }

    renderBeers = () => {
        this.state.beers.map((beer) => {
            return (
                <div className="row" key={beer.id}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5>{beer.name}</h5>
                        <img alt="beer" src={beer.image_url} />
                        <p>{beer.abv}</p>
                        <p>{beer.description}</p>
                    </div>
                </div>
            );
        });
    }

    handleSearch = (searchedBeer) => {
        this.loadBeers(searchedBeer);
    }

    // favouriteClassToggler =() =>{
    //     let btn = document.getElementsByClassName("tester");
    //     btn.setAttribute("className", "btn-primary");
    // }



    render() {
        if (this.state.search.length > 0) {
            return (
                <div className="container">
                    <Search dispatch={this.handleSearch} />
                    <div className="row beersMain">
                        {this.state.search.map((beer) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={beer.id}>
                                    <h3>{beer.name}</h3>
                                    <img alt="beer" src={beer.image_url} />
                                    <p>{beer.abv}% alc</p>
                                    <p>{beer.description.slice(0, 150)}...</p>
                                    <Link to={`/beers/${beer.id}`}>
                                        <button type="button" className="btn btn-info">Read More</button>
                                    </Link>
                                    {/* <button className="btn btn-secondary" type="button">Favourite</button> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <Search dispatch={this.handleSearch} />
                <div className="row beersMain">
                    {this.state.beers.slice(3, -1).map((beer) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={beer.id}>
                                <h3>{beer.name}</h3>
                                <img alt="beer" src={beer.image_url} />
                                <p>{beer.abv}% alc</p>
                                <p>{beer.description.slice(0, 150)}...</p>
                                <Link to={`/beers/${beer.id}`}>
                                    <button type="button" className="btn btn-info">Read More</button>
                                </Link>
                                    {/* <button onClick={this.favouriteClassToggler} type="button" className="btn tester">Favourite</button> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MainFeed;