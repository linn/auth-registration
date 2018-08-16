import React from 'react';
import { Header, Container } from '../common';

class Template extends React.Component {

    render() {
        document.title = 'Reset your password | Linn';

        const { embedded, returnUrl } = this.props;

        return (
            <Container embedded={embedded}>
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

export default Template;