const express = require('express')

const { db } = require('./src/db')
const { createCommentTable } = require('./src/db/queries')
const port = process.env.PORT || 5000
const router = require('./src/routes')
const { errorResponse } = require('./src/utils/errorResponse')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'welcome to the star wars api.',
		data: [],
	})
})

// routes/v1
app.use('/api/v1/movies', router)

//errorhadler
app.use((err, req, res, next) => {
	errorResponse(req, res, 500)
})

db.connect()
	.then((obj) => {
		app.listen(port, () => {
			db.any(createCommentTable)
			obj.done()
			console.log(`Server running on port ${port} 🔥`)
		})
	})
	.catch((err) => {
		console.log('Could not connect to database', err)
		process.exit()
	})

module.exports = app
