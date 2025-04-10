const express = require('express');
const router = express.Router();

const posts = require('../data/posts');


router.get('/', (req, res) => {
  const { userId } = req.query;
  if (userId) {
    const filteredPosts = posts.filter(post => post.userId === parseInt(userId));
    return res.json(filteredPosts);
  }
  res.json(posts);
});

module.exports = router;