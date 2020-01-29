import {extractInfoFromToken} from './tokens.js';

export const extractAuth = (req) => {
    const token = req.headers.authorization;
    if(!token){
        throw new Error('Token was not provided');
    }

    return extractInfoFromToken(token);
};
