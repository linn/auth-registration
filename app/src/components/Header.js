import React, { Component } from 'react';
import { Logo } from './common';

const style = {
    backgroundColor: '#373946',
    padding: '21px',
    position: 'relative'
};

class Header extends Component {
    render() {
        const { location } = this.props;
        const { search } = location;

        if (search.includes('embedded=true')) {
            return false;
        }

        return (
            <div style={style}>
                <Logo />
            </div>
        );
    }
}

export default Header;