/**
 * @api {post} https://flower-co.herokuapp.com/api/orders Create a new order
 * @apiGroup Orders
 * @apiParam {Integer} user_id The user id is a foreign key from the users table
 * @apiParam {Integer} subtotal The total before tax
 * @apiParam {Float} tax The tax percentage
 * @apiParam {Integer} type The total amount after taxes
 * @apiSuccess {Object} order Object containing the order's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *          {
 *              "id": 1,
 *              "user_id": 2,
 *              "created_at": "2019-05-22 20:56:20",
 *              "subtotal": 3600,
 *              "tax": 1380,
 *              "taxRate": 0.3,
 *              "delivery": 1000,
 *              "total": 5980
 *          }
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/orders Get list of all orders
 * @apiGroup Orders
 * @apiSuccess {Array} orders List of order objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 1,
 *                  "user_id": 2,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 3600,
 *                  "tax": 1380,
 *                  "taxRate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 5980
 *              },
 *              {
 *                  "id": 2,
 *                  "user_id": 1,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 6000,
 *                  "tax": 2100,
 *                  "taxRate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 9100
 *              },
 *          ]
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/orders/:id Get order by ID
 * @apiGroup Orders
 * @apiParam {Integer} id The order's id
 * @apiSuccess {Object} order Object containing the order's info
 * @apiError {404} orderNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          {
 *              "id": 1,
 *              "user_id": 2,
 *              "created_at": "2019-05-22 20:56:20",
 *              "subtotal": 3600,
 *              "tax": 1380,
 *              "taxRate": 0.3,
 *              "delivery": 1000,
 *              "total": 5980
 *          }
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/orders/user/:id Get list of all orders by by User ID
 * @apiGroup Orders
 * @apiParam {Integer} id The user's id
 * @apiSuccess {Array} orders Array containing a list of orders
 * @apiError {404} userNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 1,
 *                  "user_id": 2,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 3600,
 *                  "tax": 1380,
 *                  "taxRate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 5980
 *              },
 *              {
 *                  "id": 4,
 *                  "user_id": 2,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 2000,
 *                  "tax": 900,
 *                  "taxRate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 3900
 *              },
 *              {
 *                  "id": 6,
 *                  "user_id": 2,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 3200,
 *                  "tax": 1260,
 *                  "taxRate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 5460
 *              }
 *          ]
 */

/**
 * @api {delete} https://flower-co.herokuapp.com/api/orders/:id Delete an order
 * @apiGroup Orders
 * @apiParam {Integer} id The order's id
 * @apiSuccess {Integer} id Should return the order's id
 * @apiError {404} orderNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} https://flower-co.herokuapp.com/api/orders/:id Update order
 * @apiGroup Orders
 * @apiParam {Integer} id The order's id
 * @apiSuccess {Object} order Should return the updated order object
 * @apiError {404} orderNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *          {
 *              "id": 1,
 *              "user_id": 2,
 *              "created_at": "2019-05-22 20:56:20",
 *              "subtotal": 3600,
 *              "tax": 1380,
 *              "taxRate": 0.3,
 *              "delivery": 1000,
 *              "total": 5980
 *          }
 */
