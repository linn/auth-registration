import React from 'react';
import { Loading } from './Loading';

const style = {
    backgroundColor: '#333',
    border: 'none',
    color: '#fff',
    padding: '20px',
    width: '100%',
    minHeight: '62px'
};

export const Processing = () => (
    <div style={style}>
        <Loading />
    </div>
);
