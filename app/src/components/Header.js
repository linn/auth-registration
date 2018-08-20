import React from 'react';
import { Logo } from './common';
import { isEmbedded } from '../helpers';

const style = {
    backgroundColor: '#373946',
    padding: '21px',
    position: 'relative'
};

class Header extends React.Component {
    render() {
        const { location } = this.props;

        if (isEmbedded(location.search)) {
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