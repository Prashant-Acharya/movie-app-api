const mongoose = require('mongoose')


const movieSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	release: {
		type: Date,
		required: true
	},
	casts: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	language: {
		type: String,
		required: true
	},
	cover: {
		type: String,
		required: true,
		default: 'https://s3.amazonaws.com/FringeBucket/image_placeholder.png'
	}
})

module.exports = mongoose.model('movies', movieSchema)