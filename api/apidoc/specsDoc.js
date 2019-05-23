/**
 * @api {post} /api/specs Create a new spec for a product
 * @apiGroup Product Specs
 * @apiParam {Integer} product_id The product id is a foreign key from the products table
 * @apiParam {String} size The size of each unit
 * @apiParam {Integer} spec The cost per unit
 * @apiParam {Integer} inventory The number of units available for this spec
 * @apiSuccess {Object} spec Object containing the spec's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *          {
 *              "id": 1,
 *              "product_id": 1,
 *              "size": "1 bar",
 *              "price": 1200,
 *              "inventory": 200
 *          }
 */

/**
 * @api {get} /api/specs Get list of all specs
 * @apiGroup Product Specs
 * @apiSuccess {Array} specs List of spec objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 1,
 *                  "product_id": 1,
 *                  "size": "1 bar",
 *                  "price": 1200,
 *                  "inventory": 200
 *              },
 *              {
 *                  "id": 2,
 *                  "product_id": 2,
 *                  "size": "Half Oz",
 *                  "price": 2000,
 *                  "inventory": 200
 *              }
 *          ]
 */

/**
 * @api {get} /api/specs/:id Get a spec by ID
 * @apiGroup Product Specs
 * @apiParam {Integer} id The spec's id
 * @apiSuccess {Object} spec Object containing the spec's info
 * @apiError {404} specNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          {
 *              "id": 1,
 *              "product_id": 1,
 *              "size": "1 bar",
 *              "price": 1200,
 *              "inventory": 200
 *          }
 */

/**
 * @api {get} /api/specs/product/:id Get list of all specs by by product ID
 * @apiGroup Product Specs
 * @apiParam {Integer} id The product id
 * @apiSuccess {Array} specs Array containing a list of specs of the product
 * @apiError {404} productNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *          [
 *              {
 *                  "id": 4,
 *                  "product_id": 4,
 *                  "size": "1/8th",
 *                  "price": 1100,
 *                  "inventory": 200
 *              },
 *              {
 *                  "id": 5,
 *                  "product_id": 4,
 *                  "size": "Ouncce",
 *                  "price": 6300,
 *                  "inventory": 200
 *              }
 *          ]
 */

/**
 * @api {delete} /api/specs/:id Delete a spec
 * @apiGroup Product Specs
 * @apiParam {Integer} id The spec's id
 * @apiSuccess {Integer} id Should return the spec's id
 * @apiError {404} specNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} /api/specs/:id Update a spec
 * @apiGroup Product Specs
 * @apiParam {Integer} id The spec's id
 * @apiSuccess {Object} spec Should return the updated spec object
 * @apiError {404} specNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *          {
 *              "id": 1,
 *              "product_id": 1,
 *              "size": "1 bar",
 *              "price": 1200,
 *              "inventory": 200
 *          }
 */
