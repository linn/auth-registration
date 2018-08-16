import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Register from './Register';
import ActivateAccount from './ActivateAccount';
import ActivateAccountSuccess from './ActivateAccountSuccess';
import RequestPasswordReset from './RequestPasswordReset';
import RequestPasswordResetSuccess from './RequestPasswordResetSuccess';
import SubmitPasswordReset from './SubmitPasswordReset';
import SubmitPasswordResetSuccess from './SubmitPasswordResetSuccess';
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
                        <Route exact={true} path="/activate-account/success" component={ActivateAccountSuccess} />
                        <Route exact={true} path="/password-reset" component={RequestPasswordReset} />
                        <Route exact={true} path="/password-reset/success" component={RequestPasswordResetSuccess} />
                        <Route exact={true} path="/password-reset/:id" component={SubmitPasswordReset} />
                        <Route exact={true} path="/password-reset/:id/success" component={SubmitPasswordResetSuccess} />
                        <Route exact={true} path="/verify/:id" component={Verify} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Root;