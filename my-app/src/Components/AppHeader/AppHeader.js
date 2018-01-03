import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppHeader extends Component {
    render() {
        return (
            <header>
                <h1>New York Times Article Scrubber</h1>
                <p>Search for and annotate artices of interest!</p>
            </header>
        );
    };
};


export default AppHeader;