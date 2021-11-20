const { body } = require('express-validator')

module.exports = [
	body('comment')
		.trim(' ')
		.toLowerCase()
		.notEmpty()
		.withMessage('please input your comment')
		.isLength({ max: 500 })
		.withMessage('comment must be a maximum of 500 characters')
		.escape(),
]
