export const getReturnUrl = search => {
    if (!search || !search.includes('returnUrl')) {
        return false;
    }

    const startIndex = search.indexOf('returnUrl=');
    const endIndex = search.indexOf('&', startIndex + 1);

    const raw = endIndex > -1
        ? search.substring(startIndex + 10, endIndex)
        : search.substring(startIndex + 10);

    return unescape(raw);
};

export const isEmbedded = search => {
    return search.includes('embedded=true');
}