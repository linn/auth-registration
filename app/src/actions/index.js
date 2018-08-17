import { postJson } from '../helpers/json';
import config from '../config';

const post = (uri, body) => postJson(`${config.wwwRoot}${uri}`, body)
    .then(data => ({ success: true, data }))
    .catch(error => ({ success: false, error }));

export const register = (username, password) => post('/api/register', { username, password });

export const activate = (activationCode, username) => post('/api/activate-account', { activationCode, username });

export const verify = registrationRequestId => post('/api/activate-account', { registrationRequestId });

export const requestPasswordReset = email => post('/api/password-reset', { email });

export const submitPasswordReset = (id, password) => post(`/api/password-reset/${id}`, { password });
