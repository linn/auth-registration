import React, { Component } from 'react';
import { connect } from '../reduux';
import Register from '../components/Register';
import registerReducer from '../reducers/register';
import { setEmail, setPassword, setPassword2, register, setValidationErrors } from '../actions/register';

const mapDispatchToProps = (dispatch, getState, getProps) => ({
    onEmailChange: val => dispatch(setEmail(val)),
    onPasswordChange: val => dispatch(setPassword(val)),
    onPassword2Change: val => dispatch(setPassword2(val)),
    onValidate: val => dispatch(setValidationErrors(val)),
    onSubmit: () => register(dispatch, getState, getProps)()
});

export default connect(registerReducer)(mapDispatchToProps)(Register);