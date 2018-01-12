import React, { Component } from 'react';

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
                {this.state.beers.map((beer) => {
            return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={beer.id}>
                        <h5>{beer.name}</h5>
                        <img alt="beer"src={beer.image_url} />
                        <p>{beer.abv}</p>
                        <p>{beer.description.slice(0,150)}...</p>
                    </div>
            );
        })}
            </div>
        );
    }
}

export default MainFeed;