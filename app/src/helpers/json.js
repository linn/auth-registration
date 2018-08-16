const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const postJson = (url, body) => {
    return fetch(url,
        {
            method: 'POST',
            headers: jsonHeaders,
            body: body && typeof body !== 'string' ? JSON.stringify(body) : '',
            credentials: 'same-origin'
        })
        .then(checkStatus)
        .then(response => response.json());
};

const checkStatus = async response => {
    if (response.ok) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;

        try {
            const jsonError = await response.json();
            const { errorMessage, errors} = jsonError;

            error.message = errorMessage || errors;
        }
        catch (e) { 
            error.message = response.statusText;
        }

        throw error;
    }
};
