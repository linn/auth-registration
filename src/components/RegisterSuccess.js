import React, { Component } from 'react';
import { Header, Container } from './common';

class RegisterSuccess extends Component {

    render() {
        document.title = 'Register for a Linn account | Linn';

        return (
            <Container>
                <Header caption="Thanks!" />
                <p>We've created your account.</p>

                <p>Before you can login, you need to verify your email address.</p>

                <p>You should shortly receive a email from us. Once you've clicked the verification link in the email, you'll be able to log in and use the site.</p>
            </Container>
        );
    }
}

export default RegisterSuccess;