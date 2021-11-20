/**
 * @description Returns an error response
 * @param {Request} req http request object
 * @param {Response} res http response object
 * @param {Number} [status=500] http error status
 * @param {String} message custom error message
 * @returns {Response} http response with error status and message
 */

exports.errorResponse = (req, res, status = 500, message) => {
	let errMessage
	if (message == null) {
		switch (status) {
			case 400:
				errMessage = 'Internal server error'
				break
			case 422:
				errMessage = 'Invalid user input'
				break
			default:
				errMessage = 'Internal server error'
				break
		}
	} else {
		errMessage = message
	}
	return res.status(status).send({ status: 'fail', message: errMessage })
}
