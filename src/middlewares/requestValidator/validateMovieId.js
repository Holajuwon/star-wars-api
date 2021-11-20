const { param } = require('express-validator')

module.exports = [
	param('id')
		.isInt()
		.exists()
		.isInt({ min: 1, max: 6 })
		.withMessage('movie id must be between 1 and 6'),
]
