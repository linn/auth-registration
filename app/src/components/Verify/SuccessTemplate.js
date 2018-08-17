import React from 'react';
import { Header, Container, LinkButton, ControlGroup } from '../common';

class SuccessTemplate extends React.Component {

    render() {
        return (
            <Container >
                <Header caption="Account Verified" />
                <p>Thanks, your account has been verified. You can now log in and start using your account.</p>

                <ControlGroup padding="30px">
                    <LinkButton caption="Log in" href="/account" />
                </ControlGroup>
            </Container>
        );
    }
}

export default SuccessTemplate;