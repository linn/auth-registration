import React, { Component } from 'react';
import { Header, Container } from './common';
import { getReturnUrl } from '../helpers';

class SubmitPasswordResetSuccess extends Component {

    render() {
        const { location } = this.props;
        const search = location.search;
        const returnUrl = getReturnUrl(search);

        document.title = 'Reset your password | Linn';

        return (
            <Container>
                <Header caption="Success!" />
                <p>You're password has been updated.</p>

                {returnUrl
                    ? <p>Return to the <a href={returnUrl}>login page</a>.</p>
                    : <p>You can now login to <a href="/account">your account</a>.</p>
                }
            </Container>
        );
    }
}

export default SubmitPasswordResetSuccess;