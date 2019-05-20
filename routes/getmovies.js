const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/', async (req, res) => {
	try{
		const movies = await Movie.find()
		res.json(movies)
	} catch(err){
		res.json({message: err})
	}
})

module.exports = router