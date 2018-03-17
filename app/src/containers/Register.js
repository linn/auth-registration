import React, { Component } from 'react';
import { connect } from '../reduux';
import Register from '../components/Register';
import registerReducer from '../reducers/register';
import { setEmail, setPassword, setPassword2, register, setValidationErrors } from '../actions/register';

const mapDispatchToProps = (dispatch, getState) => ({
    onEmailChange: email => dispatch(setEmail(email)),
    onPasswordChange: password => dispatch(setPassword(password)),
    onPassword2Change: password2 => dispatch(setPassword2(password2)),
    onValidate: errors => dispatch(setValidationErrors(errors)),
    onSubmit: (email, password, history) => register(dispatch, getState)(email, password, history)
});

export default connect(registerReducer)(mapDispatchToProps)(Register);