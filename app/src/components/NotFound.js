import React from 'react';
import { Header, Container } from './common';

class NotFound extends React.Component {

    render() {
        document.title = 'Not Found | Linn';

        return (
            <Container>
                <Header caption="Not Found" />
                <p>The page you are looking for has not been found.</p>
            </Container>
        );
    }
}

export default NotFound;