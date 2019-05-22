/**
 * @api {post} /api/types Add a new type
 * @apiGroup Types
 * @apiParam {String} name Type name
 * @apiParam {String} [description] The description of the type
 * @apiSuccess {Object} type Object containing the type's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *      {
 *          "id": 1,
 *          "name": "Hybrid",
 *          "description": null,
 *      }
 */

/**
 * @api {get} /api/types Get list of all types
 * @apiGroup Types
 * @apiSuccess {Array} types List of type objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": "Hybrid",
 *              "description": null
 *          },
 *          {
 *              "id": 2,
 *              "name": "Sativa",
 *              "description": null
 *          }
 *      ]
 */

/**
 * @api {get} /api/types/:id Get type by ID
 * @apiGroup Types
 * @apiParam {Number} id The type's id
 * @apiSuccess {Object} type Object containing the type's info
 * @apiError {404} typeNotFound The id of the type was not found
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *      {
 *          "id": 1,
 *          "name": "Hybrid",
 *          "description": null,
 *      }
 */

/**
 * @api {delete} /api/types/:id Delete a type
 * @apiGroup Types
 * @apiParam {Number} id The type's id
 * @apiSuccess {Number} id Should return the type's id
 * @apiError {404} typeNotFound The id of the type was not found
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} /api/types/:id Update a type
 * @apiGroup Types
 * @apiParam {Number} id The type's id
 * @apiSuccess {Object} type Should return the updated type object
 * @apiError {404} typeNotFound The id of the type was not found
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *      {
 *          "id": 1,
 *          "name": "Hybrid",
 *          "description": null,
 *      }
 */
