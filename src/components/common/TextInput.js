import React, { Component } from 'react';

const styles = {
    group: {
        padding: '10px 0'
    },
    label: {
        display: 'block',
        marginBottom: '3px'
    },
    input: disabled => ({
        display: 'block',
        width: '100%',
        padding: '20px',
        fontSize: '18px',
        fontWeight: '200',
        border: '1px solid #c0c6ce',
        backgroundColor: disabled ? '#eaeaea' : '#f4f4f4'
    }),
    error: {
        paddingTop: '4px',
        display: 'block',
        color: 'red',
        fontWeight: '200'
    }
}

export class TextInput extends Component {
    render() {
        const { name, type = 'text', caption, placeholder, error, value, disabled = false } = this.props;

        return (
            <React.Fragment>
                <label style={styles.label} htmlFor={name}>{caption}</label>
                <input
                    ref={el => { this.element = el; }}
                    style={styles.input(disabled)}
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onBlur={() => this.handleBlur()}
                    onChange={e => this.handleChange(e)} />
                {error && <span style={styles.error}>{error}</span>}
            </React.Fragment>
        );
    }

    componentDidMount() {
        const {autofocus = false} = this.props;

        if (autofocus && this.element) {
            this.element.focus();
        }
    }

    handleChange(e) {
        const { onChange } = this.props;

        onChange(e.target.value);
    }

    handleBlur() {
        const {onBlur} = this.props;

        if (onBlur) {
            onBlur();
        }
    }
}
