import React, { Component } from 'react';

const style = embedded => ({
    margin: '0 auto',
    maxWidth: '500px',
    padding: embedded ? '30px' : '50px'
});

export class Container extends Component {
    render() {
        const { children, embedded = false  } = this.props;

        return (
            <div style={style(embedded)}>{children}</div>
        );
    }
}
