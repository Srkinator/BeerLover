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

    favouriteClassToggler = (e) => {
        let btn = e.target;
        let favoriteBeerID = `${e.target.getAttribute("data")}|`;
        if (!localStorage.getItem("beers")) {
            localStorage.setItem("beers", JSON.stringify([]));
        }
        let parseArray = JSON.parse(localStorage.getItem("beers"));
        
        if (JSON.stringify(btn.classList) == `{"0":"tester","1":"btn","2":"btn-warning"}`) {
            btn.removeAttribute("class");
            btn.setAttribute("class", "tester btn");
            let index = parseArray.indexOf(favoriteBeerID);
            if (index > -1) {
                parseArray.splice(index, 1);
            }
            localStorage.setItem('beers', JSON.stringify(parseArray));
        }
        else {
            btn.removeAttribute("class");
            btn.setAttribute("class", "tester btn btn-warning");

            parseArray.push(favoriteBeerID);
            localStorage.setItem('beers', JSON.stringify(parseArray));
        }
    }

    render() {
        if (this.state.search.length > 0) {
            return (
                <div className="container">
                    <Search dispatch={this.handleSearch} />
                    <h2>Featured Beers</h2>
                    <div className="row beersMain">
                        {this.state.search.map((beer) => {
                            return (
                                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12 beer-card" key={beer.id}>
                                    <h3>{beer.name}</h3>
                                    <img alt="beer" src={beer.image_url} />
                                    <button onClick={this.favouriteClassToggler} data={beer.id} type="button" className="btn tester">Favourite</button>
                                    <p>{beer.abv}% alc</p>
                                    <p>{beer.description.slice(0, 120)}...</p>
                                    <Link to={`/beers/${beer.id}`}>
                                        <button type="button" className="btn btn-info">Read More</button>
                                    </Link>
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
                <h2>Featured Beers</h2>
                <div className="row beersMain">
                    {this.state.beers.slice(3, -1).map((beer) => {
                        return (
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12 beer-card" key={beer.id}>
                                <h3>{beer.name}</h3>
                                <img alt="beer" src={beer.image_url} />
                                <button onClick={this.favouriteClassToggler} data={beer.id} type="button" className="btn tester">Favourite</button>
                                <p>{beer.abv}% alc</p>
                                <p>{beer.description.slice(0, 120)}...</p>
                                <Link to={`/beers/${beer.id}`}>
                                    <button type="button" className="btn btn-info">Read More</button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MainFeed;