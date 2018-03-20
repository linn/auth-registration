import React, { Component } from 'react';
import { Header, Container } from './common';

class RequestPasswordResetSuccess extends Component {

    render() {
        document.title = 'Reset your password | Linn';

        return (
            <Container>
                <Header caption="Success!" />
                <p>We've received your request.</p>

                <p>You should receive a email from us shortly. Follow the link in the email to reset your password.</p>
            </Container>
        );
    }
}

export default RequestPasswordResetSuccess;