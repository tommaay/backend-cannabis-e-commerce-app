/**
 * @api {post} /api/prices Create a new price for a product
 * @apiGroup Prices
 * @apiParam {Integer} product_id The product id is a foreign key from the products table
 * @apiParam {String} size The size of each unit
 * @apiParam {Integer} price The cost per unit
 * @apiSuccess {Object} price Object containing the price's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *          {
 *              "id": 1,
 *              "product_id": 1,
 *              "size": "1 bar",
 *              "price": 1200
 *          }
 */

/**
 * @api {get} /api/prices Get list of all prices
 * @apiGroup Prices
 * @apiSuccess {Array} prices List of price objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 1,
 *                  "product_id": 1,
 *                  "size": "1 bar",
 *                  "price": 1200
 *              },
 *              {
 *                  "id": 2,
 *                  "product_id": 2,
 *                  "size": "Half Oz",
 *                  "price": 2000
 *              }
 *          ]
 */

/**
 * @api {get} /api/prices/:id Get a price by ID
 * @apiGroup Prices
 * @apiParam {Integer} id The price's id
 * @apiSuccess {Object} price Object containing the price's info
 * @apiError {404} priceNotFound The id of the price was not found
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          {
 *              "id": 1,
 *              "product_id": 1,
 *              "size": "1 bar",
 *              "price": 1200
 *          }
 */

/**
 * @api {get} /api/prices/product/:id Get list of all prices by by product ID
 * @apiGroup Prices
 * @apiParam {Integer} id The product id
 * @apiSuccess {Array} prices Array containing a list of prices of the product
 * @apiError {404} productNotFound The id of the product was not found
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 4,
 *                  "product_id": 4,
 *                  "size": "1/8th",
 *                  "price": 1100
 *              },
 *              {
 *                  "id": 5,
 *                  "product_id": 4,
 *                  "size": "Ouncce",
 *                  "price": 6300
 *              }
 *          ]
 */

/**
 * @api {delete} /api/prices/:id Delete a price
 * @apiGroup Prices
 * @apiParam {Integer} id The price's id
 * @apiSuccess {Integer} id Should return the price's id
 * @apiError {404} priceNotFound The id of the price was not found
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} /api/prices/:id Update a price
 * @apiGroup Prices
 * @apiParam {Integer} id The price's id
 * @apiSuccess {Object} price Should return the updated price object
 * @apiError {404} priceNotFound The id of the price was not found
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *          {
 *              "id": 5,
 *              "price_id": 5,
 *              "product_id": 1,
 *              "price_id": 1,
 *              "quantity": 1,
 *              "total": 1200
 *          }
 */
