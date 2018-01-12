import React, { Component } from 'react';

import MainFeed from './mainFeed';
import Search from './search';
import Header from '../common/header';

class Container extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <MainFeed />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Container;