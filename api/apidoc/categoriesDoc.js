/**
 * @api {post} /api/categories Add a new category
 * @apiGroup Categories
 * @apiParam {String} name Category name
 * @apiParam {String} [description] The description of the category
 * @apiSuccess {Object} category Object containing the category's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *      {
 *          "id": 1,
 *          "name": "Edibles",
 *          "description": "Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience. Before you realize, you'll be hungry for more.",
 *      }
 */

/**
 * @api {get} /api/categories Get list of all categories
 * @apiGroup Categories
 * @apiSuccess {Array} categories List of category objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": "Edibles",
 *              "description": "Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience. Before you realize, you'll be hungry for more."
 *          },
 *          {
 *              "id": 2,
 *              "name": "Ready to Roll",
 *              "description": "Our Ready to Roll flower is all you need to roll one up at a moment's notice. These half ounces of pre-ground quality cannabis are convenient, potent, and priced to make any day a cheap vacation."
 *          }
 *      ]
 */

/**
 * @api {get} /api/categories/:id Get category by ID
 * @apiGroup Categories
 * @apiParam {Integer} id The category's id
 * @apiSuccess {Object} category Object containing the category's info
 * @apiError {404} categoryNotFound The id of the category was not found
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *      {
 *          "id": 1,
 *          "name": "Edibles",
 *          "description": "Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience. Before you realize, you'll be hungry for more.",
 *      }
 */

/**
 * @api {delete} /api/categories/:id Delete a category
 * @apiGroup Categories
 * @apiParam {Integer} id The category's id
 * @apiSuccess {Integer} id Should return the category's id
 * @apiError {404} categoryNotFound The id of the category was not found
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} /api/categories/:id Update a category
 * @apiGroup Categories
 * @apiParam {Integer} id The category's id
 * @apiSuccess {Object} category Should return the updated category object
 * @apiError {404} categoryNotFound The id of the category was not found
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *      {
 *          "id": 1,
 *          "name": "Edibles",
 *          "description": "Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience. Before you realize, you'll be hungry for more.",
 *      }
 */
