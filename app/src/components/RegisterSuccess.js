import React, { Component } from 'react';
import Template from './templates/RegisterSuccess';
import { verify } from '../actions';
import { getReturnUrl, getUsername, isEmbedded } from '../helpers';

class RegisterSuccess extends Component {
    state = {
        activationCode: '',
        errors: {
            activationCode: '',
            verification: ''
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
            onActivationCodeChange={activationCode => this.setState({ activationCode })}
        />;
    }

    handleSubmit(e) {
        e.preventDefault();
        const { location, history } = this.props;

        if (this.validate()) {
            this.setState({ processing: true });

            const username= getUsername(location.search);

            verify(this.state.activationCode, username).then(result => {

                if (result.success) {
                    history.push('/register/success' + history.location.search);
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

        const { activationCode } = this.state;

        if (!activationCode) {
            errors.activationCode = 'You must enter your six-character activation code';
            valid = false;
        }
        else if (activationCode.length !== 6) {
            errors.activationCode = 'The activation code should be six characters long';
            valid = false;
        }

        this.setState({ errors });

        return valid;
    }
}

export default RegisterSuccess;