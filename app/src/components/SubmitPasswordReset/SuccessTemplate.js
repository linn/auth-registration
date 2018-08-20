import React from 'react';
import { Header, Container } from '../common';

class SuccessTemplate extends React.Component {

    render() {
        const { embedded, returnUrl } = this.props;

        document.title = 'Reset your password | Linn';

        return (
            <Container embedded={embedded}>
                <Header caption="Success!" />
                <p>Your password has been updated.</p>

                {returnUrl
                    ? <p>Return to the <a href={returnUrl}>login page</a>.</p>
                    : <p>You can now login to <a href="/account">your account</a>.</p>
                }
            </Container>
        );
    }
}

export default SuccessTemplate;