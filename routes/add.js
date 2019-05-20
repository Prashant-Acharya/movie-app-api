const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.post('/', (req, res) => {
	const movie = new Movie({
		title: req.body.title,
		release: req.body.release,
		casts: req.body.casts,
		language: req.body.language,
		cover: req.body.cover,
		country: req.body.country
	})

	movie.save()
		.then(data => {
			res.json(data)
		})
		.catch(err => console.log(err))
})

module.exports = router