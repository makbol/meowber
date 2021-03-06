import { API_HOST, API_KEY, API_VERSION } from './config';
import { mapSearchResponse } from './api.mapper';

function request(method, url, params) {
    let queryString = '?';
    const queryStringParts = [];

    Object.keys(params).forEach(key => {
        queryStringParts.push(key + '=' + encodeURIComponent(params[key]));
    });
    queryString += queryStringParts.join('&');

    return fetch(url + queryString, { method })
        .then(response => {
            return response.ok
                ? response.json()
                : Promise.reject(response.status, response.statusText);
        })
        .catch(console.error);
}

function get(path, params) {
    const url = `${API_HOST}/${API_VERSION}/${path}`;
    const requestParams = Object.assign({}, params, { api_key: API_KEY });

    return request('GET', url, requestParams);
}

export function search(query, limit, offset) {
    const endpoint = 'gifs/search';
    return get(endpoint, { q: query, limit, offset })
        .then(mapSearchResponse);
}
