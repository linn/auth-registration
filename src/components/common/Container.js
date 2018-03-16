import React, { Component } from 'react';

const style = {
    margin: '0 auto',
    maxWidth: '500px',
    padding: '50px'
};

export class Container extends Component {
    render() {
        const { children  } = this.props;

        return (
            <div style={style}>{children}</div>
        );
    }
}
