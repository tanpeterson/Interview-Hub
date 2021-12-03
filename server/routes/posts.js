const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

//fetching posts for home view
router.get('/', postController.getHomePosts, (req, res) => {
    // console.log(req.oidc);
    res.status(200).json([...res.locals.posts]);
} )

//fetching posts for profile view 
router.post('/profile', postController.getProfilePosts, (req, res) => {
    res.status(200).json([...res.locals.posts]);
} )

//add a post 
router.post('/', postController.postPost, (req, res) => {
    res.sendStatus(200);
} )

//delete a post
router.delete('/', postController.deletePost, (req, res) => {
    res.sendStatus(200);
});




module.exports = router;