import React from 'react';
import Template from './Template';
import { requestPasswordReset } from '../../actions';
import isEmail from 'validator/lib/isEmail';
import { getReturnUrl, isEmbedded } from '../../helpers';

class RequestPasswordReset extends React.Component {

    state = {
        email: '',
        errors: {
            email: '',
            server: ''
        },
        processing: false
    }

    render() {
        return <Template
            {...this.state}
            embedded={isEmbedded(location.search)}
            returnUrl={getReturnUrl(location.search)}
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
                    const message = result.error.response.status === 404
                        ? 'Sorry, we can’t find an account with that email.'
                        : result.error.message || 'Sorry, something\'s gone wrong.  Please try again later.';

                    this.setState((prev) => ({ ...prev, processing: false, errors: { ...prev.errors, server: message } }));
                }
            });
        }
    }

    validate() {
        let valid = true;

        const errors = {
            email: '',
            server: ''
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