const express = require('express');
const router = express.Router();

const users = require('../data/users');
const posts = require('../data/posts');


router.get('/:id/posts', (req, res) => {
  const userId = parseInt(req.params.id);
  const userExists = users.some(user => user.id === userId);
  if (!userExists) return res.status(404).send('User not found');

  const userPosts = posts.filter(post => post.userId === userId);
  res.json(userPosts);
});

module.exports = router;