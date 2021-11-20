const axios = require('axios')

/**
 * @description - Get character details from swapi.dev
 * @param {Array} urls array of character urls
 * @returns character details and total height
 */
exports.getCharacter = async (urls) => {
	try {
		let total_height = 0
		const promises = urls.map((url) => axios(url))
		const responses = await Promise.all(promises)
		const characters = responses.map(({ data }) => {
			total_height += Number(data.height)
			return {
				name: data.name,
				height: data.height,
				gender: data.gender,
			}
		})
		return { characters, total_height }
	} catch (error) {
		throw new Error(error.message)
	}
}
