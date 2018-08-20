import React from 'react';
import { Loading } from './Loading';

const style = embedded => ({
    backgroundColor: '#333',
    border: 'none',
    color: '#fff',
    padding: embedded ? '10px' : '20px',
    width: '100%',
    minHeight: embedded ? '42px' : '62px'
});

export const Processing = ({embedded = false}) => (
    <div style={style(embedded)}>
        <Loading />
    </div>
);
