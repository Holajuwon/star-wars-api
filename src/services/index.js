const axios = require('axios')
const { errorResponse } = require('../utils/errorResponse')
const { toFeetandInches } = require('../utils/toInchesFeet')
const { getCommentCountByMovieId } = require('./comment')
const { getCharacter } = require('../utils/getCharacter')
const { sorter } = require('../utils/sorter')
const { filterByGender } = require('../utils/filterByGender')

/**
 * @description - Get movie list from swapi.dev
 * @returns {Promise<object>} returns the movie list
 */
exports.getMovies = async (req, res) => {
	try {
		let { data } = await axios('https://swapi.dev/api/films/')
		let result = []
		for (let item of data.results) {
			let comment_count = await getCommentCountByMovieId(item.episode_id)
			result.push({
				episode_id: item.episode_id,
				title: item.title,
				opening_crawl: item.opening_crawl,
				release_date: item.release_date,
				comment_count,
			})
		}
		return result
	} catch (error) {
		errorResponse(req, res, error.response.status, error.message)
	}
}

/**
 * @description - Get movie list from swapi.dev
 * @returns {Promise<object>} returns the movie list
 */
exports.getCharacterList = async (req, res, id) => {
	try {
		const query = req.query

		let { data } = await axios(`https://swapi.dev/api/films/${id}`)
		let { characters, total_height } = await getCharacter(data.characters)

		if (query.gender) {
			characters = filterByGender(query, characters)
		}

		if (query.sort_by) {
			characters = sorter(query, characters)
		}

		return {
			characters,
			meta: {
				total_no_of_characters: characters.length,
				total_height: {
					cm: `${total_height}cm`,
					ft_inch: toFeetandInches(total_height),
				},
			},
		}
	} catch (error) {
		errorResponse(req, res, error.status, error.message)
	}
}
