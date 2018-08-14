import React, { Component } from 'react';
import Template from './templates/Register';
import isEmail from 'validator/lib/isEmail';
import { register } from '../actions';
import { getReturnUrl, isEmbedded, addQuery } from '../helpers';

class Register extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        errors: {
            email: '',
            password: '',
            password2: '',
            registration: ''
        },
        processing: false
    }

    render() {
        const { location } = this.props;

        return <Template
            {...this.state}
            embedded={isEmbedded(location.search)}
            returnUrl={getReturnUrl(location.search)}
            onSubmit={e => this.handleSubmit(e)}
            onEmailChange={email => this.setState({ email })}
            onPasswordChange={password => this.setState({ password })}
            onPassword2Change={password2 => this.setState({ password2 })}
        />
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        if (this.validate()) {
            this.setState({ processing: true });

            register(this.state.email, this.state.password).then(result => {
                if (result.success) {
                    history.push('/register/success' + addQuery(history.location.search, `username=${encodeURIComponent(this.state.email)}`));
                }
                else {
                    const message = result.error.hasMessage
                        ? result.error.message
                        : 'Sorry! Something\'s gone wrong.  Please try again later.';

                    this.setState((prev) => ({ ...prev, processing: false, errors: { ...prev.errors, registration: message } }));
                }
            });
        }
    }

    validate() {
        let valid = true;

        const errors = {
            email: '',
            password: '',
            password2: '',
            registration: ''
        }

        const { email, password, password2 } = this.state;

        if (!email) {
            errors.email = 'You must specify your email address';
            valid = false;
        }
        else if (!isEmail(email)) {
            errors.email = 'This doesn\'t seem to be a valid email address';
            valid = false;
        }

        if (!password) {
            errors.password = 'You must specify a password';
            valid = false;
        }
        else if (password.length < 8) {
            errors.password = 'Your password must have at least 8 characters';
            valid = false;
        }

        if (!password2) {
            errors.password2 = 'You must repeat your password';
            valid = false;
        }
        else if (password && password !== password2) {
            errors.password2 = 'The passwords entered don\'t match';
            valid = false;
        }

        this.setState({ errors });

        return valid;
    }
}

export default Register;