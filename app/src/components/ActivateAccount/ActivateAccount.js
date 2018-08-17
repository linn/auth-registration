import React from 'react';
import Template from './Template';
import SuccessTemplate from './SuccessTemplate';
import { activate } from '../../actions';
import { getSuccess, getSuccessPath, getReturnUrl, getUsername, isEmbedded } from '../../helpers';

class ActivateAccount extends React.Component {
    state = {
        activationCode: '',
        errors: {
            activationCode: '',
            server: ''
        },
        processing: false
    }

    render() {
        const { location } = this.props;

        return getSuccess(this.props.location.search)
            ? <SuccessTemplate
                embedded={isEmbedded(location.search)}
                returnUrl={getReturnUrl(location.search)}
            />
            : <Template
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

            const username = getUsername(location.search);

            activate(this.state.activationCode, username).then(result => {
                if (result.success) {
                    history.push(getSuccessPath(history.location));
                }
                else {
                    const message = result.error.response.status === 404
                        ? 'Sorry, that activation code can\'t be matched.'
                        : result.error.message || 'Sorry, something\'s gone wrong.  Please try again later.';

                    this.setState(prev => ({ ...prev, processing: false, errors: { ...prev.errors, server: message } }));
                }
            });
        }
    }

    validate() {
        let valid = true;

        const errors = {
            activationCode: '',
            server: ''
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

export default ActivateAccount;