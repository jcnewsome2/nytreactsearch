import React, { Component } from 'react';


class AppResults extends Component {
    render() {
        return (
            <div>
                <header>Results: </header>
                <div id="displayResults">
                    <div>{this.results}
                        <input type="submit" name="submit"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppResults;