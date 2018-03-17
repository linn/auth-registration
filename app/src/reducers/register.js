import { actionTypes } from '../actions/register';

const defaultState = {
    email: 'sandy@cormie.com',
    password: 'sandycormie',
    password2: 'sandycormie',
    errors: {
        email: '',
        password: '',
        password2: '',
        registration: ''
    },
    processing: false
}

const register = (prevState = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_EMAIL:
            return ({ ...prevState, email: action.payload });

        case actionTypes.SET_PASSWORD:
            return ({ ...prevState, password: action.payload });

        case actionTypes.SET_PASSWORD2:
            return ({ ...prevState, password2: action.payload });

        case actionTypes.SET_VALIDATION_ERRORS:
            return ({ ...prevState, errors: action.payload });

        case actionTypes.BEGIN_REGISTRATION_REQUEST:
            return ({ ...prevState, processing: true });

        case actionTypes.REGISTRATION_REQUEST_FAIL:
            return ({ ...prevState, processing: false, errors: { ...prevState.errors, registration: action.payload } });

        default:
            return prevState;
    }
};

export default register;