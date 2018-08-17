import React from 'react';
import { Header, Container } from '../common';

class Template extends React.Component {

    render() {
        const { embedded, returnUrl } = this.props;

        document.title = 'Reset your password | Linn';

        return (
            <Container embedded={embedded}>
                <Header caption="Password Reset" />
                <p>Thanks, we've received your request.</p>

                <p>You should shortly receive an email from us containing a link you can use to reset your password.</p>

                {returnUrl &&
                    <p>Return to the <a href={returnUrl}>login page</a>.</p>
                }
            </Container>
        );
    }
}

export default Template;