import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Favourite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favbeers: []
        }

    }



    setupSearch = () => {
        let beers = JSON.parse(localStorage.getItem("beers"));
        let search = ""
        for (let i = 0; i < beers.length; i++) {
            search += beers[i]
        }
        fetch(`https://api.punkapi.com/v2/beers?ids=${search}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    favbeers: result
                });
            });
    }

    componentDidMount() {
        this.setupSearch();
    }

    render() {
        return (
            <div className="container">
                <h2>Favorite Beers</h2>
                <div className="row beersMain">
                    {this.state.favbeers.map((beer) => {
                        return (
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12 beer-card" key={beer.id}>
                                <h3>{beer.name}</h3>
                                <img alt="beer" src={beer.image_url} />
                                <p>{beer.abv}% alc</p>
                                <p>{beer.description.slice(0, 150)}...</p>
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

export default Favourite;