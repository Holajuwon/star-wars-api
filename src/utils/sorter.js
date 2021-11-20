/**
 * @description - sort characters based on sort criteria
 * @param {object} query query object
 * @param {array} characters list of characters
 * @returns {array}
 */
exports.sorter = (query, characters) => {
	if (query.sort_by == 'height') {
		characters.sort((a, b) => {
			if (query.order_by && query.order_by == 'asc') {
				return a[query.sort_by] - b[query.sort_by]
			} else {
				return b[query.sort_by] - a[query.sort_by]
			}
		})
	} else {
		characters.sort((a, b) => {
			let fa = a
			let fb = b
			if (query.sort_by && query.order_by == 'asc') {
				fa = a[query.sort_by].toLowerCase()
				fb = b[query.sort_by].toLowerCase()
			} else {
				fa = b[query.sort_by].toLowerCase()
				fb = a[query.sort_by].toLowerCase()
			}

			if (fa < fb) {
				return -1
			}

			if (fa > fb) {
				return 1
			}
			return 0
		})
	}
	return characters
}
