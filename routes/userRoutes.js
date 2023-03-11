const express = require('express')
const router = express.Router()
const {
  HireDevloper
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/hire', HireDevloper)


module.exports = router
