import React, { Component } from 'react';
import { setValidationErrors } from './actions/register';

export const connect = reduce => (mapDispatchToProps = {}) => ComposedComponent => class extends Component {

    constructor(props) {
        super(props);

        this.state = reduce(undefined, { type: 'INIT', payload: null });
    }

    dispatch(action) {
        this.setState(state => reduce(state, action));
    }

    render() {
        return <ComposedComponent
            {...this.state}
            {...mapDispatchToProps(action => this.dispatch(action), () => this.state, () => this.props)}
        />
    }
}
