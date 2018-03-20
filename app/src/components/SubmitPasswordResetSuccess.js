import React, { Component } from 'react';
import { Header, Container } from './common';

class SubmitPasswordResetSuccess extends Component {

    render() {
        document.title = 'Reset your password | Linn';

        return (
            <Container>
                <Header caption="Success!" />
                <p>You're password has been updated.</p>
                <p>You can now login to <a href="/account">your account</a>.</p>
            </Container>
        );
    }
}

export default SubmitPasswordResetSuccess;