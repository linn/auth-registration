import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';

class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header} />
                    <Route exact={true} path="/register" component={Register} />
                    <Route exact={true} path="/register/success" component={RegisterSuccess} />
                </div>
            </Router>
        );
    }
}

export default Root;