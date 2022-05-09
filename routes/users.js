const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signUp', (req,res,next) =>{
  userreq = req.body;
  const user = new User({
    username : userreq.username,
    password : userreq.password,
    team : userreq.team,
    birthday : userreq.birthday,
    mail : userreq.mail,
    tel : userreq.tel
  });
  user.save((err,data) => {
    if(err)
        res.json({status : false})
    else
        res.json(data);
  })
});

router.post('/logIn', (req,res,next) => {
  userreq = req.body;
  User.findOne({username : userreq.username, password : userreq.password}, (err,data) => {
    if(data)
      res.send({status : true});
    else
      res.send({status:false})
  });

});
module.exports = router;
