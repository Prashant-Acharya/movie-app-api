const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// Import Routes
const movieRoutes = require('./routes/getmovies')
app.use('/allmovies', movieRoutes)

// Add Routes
const addMovie = require('./routes/add')
app.use('/add', addMovie)


// Connect to a DB
mongoose.connect('mongodb+srv://prashant:default@cluster0-sk79g.mongodb.net/movie-db?retryWrites=true',
	{ useNewUrlParser: true },
	() => {
	console.log('Connected to a DB.')
})


app.listen(5000)


