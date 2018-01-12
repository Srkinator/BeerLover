import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import MainFeed from './mainFeed';
import Search from './search';
import Header from '../common/header';
import SingleBeerInfo from './singleBeerInfo';
import Footer from '../common/footer';
import About from '../common/about';
import Favourite from './favourites';

class Container extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Search /> */}
                <Switch>
                    <Redirect exact from="/" to="beers" />
                    <Route exact path="/beers" component={MainFeed} />
                    <Route path="/beers/:id" component={SingleBeerInfo} />
                    <Route path="/about" component={About} />
                    <Route path="/favourite" component={Favourite} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Container;