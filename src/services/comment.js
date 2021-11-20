const { db } = require('../db')
const { createComment, getCommentsByMovieId, getCommentCountByMovieId } = require('../db/queries')

/**
 * @description - Get comment count by movie id
 * @param {number} id the id of the movie
 * @returns {Promise<object>} returns the comment count
 */
exports.getCommentCountByMovieId = async (id) => {
	try {
		const count = await db.one(getCommentCountByMovieId, [id])
		return count.count
	} catch (err) {
		throw new Error(error.message)
	}
}

/**
 * @description - Create a comment
 * @param {object} comment the comment object
 * @returns {Promise<object>} returns the created comment
 */
exports.createComment = async (payload) => {
	try {
		return db.one(createComment, payload)
	} catch (error) {
		throw new Error(error.message)
	}
}

/**
 * @description - Get comments by movie id
 * @param {number} id the id of the movie
 * @returns {Promise<object>} returns the comments
 */
exports.getCommentsByMovieId = async (id) => {
	try {
		return db.any(getCommentsByMovieId, [id])
	} catch (error) {
		throw new Error(error.message)
	}
}
