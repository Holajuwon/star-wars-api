const express = require('express')
const router = express.Router()

const {
	getMovies,
	getCharacterList,
	createComment,
	getCommentsByMovieId,
} = require('../controllers')
const characterList = require('../middlewares/requestValidator/characterList')
const { checkErrors } = require('../middlewares/requestValidator/checkErrors')
const validateComment = require('../middlewares/requestValidator/validateComment')
const validateMovieId = require('../middlewares/requestValidator/validateMovieId')

router
	.get('/', getMovies)
	.get('/:id/characters', [validateMovieId, characterList, checkErrors], getCharacterList)
	.post('/:id/comment', [validateMovieId, validateComment, checkErrors], createComment)
	.get('/:id/comment', [validateMovieId, checkErrors], getCommentsByMovieId)

module.exports = router
