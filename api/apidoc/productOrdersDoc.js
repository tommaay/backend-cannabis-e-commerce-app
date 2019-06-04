/**
 * @api {post} https://flower-co.herokuapp.com/api/product-orders Create a new product-order
 * @apiGroup Product-Orders
 * @apiParam {Integer} product_id The product id is a foreign key from the products table
 * @apiParam {Integer} price_id The price is a foreign key from the prices table
 * @apiParam {Integer} order_id The order is a foreign key from the orders table
 * @apiParam {Integer} quantity The number of units purchased
 * @apiParam {Integer} total The total amount for this product for the order
 * @apiSuccess {Object} order Object containing the product-order's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *          {
 *              "id": 5,
 *              "order_id": 5,
 *              "product_id": 1,
 *              "spec_id": 1,
 *              "quantity": 1,
 *              "total": 1200
 *          }
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/product-orders Get list of all product-orders
 * @apiGroup Product-Orders
 * @apiSuccess {Array} orders List of product-order objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 1,
 *                  "order_id": 1,
 *                  "product_id": 1,
 *                  "spec_id": 1,
 *                  "quantity": 3,
 *                  "total": 3600
 *              },
 *              {
 *                  "id": 2,
 *                  "order_id": 2,
 *                  "product_id": 1,
 *                  "spec_id": 1,
 *                  "quantity": 5,
 *                  "total": 6000
 *              }
 *          ]
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/product-orders/:id Get a product-order by ID
 * @apiGroup Product-Orders
 * @apiParam {Integer} id The order's id
 * @apiSuccess {Object} order Object containing the order's info
 * @apiError {404} orderNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          {
 *              "id": 5,
 *              "order_id": 5,
 *              "product_id": 1,
 *              "spec_id": 1,
 *              "quantity": 1,
 *              "total": 1200
 *          }
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/product-orders/order/:id Get list of all product-orders by by Order ID
 * @apiGroup Product-Orders
 * @apiParam {Integer} id The order id
 * @apiSuccess {Array} orders Array containing a list of orders
 * @apiError {404} userNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 5,
 *                  "order_id": 5,
 *                  "product_id": 1,
 *                  "spec_id": 1,
 *                  "quantity": 1,
 *                  "total": 1200
 *              },
 *              {
 *                  "id": 6,
 *                  "order_id": 5,
 *                  "product_id": 2,
 *                  "spec_id": 2,
 *                  "quantity": 1,
 *                  "total": 2000
 *              }
 *          ]
 */

/**
 * @api {delete} https://flower-co.herokuapp.com/api/product-orders/:id Delete a product-order
 * @apiGroup Product-Orders
 * @apiParam {Integer} id The product-order's id
 * @apiSuccess {Integer} id Should return the order's id
 * @apiError {404} orderNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} https://flower-co.herokuapp.com/api/product-orders/:id Update a product-order
 * @apiGroup Product-Orders
 * @apiParam {Integer} id The product-order's id
 * @apiSuccess {Object} order Should return the updated order object
 * @apiError {404} orderNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *          {
 *              "id": 5,
 *              "order_id": 5,
 *              "product_id": 1,
 *              "spec_id": 1,
 *              "quantity": 1,
 *              "total": 1200
 *          }
 */
