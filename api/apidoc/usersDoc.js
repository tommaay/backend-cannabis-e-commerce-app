/**
 * @api {get} https://flower-co.herokuapp.com/api/users Get list of all users
 * @apiGroup Users
 * @apiSuccess {Array} users List of user objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *      [
 *          {
 *              "id": 1,
 *              "firstname": "Admin",
 *              "lastname": "One",
 *              "email": "admin@test.com",
 *              "password": "$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW",
 *              "zipcode": 95123,
 *              "phone": 5552227777,
 *              "birthday": 511171200000,
 *              "is_admin": 1
 *          },
 *          {
 *              "id": 2,
 *              "firstname": "Customer",
 *              "lastname": "One",
 *              "email": "customer@test.com",
 *              "password": "$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW",
 *              "zipcode": 95133,
 *              "phone": 2225557777,
 *              "birthday": 651481200000,
 *              "is_admin": 0
 *          }
 *      ]
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/users/:id Get user by ID
 * @apiGroup Users
 * @apiParam {Integer} id The user's id
 * @apiSuccess {Object} user Object containing the user's info
 * @apiError {404} UserNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
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
 * @api {delete} https://flower-co.herokuapp.com/api/users/:id Delete user
 * @apiGroup Users
 * @apiParam {Integer} id The user's id
 * @apiSuccess {Integer} id Should return the user's id
 * @apiError {404} UserNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} https://flower-co.herokuapp.com/api/users/:id Update user
 * @apiGroup Users
 * @apiParam {Integer} id The user's id
 * @apiSuccess {Object} user Should return the updated user object
 * @apiError {404} UserNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *      {
 *          "id": 1,
 *          "firstname": "Admin1",
 *          "lastname": "One",
 *          "email": "admin@test.com",
 *          "password": "$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW",
 *          "zipcode": 95123,
 *          "phone": 5552227777,
 *          "birthday": 511171200000,
 *          "is_admin": 1
 *      }
 */
