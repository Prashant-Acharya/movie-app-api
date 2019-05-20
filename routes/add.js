const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
	res.send('Added a new movie.')
})

module.exports = router