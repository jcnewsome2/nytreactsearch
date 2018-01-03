import React, { Component } from 'react';

class SavedArticles extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <strong>
                                        <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <hr />
                    <p className="pull-right">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        Proudly built using React.js
            </p>
                </footer>
            </div>

        )
    }
};
//{this.renderSaved()}
export default SavedArticles;