import React from 'react';

const styles = {
    outer: {
        textAlign: 'center'
    },
    loading: customStyle => ({
        backgroundColor: '#fff',
        height: '20px',
        width: '3px',
        animation: 'stretchdelay 1.2s infinite ease-in-out',
        display: 'inline-block',
        ...customStyle
    })
};

export const Loading = ({ customStyle = {} }) => (
    <div style={styles.outer} >
        <div style={{ ...styles.loading(customStyle) }}></div>{' '}
        <div style={{ ...styles.loading(customStyle), animationDelay: '-1.0s' }}></div>{' '}
        <div style={{ ...styles.loading(customStyle), animationDelay: '-0.9s' }}></div>{' '}
        <div style={{ ...styles.loading(customStyle), animationDelay: '-0.8s' }}></div>{' '}
        <div style={{ ...styles.loading(customStyle), animationDelay: '-0.7s' }}></div>{' '}
        <div style={{ ...styles.loading(customStyle), animationDelay: '-0.6s' }}></div>
    </div>
);
