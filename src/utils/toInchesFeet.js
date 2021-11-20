/**
 * @description - Convert a decimal to inches
 * @param {Number} feet height in ft
 * @returns height in inches
 */
const toInches = (feet) => {
	return (feet * 12).toFixed(2)
}

/**
 * @description - Convert a height to feet and inches
 * @param {Number} cm height in cm
 * @returns height in feet and inches
 */
exports.toFeetandInches = (cm) => {
	let feet = Math.floor(cm / 30.48)
	let remainder = cm / 30.48 - feet
	let inch = toInches(remainder)
	return `${feet}ft ${inch}inches`
}
