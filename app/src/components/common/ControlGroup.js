import React from 'react';

const style = padding => ({
    padding: `${padding} 0`
});

export class ControlGroup extends React.Component {
    render() {
        const { children, padding = '10px'  } = this.props;

        return (
            <div style={style(padding)}>{children}</div>
        );
    }
}
