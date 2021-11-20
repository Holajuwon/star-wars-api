const { getMovies, getCharacterList } = require('../services')
const { createComment, getCommentsByMovieId } = require('../services/comment')
const { errorResponse } = require('../utils/errorResponse')
const { successResponse } = require('../utils/successResponse')

/**
 * @description - This controller gets all movies from the swapi.dev API
 * @param {Request} req request object
 * @param {Response} res response object
 * @returns returns success response with movie list
 */
exports.getMovies = async (req, res) => {
	try {
		const movies = await getMovies(req, res)
		successResponse(res, 200, 'movies fetched successfully', movies)
	} catch (error) {
		errorResponse(req, res, 500)
	}
}

/**
 * @description - This controller gets all characters from the swapi.dev API by movie id
 * @param {Request} req request object
 * @param {Response} res response object
 * @returns returns success response with character list
 */
exports.getCharacterList = async (req, res) => {
	try {
		const { id } = req.params

		const characters = await getCharacterList(req, res, id)

		if (characters) {
			successResponse(res, 200, 'characters fetched successfully', characters)
		}
	} catch (error) {
		errorResponse(req, res, 500, error.message)
	}
}

/**
 * @description - This controller creates a new comment
 * @param {Request} req request object
 * @param {Response} res response object
 * @returns returns success response with comment
 */
exports.createComment = async (req, res) => {
	try {
		const { id } = req.params
		const { comment } = req.body

		let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
		ip = ip?.split(',')[0]
		const result = await createComment([id, comment, ip])

		successResponse(res, 201, 'comment created successfully', result)
	} catch (error) {
		errorResponse(req, res, 500)
	}
}

/**
 * @description - This controller gets all comments by movie id
 * @param {Request} req request object
 * @param {Response} res response object
 * @returns returns success response with comment list
 */
exports.getCommentsByMovieId = async (req, res) => {
	try {
		const { id } = req.params

		const comments = await getCommentsByMovieId(id)

		if (!comments?.length) {
			return errorResponse(req, res, 404, 'no comments found')
		}

		successResponse(res, 200, 'comments fetched successfully', comments)
	} catch (error) {
		errorResponse(req, res, 500)
	}
}
