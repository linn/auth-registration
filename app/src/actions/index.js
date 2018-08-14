import { postJson } from '../helpers/json';
import config from '../config';

export const register = async (username, password) => {
    try {
        const body = { username, password };
        await postJson(`${config.wwwRoot}/api/register`, body);

        return { success: true };

    } catch (e) {
        return {
            success: false,
            error: e
        };
    }
};

export const verify = async (activationCode, username) => {
    try {
        const body = { activationCode, username };
        await postJson(`${config.wwwRoot}/api/activate-account`, body);

        return { success: true };

    } catch (e) {
        console.log(e)
        return {
            success: false,
            error: e
        };
    }
};

export const requestPasswordReset = async email => {
    try {
        const body = { email };
        await postJson(`${config.wwwRoot}/api/password-reset`, body);

        return { success: true };

    } catch (e) {
        return {
            success: false,
            error: e
        };
    }
}

export const submitPasswordReset = async (id, password) => {
    try {
        const body = { password };
        await postJson(`${config.wwwRoot}/api/password-reset/${id}`, body);

        return { success: true };

    } catch (e) {
        return {
            success: false,
            error: e
        };
    }
}