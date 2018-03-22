import React, { Component } from 'react';
import Template from './templates/SubmitPasswordReset';
import isEmail from 'validator/lib/isEmail';
import { submitPasswordReset } from '../actions';
import { isEmbedded } from '../helpers';

class SubmitPasswordReset extends Component {

    state = {
        password: '',
        password2: '',
        errors: {
            password: '',
            password2: '',
            passwordReset: ''
        },
        processing: false
    }

    render() {
        return <Template
            {...this.state}
            embedded={isEmbedded(location.search)}
            onSubmit={e => this.handleSubmit(e)}
            onPasswordChange={password => this.setState({ password })}
            onPassword2Change={password2 => this.setState({ password2 })}
        />
    }

    handleSubmit(e) {
        e.preventDefault();
        const { match, history } = this.props;
        const id = match.params.id;

        if (this.validate()) {
            this.setState({ processing: true });

            submitPasswordReset(id, this.state.password).then(result => {
                if (result.success) {
                    history.push(`/password-reset/${id}/success` + history.location.search);
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
            password: '',
            password2: '',
            passwordReset: ''
        }

        const { email, password, password2 } = this.state;

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

export default SubmitPasswordReset;