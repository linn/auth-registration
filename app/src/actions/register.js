import { postJson } from '../helpers/json';

export const actionTypes = {
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_PASSWORD2: 'SET_PASSWORD2',
    BEGIN_REGISTRATION_REQUEST: 'BEGIN_REGISTRATION_REQUEST',
    REGISTRATION_REQUEST_FAIL: 'REGISTRATION_REQUEST_FAIL',
    SET_VALIDATION_ERRORS: 'SET_VALIDATION_ERRORS'
};

export const setEmail = email => ({
    type: actionTypes.SET_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: actionTypes.SET_PASSWORD,
    payload: password
});

export const setPassword2 = password2 => ({
    type: actionTypes.SET_PASSWORD2,
    payload: password2
});

export const beginRegistrationRequest = () => ({
    type: actionTypes.BEGIN_REGISTRATION_REQUEST,
    payload: null
});

export const registrationRequestFail = error => ({
    type: actionTypes.REGISTRATION_REQUEST_FAIL,
    payload: error
});

export const setValidationErrors = errors => ({
    type: actionTypes.SET_VALIDATION_ERRORS,
    payload: errors
});

const config = {
    wwwRoot: 'https://www-sys.linn.co.uk'
};

export const register = (dispatch, getState) => async (username, password, history) => {
    try {
        dispatch(beginRegistrationRequest());

        const body = { username, password };
        const data = await postJson(`${config.wwwRoot}/api/register`, body);

        history.push('/register/success' + history.location.search);

    } catch (e) {
        const message = e.hasMessage
            ? e.message
            : 'Sorry! Something\'s gone wrong.  Please try again later.';

        dispatch(registrationRequestFail(message));
    }
}
