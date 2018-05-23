import React from 'react';

const style = {
    outer: {
        padding: '20px 0'
    },
    link: {
        float: 'right'
    }
};

export const Cancel = ({href}) => (
    <div style={style.outer}>
        <a href={href} style={style.link}>Cancel</a>
    </div>
);