import React, { Component } from 'react';

const styles = {
    base:
    {
        fontSize: '18px',
        lineHeight: '1.225',
        cursor: 'pointer',
        fontWeight: '400',
        transition: 'background-color 100ms',
        border: 'none',
        color: '#fff',
        padding: '20px',
        width: '100%',
        minHeight: '62px'
    },
    active: hovering => (
        {
            backgroundColor: hovering ? '#000' : '#333',
        }
    ),
    disabled: {
        backgroundColor: '#666',
        cursor: 'default'
    }
};

export class Button extends Component {
    state = {
        hovering: false
    }

    render() {
        const { caption, type = 'button', disabled = false } = this.props;

        const modifiedStyle = disabled ?
            styles.disabled :
            styles.active(this.state.hovering);

        const style = { ...styles.base, ...modifiedStyle };

        return (
            <button
                type={type}
                style={style}
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
                onClick={e => this.handleClick(e)}
                disabled={disabled}>{caption}</button>
        );
    }

    handleMouseEnter() {
        this.setState({ hovering: true });
    }

    handleMouseLeave() {
        this.setState({ hovering: false });
    }

    handleClick(e) {
        const { onClick } = this.props;

        if (onClick) {
            e.preventDefault();
            onClick();
        }
    }
}
