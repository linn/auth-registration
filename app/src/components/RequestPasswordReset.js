import React, { Component } from 'react';
import Template from './templates/RequestPasswordReset';
import isEmail from 'validator/lib/isEmail';
import { requestPasswordReset } from '../actions';

class RequestPasswordReset extends Component {

    state = {
        email: '',
        errors: {
            email: '',
            passwordReset: ''
        },
        processing: false
    }

    render() {
        return <Template
            {...this.state}
            onSubmit={e => this.handleSubmit(e)}
            onEmailChange={email => this.setState({ email })}
        />
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        if (this.validate()) {
            this.setState({ processing: true });

            requestPasswordReset(this.state.email).then(result => {
                if (result.success) {
                    history.push('/password-reset/success' + history.location.search);
                }
                else {
                    const message = result.error.hasMessage
                        ? result.error.message
                        : 'Sorry! Something\'s gone wrong.  Please try again later.';

                    this.setState((prev) => ({ ...prev, processing: false, errors: { ...prev.errors, passwordReset: message } }));
                }
            });
        }
    }

    validate() {
        let valid = true;

        const errors = {
            email: '',
            passwordReset: ''
        }

        const { email } = this.state;

        if (!email) {
            errors.email = 'You must specify your email address';
            valid = false;
        }
        else if (!isEmail(email)) {
            errors.email = 'This doesn\'t seem to be a valid email address';
            valid = false;
        }

        this.setState({ errors });

        return valid;
    }
}

export default RequestPasswordReset;