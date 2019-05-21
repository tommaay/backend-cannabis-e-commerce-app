/**
 * @api {get} /api/users Get list of all users
 * @apiGroup Users
 * @apiSuccess {Array} users List of user objects
 * @apiSuccessExample {Array} Success Response:
 *      HTTP/1.1 200 OK
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
 * @api {get} /api/users/:id Get user by ID
 * @apiGroup Users
 * @apiParam {Number} id The user's ID
 * @apiSuccess {Object} user Blah Balh
 * @apiSuccessExample {json} Success Response:
 *      HTTP/1.1 200 OK
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
 * @apiError {404} UserNotFound The <code>id</code> of the User was not found.
 */
