import React from 'react';

const style = {
        borderBottom: '1px solid #ccc',
        display: 'block',
        paddingBottom: '10px',
        margin: 0,
        marginBottom: '20px',
        fontWeight: 'normal'
};

export class Header extends React.Component {
    render() {
        const { caption  } = this.props;

        return (
            <h2 style={style}>{caption}</h2>
        );
    }
}
