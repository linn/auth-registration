const getQueryParameter = (search, parameterName) => {
    if (!search || !search.includes(parameterName)) {
        return false;
    }

    const startIndex = search.indexOf(`${parameterName}=`);
    const endIndex = search.indexOf('&', startIndex + 1);

    const raw = endIndex > -1
        ? search.substring(startIndex + parameterName.length + 1, endIndex)
        : search.substring(startIndex + parameterName.length + 1);

    return decodeURIComponent(raw);
}

export const getReturnUrl = search => getQueryParameter(search, 'returnUrl');

export const getUsername = search => getQueryParameter(search, 'username');

export const getSuccess = search => search.includes('success');

export const isEmbedded = search => search.includes('embedded=true');

export const addQuery = (search, query) => {
    return search.indexOf('?') > -1
        ? `${search}&${query}`
        : `?${query}`;
};

export const getSuccessPath = location =>  location.pathname + addQuery( location.search, 'success');
