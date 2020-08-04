const User = require("../models/User")
const jwt = require('jsonwebtoken');



function authenticateUser(req,res,next){

    console.log("generic middleware!");
    next()
}


module.exports = authenticateUser;