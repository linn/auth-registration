import React from 'react';

const styles = {
    outer: {
        textAlign: 'center',
        height: '20px'
    },
    loading: {
        backgroundColor: '#fff',
        height: '100%',
        width: '3px',
        animation: 'stretchdelay 1.2s infinite ease-in-out',
        display: 'inline-block'
    }
};

export const Loading = () => (
    <div style={styles.outer} >
        <div style={{ ...styles.loading }}></div>{' '}
        <div style={{ ...styles.loading, animationDelay: '-1.0s' }}></div>{' '}
        <div style={{ ...styles.loading, animationDelay: '-0.9s' }}></div>{' '}
        <div style={{ ...styles.loading, animationDelay: '-0.8s' }}></div>{' '}
        <div style={{ ...styles.loading, animationDelay: '-0.7s' }}></div>{' '}
        <div style={{ ...styles.loading, animationDelay: '-0.6s' }}></div>
    </div>
);
