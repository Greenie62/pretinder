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
        res.json({msg:"New user created!",isMember:false,dbuser})

    }
    else{
        console.log("that user already exists!")
        res.json({msg:"That user already exist. Please use the log-in!",isMember:true})
    }
})


router.post("/login",async(req,res)=>{
    console.log(req.body);

    let user = await User.find({username:req.body.username})

    if(!user.length){
        console.log("its a new user!")
        res.json({response:false,message:"You must have been looking for\n love somewhere else,\n try signing up!"})
      

    }
    else{
        if(req.body.password !== user[0].password){
        res.json({message:"Bad password!",response:false})
        }
        else{
            res.json({dbuser:user[0],response:true})

        }
    }
})


router.get('/delete/:username',(req,res)=>{
    User.remove({username:req.params.username})
    .then(user=>{
        console.log("User was deleted!");
        res.json({msg:"user deleted!"})
    })
})












function formatAge(dob){
    let year = dob.split(" ")[2];
    let age = 2020 - parseInt(year);

    return age;
}


module.exports = router;