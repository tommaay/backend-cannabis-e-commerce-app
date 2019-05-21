const db = require('../../data/dbConfig');
const jwt = require('jsonwebtoken');

module.exports = {
    register,
    login,
    generateToken,
    protected,
};

function register(userInfo) {
    return db('users')
        .insert(userInfo)
        .returning(userInfo);
}

function login(loginCreds) {
    return db('users')
        .where({ email: loginCreds.email })
        .first();
}

function generateToken(user) {
    const payload = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        zipcode: user.zipcode,
        phone: user.phone,
        birthday: user.birthday,
        is_admin: user.is_admin,
    };

    const secret = process.env.JWT_SECRET;

    const options = {
        expiresIn: '60m',
    };

    return jwt.sign(payload, secret, options);
}

function protected(req, res, next) {
    const token = req.header.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
            } else {
                req.token = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
}
