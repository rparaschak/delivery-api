import jsonwebtoken from 'jsonwebtoken';

const { sign, verify } = jsonwebtoken;
const hrs48 = 60 * 60 * 48;
const secret = 'Do not read, this is very secret!';

export const signToken = (payload, exp = hrs48) => {
    return sign(
        payload,
        secret,
        { expiresIn: exp },
    );
};

export const decodeToken = (token) => {
    return verify(token, secret);
};
