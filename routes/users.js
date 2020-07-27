'use strict';
var express = require('express');
const Users = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
});

router.post('/', function(req, res, next) {
  Users.create({
    username: req.body.username,
    password: req.body.password
  }).then(() => {
    res.send(`
      <h2>created user ${req.body.username}.</h2>
    `)
  }).catch((error) => {
    res.send(`
      <h2>${error}</h2>
    `)
  });
});

router.get('/list', function(req, res, next) {
  /** ここは動きません。
  const userlist = await Users.findAll();
  console.log(userlist.every(username => username instanceof Users));
  console.log("All users:", JSON.stringify(userlist, null, 2));
  */
  /** ここも動きません
  const list = Users.findkAll({
    where: {username: 'matsuoka'}
  })
  .then(() => {
    res.send(`result = ${JSON.stringify(list)}`)
  })
  .catch(() => {
    (res.send('error'))
  });
  */
});


module.exports = router;