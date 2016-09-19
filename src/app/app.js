'use strict';

var React = require('react'),
    ExampleApp;
//var plumbplane = require('views/plumbplane');
import PlumbPlane from './views/plumbplane';

ExampleApp = React.createClass({
    counter: function () {
        this.setState({
            count: this.state.count + 1
        })
    },
    render: function () {
        return (
            /*jshint ignore:start */
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img className="navbar-brand navbar-logo" src="assets/images/logo.svg" />

                        </div>
                        <p className="navbar-text navbar-right">offline, Version 0.0.1</p>
                    </div>
                </nav>
                {this.props.additional}<br />
                {this.state.count} <br />
                <button type="button" onClick={this.counter} className="btn btn-warning">Bla</button>
                <PlumbPlane />
            </div>
            /*jshint ignore:end */
        );
    },
    getInitialState: function () {
        return {
            count: 5
        }
    }

});

React.render(
    /*jshint ignore:start */
    <ExampleApp additional="text"/>,
    /*jshint ignore:end */
    document.getElementById('app')
);
