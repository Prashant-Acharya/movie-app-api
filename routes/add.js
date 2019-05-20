const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.post('/', async (req, res) => {
	const movie = new Movie({
		title: req.body.title,
		release: req.body.release,
		casts: req.body.casts,
		language: req.body.language,
		cover: req.body.cover,
		country: req.body.country
	})

	
	try{
		const savedMovie = await movie.save()
		res.json(savedMovie)
	} catch (err) {
		res.json({
			messages: err
		})
	}
})

module.exports = router