import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import MainFeed from './mainFeed';
import Search from './search';
import Header from '../common/header';
import SingleBeerInfo from './singleBeerInfo';

class Container extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Switch>
                    <Redirect exact from="/" to="beers" />
                    <Route exact path="/beers" component={MainFeed} />
                    <Route path="/beers/:id" component={SingleBeerInfo} />
                </Switch>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Container;