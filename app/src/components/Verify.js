import React, { Component } from 'react';
import { Header, Container } from './common';
import { getReturnUrl } from '../helpers';

class Verify extends Component {

    render() {
        const { location } = this.props;
        const search = location.search;

        document.title = 'Verify your email | Linn';
        // show a processing thingy until we know if the verification was successful or not

        return (
            <Container>
                <Header caption="Verify!" />
            </Container>
        );
    }

        componentDidMount() {
        alert('call the service!');
        // Set processing = true
    }

}

export default Verify;