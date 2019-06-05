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
 *              "tax_rate": 0.3,
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
 *                  "tax_rate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 5980
 *              },
 *              {
 *                  "id": 2,
 *                  "user_id": 1,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 6000,
 *                  "tax": 2100,
 *                  "tax_rate": 0.3,
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
 *           {
 *               "id": 5,
 *               "user_id": 1,
 *               "delivery": 1000,
 *               "tax_rate": 0.3,
 *               "tax": 1260,
 *               "total": 4460,
 *               "products": [
 *                   {
 *                       "product_order_id": 5,
 *                       "product_id": 1,
 *                       "name": "Kiva Chocolate Bar-0",
 *                       "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png",
 *                       "spec_id": 1,
 *                       "size": "1 bar",
 *                       "price": 1200,
 *                       "quantity": 1,
 *                       "total": 1200
 *                   },
 *                   {
 *                       "product_order_id": 6,
 *                       "product_id": 2,
 *                       "name": "Boss OG Pre-Ground-0",
 *                       "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaW9mIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0d42ff6385b473929de6ad07106fb15cd78d725/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/preground.png",
 *                       "spec_id": 2,
 *                       "size": "Half Oz",
 *                       "price": 2000,
 *                       "quantity": 1,
 *                       "total": 2000
 *                   }
 *               ]
 *           }
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
 *                  "tax_rate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 5980
 *              },
 *              {
 *                  "id": 4,
 *                  "user_id": 2,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 2000,
 *                  "tax": 900,
 *                  "tax_rate": 0.3,
 *                  "delivery": 1000,
 *                  "total": 3900
 *              },
 *              {
 *                  "id": 6,
 *                  "user_id": 2,
 *                  "created_at": "2019-05-22 20:56:20",
 *                  "subtotal": 3200,
 *                  "tax": 1260,
 *                  "tax_rate": 0.3,
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
 *              "tax_rate": 0.3,
 *              "delivery": 1000,
 *              "total": 5980
 *          }
 */
