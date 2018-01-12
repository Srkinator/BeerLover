import React, { Component } from 'react';

import MainFeed from './mainFeed';
import Search from './search';

class Container extends Component {
    render() {
        return (
            <div>
                <Search />
                <MainFeed />
            </div>
        );
    }
}

export default Container;