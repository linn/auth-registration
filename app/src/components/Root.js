import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Register from './Register';
import ActivateAccount from './ActivateAccount';
import RequestPasswordReset from './RequestPasswordReset';
import SubmitPasswordReset from './SubmitPasswordReset';
import Verify from './Verify';
import NotFound from './NotFound';

class Root extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header} />
                    <Switch>
                        <Route exact={true} path="/register" component={Register} />
                        <Route exact={true} path="/activate-account" component={ActivateAccount} />
                        <Route exact={true} path="/password-reset" component={RequestPasswordReset} />
                        <Route exact={true} path="/password-reset/:id" component={SubmitPasswordReset} />
                        <Route exact={true} path="/verify/:id" component={Verify} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Root;