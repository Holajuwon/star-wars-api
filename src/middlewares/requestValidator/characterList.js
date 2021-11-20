const { query } = require('express-validator')

module.exports = [
	query('gender')
		.optional()
		.trim(' ')
		.customSanitizer((value) => value.toLowerCase())
		.isIn(['male', 'female', 'other'])
		.withMessage('gender can be male, female or other')
		.notEmpty()
		.withMessage('gender field was sent empty')
		.escape(),
	query('sort_by')
		.optional()
		.trim(' ')
		.customSanitizer((value) => value.toLowerCase())
		.isIn(['name', 'gender', 'height'])
		.withMessage('you can only sort by name, gender and height')
		.notEmpty()
		.withMessage('sort_by field was sent empty')
		.escape(),
	query('order_by')
		.optional()
		.trim(' ')
		.customSanitizer((value) => value.toLowerCase())
		.isIn(['asc', 'desc'])
		.withMessage('order_by only accepts values asc or desc')
		.notEmpty()
		.withMessage('order_by field was sent empty')
		.escape(),
]
