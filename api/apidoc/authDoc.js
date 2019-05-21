/**
 * @api {post} /api/users/register Create a new user
 * @apiGroup Authentication
 * @apiParam {String} firstname The user's first name
 * @apiParam {String} lastname The user's last name
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * @apiParam {Number} zipcode The user's zipcode
 * @apiParam {Number} phone The user's phone number
 * @apiParam {Number} birthday The user's birthday
 * @apiParam {Boolean} is_admin Set to True if the user is an admin
 * @apiSuccess {Object} user Object containing the user's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *      {
 *          "id": 1,
 *          "firstname": "Admin",
 *          "lastname": "One",
 *          "email": "admin@test.com",
 *          "password": "$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW",
 *          "zipcode": 95123,
 *          "phone": 5552227777,
 *          "birthday": 511171200000,
 *          "is_admin": 1
 *      }
 */

/**
 * @api {post} /api/users/login User login
 * @apiGroup Authentication
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * @apiSuccess {Object} user Object containing the user's info
 * @apiError {401} Unauthorized Unauthorized credentials
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *      {
 *          "id": 1,
 *          "firstname": "Admin",
 *          "lastname": "One",
 *          "email": "admin@test.com",
 *          "password": "$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW",
 *          "zipcode": 95123,
 *          "phone": 5552227777,
 *          "birthday": 511171200000,
 *          "is_admin": 1
 *      }
 */
