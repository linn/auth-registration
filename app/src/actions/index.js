import { postJson } from '../helpers/json';
import config from '../config';

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