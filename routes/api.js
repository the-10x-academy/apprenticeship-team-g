const express = require('express')

const router = express.Router()
const postController = require('../controller/post.controller')

router.get('/post',postController.getPosts)
router.post('/like',postController.addLike)
router.post('/post',postController.createPost)
module.exports = router;