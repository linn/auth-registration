import React from 'react';

const style = (embedded, hovering) =>
    ({
        display: 'block',
        fontSize: '18px',
        lineHeight: '1.225',
        cursor: 'pointer',
        fontWeight: '400',
        textAlign: 'center',
        backgroundColor: hovering ? '#eee' : '#fff',
        transition: 'background-color 100ms',
        border: '1px solid #333',
        color: '#333',
        padding: embedded ? '10px' : '20px',
        width: '100%'
    });


export class LinkButton extends React.Component {
    state = {
        hovering: false
    }

    render() {
        const { caption, href, embedded = false } = this.props;

        return (
            <a href={href}
                style={style(embedded, this.state.hovering)}
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}>{caption}</a>
        );
    }

    handleMouseEnter() {
        this.setState({ hovering: true });
    }

    handleMouseLeave() {
        this.setState({ hovering: false });
    }
}
