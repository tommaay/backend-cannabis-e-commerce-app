const db = require('../../data/dbConfig');
const jwt = require('jsonwebtoken');

module.exports = {
    register,
    login,
    getAll,
    getById,
    deleteUser,
    update,
    generateToken,
    protectedUser,
    protectedAdmin,
};

// register a new user
async function register(userInfo) {
    const user = await db('users').insert(userInfo);
    const id = parseInt(user[0]);

    return db('users')
        .where({ id: id })
        .first();
}

// user login
function login(loginCreds) {
    return db('users')
        .where({ email: loginCreds.email })
        .first();
}

// get list of all users
function getAll() {
    return db('users');
}

// get user by id
function getById(id) {
    return db('users')
        .where({ id: id })
        .first();
}

// delete user
async function deleteUser(id) {
    const user = db('users')
        .where({ id: id })
        .first();

    if (user) {
        await db('users')
            .where({ id: id })
            .delete();

        return parseInt(id);
    } else {
        return null;
    }
}

// update user
async function update(id, updatedInfo) {
    const user = await db('users')
        .where({ id: id })
        .first();

    if (user) {
        await db('users')
            .where({ id: id })
            .update(updatedInfo);

        return db('users')
            .where({ id: id })
            .first();
    } else {
        return null;
    }
}

// generate a token when user registers or login
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

// protect routes for logged in users
function protectedUser(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Invalid token' });
            } else {
                req.token = decodedToken;
                if (req.token.is_admin === 0) {
                    next();
                } else {
                    res.status(401).json({ error: 'Unauthorized permissions' });
                }
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
}

// protect routes for admins only
function protectedAdmin(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'Invalid token' });
            } else {
                req.token = decodedToken;
                if (req.token.is_admin === 1) {
                    next();
                } else {
                    res.status(401).json({ error: 'Unauthorized permissions' });
                }
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
}
