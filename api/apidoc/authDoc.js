/**
 * @api {post} https://flower-co.herokuapp.com/api/users/register Create a new user
 * @apiGroup Authentication
 * @apiParam {String} firstname The user's first name
 * @apiParam {String} lastname The user's last name
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * @apiParam {Integer} zipcode The user's zipcode
 * @apiParam {Integer} phone The user's phone number
 * @apiParam {Integer} birthday The user's birthday
 * @apiParam {Boolean} is_admin Set to True if the user is an admin
 * @apiSuccess {Object} user Object containing the user's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *      {
 *          "user": {
 *              "id": 2,
 *              "firstname": "Customer",
 *              "lastname": "One",
 *              "email": "customer@test.com",
 *              "password": "$2a$11$4Mu6wGoQUUJAKs4b/wmBi.4rDpn1QyGI20U7.3jbHVTHbQ2gGItaW",
 *              "zipcode": 95133,
 *              "phone": "222-555-7777",
 *              "birthday": 651481200000,
 *              "is_admin": 0
 *          },
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJDdXN0b21lciIsImxhc3RuYW1lIjoiT25lIiwiZW1haWwiOiJjdXN0b21lckB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDExJDRNdTZ3R29RVVVKQUtzNGIvd21CaS40ckRwbjFReUdJMjBVNy4zamJIVlRIYlEyZ0dJdGFXIiwiemlwY29kZSI6OTUxMzMsInBob25lIjoiMjIyLTU1NS03Nzc3IiwiYmlydGhkYXkiOjY1MTQ4MTIwMDAwMCwiaXNfYWRtaW4iOjAsImlhdCI6MTU1OTA3MDczNiwiZXhwIjoxNTU5MDc0MzM2fQ.eB0v4bCKpvnE1YU44ujPTThRSpzhsXRgQzLXD_9MkpE"
 *      }
 */

/**
 * @api {post} https://flower-co.herokuapp.com/api/users/login User login
 * @apiGroup Authentication
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * @apiSuccess {Object} user Object containing the user's info
 * @apiError {401} Unauthorized You are unathorized to view the content
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *      {
 *          "user": {
 *              "id": 2,
 *              "firstname": "Customer",
 *              "lastname": "One",
 *              "email": "customer@test.com",
 *              "password": "$2a$11$4Mu6wGoQUUJAKs4b/wmBi.4rDpn1QyGI20U7.3jbHVTHbQ2gGItaW",
 *              "zipcode": 95133,
 *              "phone": "222-555-7777",
 *              "birthday": 651481200000,
 *              "is_admin": 0
 *          },
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJDdXN0b21lciIsImxhc3RuYW1lIjoiT25lIiwiZW1haWwiOiJjdXN0b21lckB0ZXN0LmNvbSIsInBhc3N3b3JkIjoiJDJhJDExJDRNdTZ3R29RVVVKQUtzNGIvd21CaS40ckRwbjFReUdJMjBVNy4zamJIVlRIYlEyZ0dJdGFXIiwiemlwY29kZSI6OTUxMzMsInBob25lIjoiMjIyLTU1NS03Nzc3IiwiYmlydGhkYXkiOjY1MTQ4MTIwMDAwMCwiaXNfYWRtaW4iOjAsImlhdCI6MTU1OTA3MDczNiwiZXhwIjoxNTU5MDc0MzM2fQ.eB0v4bCKpvnE1YU44ujPTThRSpzhsXRgQzLXD_9MkpE"
 *      }
 */
