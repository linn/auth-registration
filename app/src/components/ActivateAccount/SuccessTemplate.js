import React from 'react';
import { Header, Container, LinkButton, ControlGroup } from '../common';

class SuccessTemplate extends React.Component {

    render() {
        const { embedded, returnUrl } = this.props;

        document.title = 'Register for a Linn account | Linn';

        return (
            <Container embedded={embedded} >
                <Header caption="Success!" />
                <p>Your account has been activated.  You can now log in.</p>

                <ControlGroup padding="30px">
                    <LinkButton caption="Return to log in page" embedded={embedded} href={returnUrl ? returnUrl : '/account'} />
                </ControlGroup>
            </Container>
        );
    }
}

export default SuccessTemplate;