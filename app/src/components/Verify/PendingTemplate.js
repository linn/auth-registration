import React from 'react';
import { Header, Container, Loading } from '../common';

const style = {
    backgroundColor: 'rgb(10,213,215)'
};

class PendingTemplate extends React.Component {
    render() {
        return (
            <Container customStyle={{ textAlign: 'center' }} >
                <Header caption="Verifying your account" />

                <p>We're processing your request, <br/>please wait a second.</p>

                <Loading customStyle={style} />
            </Container>
        );
    }
}

export default PendingTemplate;