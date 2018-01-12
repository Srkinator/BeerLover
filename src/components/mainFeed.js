import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MainFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: []
        }

    }

    componentDidMount() {
        this.loadBeers();
    }

    loadBeers = () => {
        fetch("https://api.punkapi.com/v2/beers")
            .then(result => result.json())
            .then(result => {
                this.setState({
                    beers: result
                });
            });
    }

    renderBeers = () => {
        this.state.beers.map((beer) => {
            return (
                <div className="row" key={beer.id}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5>{beer.name}</h5>
                        <img alt="beer"src={beer.image_url} />
                        <p>{beer.abv}</p>
                        <p>{beer.description}</p>
                    </div>
                </div>
            );
        });
    }



    render() {
        return (
            <div className="row beersMain">
                {this.state.beers.slice(3,-1).map((beer) => {
            return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={beer.id}>
                        <h4>{beer.name}</h4>
                        <img alt="beer"src={beer.image_url} />
                        <p>{beer.abv}% alc</p>
                        <p>{beer.description.slice(0,150)}...</p>
                        <Link to={`/beers/${beer.id}`}>
                        <button type="button" className="btn btn-info">Read More</button>
                        </Link>
                    </div>
            );
        })}
            </div>
        );
    }
}

export default MainFeed;