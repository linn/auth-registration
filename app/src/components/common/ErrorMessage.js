import React, { Component } from 'react';

const styles = {
    outer: {
        display: 'block',
        border: '1px solid #ffd0d5',
        backgroundColor: '#f8d7da',
        padding: '20px',
        margin: '10px 0'
    },
    message: {
        display: 'block',
        fontWeight: '400'
    },
    error: {
        display: 'block',
        marginTop: '10px',
        fontStyle: 'italic',
        fontSize: '16px'
    }
};

export class ErrorMessage extends Component {
    render() {
        const { message } = this.props;

        return (
            <div style={styles.outer}>
                <span style={styles.message}>{ message }</span>
            </div>
        );
    }
}
