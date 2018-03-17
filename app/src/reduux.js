import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import { setValidationErrors } from './actions/register';

export const connect = reduce => (mapDispatchToProps = {}, mapThunkToProps = {}) => ComposedComponent => class extends Component {

    constructor(props) {
        super(props);

        this.state = reduce(undefined, { type: 'INIT', payload: null });
    }

    dispatch(action) {
        this.setState(state => reduce(state, action));
    }

    doThunk(dispatch, getState) {
        thunk(this.dispatch, () => this.state);
    }

    render() {
        return <ComposedComponent
            {...this.state}
            // onSubmit={e => this.handleSubmit(e)}
            {...mapDispatchToProps(action => this.dispatch(action))}
            {...mapThunkToProps(thunk => thunk(this.dispatch, () => this.state)) }
        />
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const { history } = this.props;

    //     if (this.validate()) {
    //         this.dispatch(beginRegistrationRequest());

    //         register(this.state.email, this.state.password).then(result => {
    //             if (result.success) {
    //                 history.push('/register/success' + history.location.search);
    //             }
    //             else {
    //                 const message = result.error.hasMessage
    //                     ? result.error.message
    //                     : 'Sorry! Something\'s gone wrong.  Please try again later.';

    //                 this.dispatch(registrationRequestFail(message));
    //             }
    //         });
    //     }
    // }

    // validate() {
    //     let valid = true;

    //     const errors = {
    //         email: '',
    //         password: '',
    //         password2: '',
    //         registration: ''
    //     }

    //     const { email, password, password2 } = this.state;

    //     if (!email) {
    //         errors.email = 'You must specify your email address';
    //         valid = false;
    //     }
    //     else if (!isEmail(email)) {
    //         errors.email = 'This doesn\'t seem to be a valid email address';
    //         valid = false;
    //     }

    //     if (!password) {
    //         errors.password = 'You must specify a password';
    //         valid = false;
    //     }
    //     else if (password.length < 8) {
    //         errors.password = 'Your password must have at least 8 characters';
    //         valid = false;
    //     }

    //     if (!password2) {
    //         errors.password2 = 'You must repeat your password';
    //         valid = false;
    //     }
    //     else if (password && password !== password2) {
    //         errors.password2 = 'The passwords entered don\'t match';
    //         valid = false;
    //     }

    //     this.dispatch(setValidationErrors(errors))

    //     return valid;
    // }
}
