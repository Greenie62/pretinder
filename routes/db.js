const router = require('express').Router();
const User = require('../models/User')




router.post("/adduser",async(req,res)=>{
    console.log(req.body);

    let user = await User.find({username:req.body.username})

    if(!user.length){
        console.log("its a new user!")
        user={
            ...req.body,
            age:formatAge(req.body.dob)
        }
        let dbuser= await User.create(user)
        console.log(dbuser)
        res.json({msg:"That user already exists",isMember:false})

    }
    else{
        console.log("that user already exists!")
        res.json({msg:"That user already exist. Please use the log-in!",isMember:true})
    }
})



function formatAge(dob){
    let year = dob.split(" ")[2];
    let age = 2020 - parseInt(year);

    return age;
}


module.exports = router;