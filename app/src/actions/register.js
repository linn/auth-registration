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

export const register = async (username, password) => {
    try {
        const body = { username, password };
        const data = await postJson(`${config.wwwRoot}/api/register`, body);

        return { success: true };

    } catch (e) {
        return {
            success: false,
            error: e
        };
    }
};

export const register2 = (dispatch, getState) =>  args =>{
    console.log('===========')
    console.log(args);
    console.log(dispatch);
    console.log(getState);
    console.log('===========')


    const state = getState();
    const { email, password, password2 } = state;

    if (validate(dispatch)(email, password, password2)) {
        dispatch(beginRegistrationRequest());

        register(email, password).then(result => {
            if (result.success) {
                //history.push('/register/success' + history.location.search);
                console.log('############# NAVIGATE TO SUCCESS PAGE ################')
            }
            else {
                const message = result.error.hasMessage
                    ? result.error.message
                    : 'Sorry! Something\'s gone wrong.  Please try again later.';

                dispatch(registrationRequestFail(message));
            }
        });
    }

}

const validate = dispatch => (email, password, password2) => {
    let valid = true;

    const errors = {
        email: '',
        password: '',
        password2: '',
        registration: ''
    }

    if (!email) {
        errors.email = 'You must specify your email address';
        valid = false;
    }
    else if (!isEmail(email)) {
        errors.email = 'This doesn\'t seem to be a valid email address';
        valid = false;
    }

    if (!password) {
        errors.password = 'You must specify a password';
        valid = false;
    }
    else if (password.length < 8) {
        errors.password = 'Your password must have at least 8 characters';
        valid = false;
    }

    if (!password2) {
        errors.password2 = 'You must repeat your password';
        valid = false;
    }
    else if (password && password !== password2) {
        errors.password2 = 'The passwords entered don\'t match';
        valid = false;
    }

    dispatch(setValidationErrors(errors))

    return valid;
}


// handleSubmit(e) {
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
