import React from 'react';

const style = (embedded, customStyle) => ({
    margin: '0 auto',
    maxWidth: '500px',
    padding: embedded ? '20px 30px' : '50px',
    ...customStyle
});

export class Container extends React.Component {
    render() {
        const { children, embedded = false, customStyle = {} } = this.props;

        return (
            <div style={style(embedded, customStyle)}>{children}</div>
        );
    }
}
