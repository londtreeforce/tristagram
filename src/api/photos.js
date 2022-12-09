import { makeRequest } from "./makeReques";

const URL = '/posts';

export const getPhotos = (config) => makeRequest({
    method: 'GET',
    url: URL,
    ...config,
});
