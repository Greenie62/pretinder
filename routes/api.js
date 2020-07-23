const router = require('express').Router();
const User = require('../models/User.js');




router.get("/members",(req,res)=>{
    User.find()
    .then(users=>res.json(users))
})





module.exports = router;