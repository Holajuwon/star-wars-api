const { validationResult } = require('express-validator')

/**
 * @desc check for input field validation errors
 * @param {Request} req http request object
 * @param {Response} res http response object
 * @returns {Response} an error response if present.
 */
exports.checkErrors = (req, res, next) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		return res.status(400).send({ status: 'fail', errors: errors.array() })
	}
	next()
}
