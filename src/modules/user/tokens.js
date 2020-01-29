import {signToken, decodeToken} from '../../utils/jwt.js';

export const createAccessTokenForUser = (userId, expiration, payload = {}) => {
    return signToken({
        ...payload,
        userId
    }, expiration);
};

export const extractInfoFromToken = (token) => {
    return decodeToken(token);
}
