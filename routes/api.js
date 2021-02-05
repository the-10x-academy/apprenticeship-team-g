const express = require('express')

const router = express.Router()
const postController = require('../controller/postController')

router.get('/post',postController.getPosts)
module.exports = router;