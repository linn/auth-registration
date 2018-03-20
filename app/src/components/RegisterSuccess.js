import React, { Component } from 'react';
import { Header, Container } from './common';
import { getReturnUrl } from '../helpers';

class RegisterSuccess extends Component {

    render() {
        const { location } = this.props;
        const search = location.search;
        const returnUrl = getReturnUrl(search);

        document.title = 'Register for a Linn account | Linn';

        return (
            <Container>
                <Header caption="Thanks!" />
                <p>We've created your account.</p>

                <p>Before you can login, you need to verify your email address.</p>

                <p>You should shortly receive a email from us. Once you've clicked the verification link in the email, you'll be able to log in and use the site.</p>

                {returnUrl &&
                    <p>Return to the <a href={returnUrl}>login page</a>.</p>
                }
            </Container>
        );
    }
}

export default RegisterSuccess;