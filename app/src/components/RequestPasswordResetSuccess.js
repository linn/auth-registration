import React, { Component } from 'react';
import { Header, Container } from './common';
import { getReturnUrl } from '../helpers';

class RequestPasswordResetSuccess extends Component {

    render() {
        const { location } = this.props;
        const search = location.search;
        const returnUrl = getReturnUrl(search);

        document.title = 'Reset your password | Linn';

        return (
            <Container>
                <Header caption="Success!" />
                <p>We've received your request.</p>

                <p>You should receive a email from us shortly. Follow the link in the email to reset your password.</p>

                {returnUrl &&
                    <p>Return to the <a href={returnUrl}>login page</a>.</p>
                }
            </Container>
        );
    }
}

export default RequestPasswordResetSuccess;