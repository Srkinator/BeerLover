import React, { Component } from 'react';

class SingleBeerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: "",
            food: "",
            ingredients: ""
        }
    }

    componentDidMount() {
        this.loadBeerInfo();
    }

    loadBeerInfo = () => {
        fetch(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    beer: result[0],
                    food: result[0].food_pairing,
                    ingredients: result[0].ingredients.malt
                });
            });
    }

    render() {
        return (
            <div className="container singleBeerContainer">
                        <h1>{this.state.beer.name}, {this.state.beer.abv}%</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 singleBeerFix">
                        <img className="single-beer-info-img" src={this.state.beer.image_url} />
                    </div>
                    <div className="col-xs-12 col-sm-6 singleBeerFix">
                        <h4>Description :</h4>
                        <p>{this.state.beer.description}</p>
                        <br />
                        <h4>Brewer Tips :</h4>
                        <p>{this.state.beer.brewers_tips}</p>
                        <h4>Best taste with food :</h4>
                        <p>- {this.state.food[0]}</p>
                        <p>- {this.state.food[1]}</p>
                        <p>- {this.state.food[2]}</p>
                        {this.state.ingredients.length > 0 ? <div> <h4>Ingridients:</h4>
                            <p>- {this.state.ingredients[0].name}</p>
                            {this.state.ingredients.length > 1 ? <p>- {this.state.ingredients[1].name}</p> : ""}
                            {this.state.ingredients.length > 2 ? <p>- {this.state.ingredients[2].name}</p> : ""}
                        </div>
                            : ""}
                        <h4>First Brewed :</h4>
                        <p>- {this.state.beer.first_brewed}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleBeerInfo;