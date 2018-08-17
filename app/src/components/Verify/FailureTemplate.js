import React from 'react';
import { Header, Container, ErrorMessage, LinkButton, ControlGroup } from '../common';

class FailureTemplate extends React.Component {

    render() {
        const { error } = this.props;
        return (
            <Container >
                <Header caption="Verification Failed" />
                <ErrorMessage message={error} />

                <p>You can either try again later, or start again with a new registration.</p>

                <ControlGroup padding="30px">
                    <LinkButton href="/register" caption="Start new registration" />
                </ControlGroup>
            </Container>
        );
    }
}

export default FailureTemplate;