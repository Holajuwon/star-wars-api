/**
 * @description - filter character list and return characters matching filter criteria
 * @param {object} query query object
 * @param {array} characters list of characters to filter
 * @returns {array} filtered characters
 */
exports.filterByGender = (query, characters) => {
	query.gender === 'other'
		? (characters = characters.filter((item) => item.gender !== 'male' && item.gender !== 'female'))
		: (characters = characters.filter((item) => item.gender == query.gender))
	return characters
}
