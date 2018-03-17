import React, { Component } from 'react';
import { connect } from '../reduux';
import Register from '../components/Register';
import register from '../reducers/register';
import { setEmail, setPassword, setPassword2, register2 } from '../actions/register';

const mapDispatchToProps = (dispatch, getState) => ({
    onEmailChange: val => dispatch(setEmail(val)),
    onPasswordChange: val => dispatch(setPassword(val)),
    onPassword2Change: val => dispatch(setPassword2(val)),
    onSubmit: () => register2(dispatch, getState)()
});

export default connect(register)(mapDispatchToProps)(Register);