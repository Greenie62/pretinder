const router = require('express').Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()



router.post("/adduser",async(req,res)=>{
    console.log(req.body);

    let user = await User.find({username:req.body.username})

    if(!user.length){
        console.log("its a new user!")
        user={
            ...req.body,
            age:formatAge(req.body.dob)
        }
        console.log(user)
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
console.log(user)
    if(!user.length){
        console.log("its a new user!")
        res.json({response:false,message:"You must have been looking for\n love somewhere else,\n try signing up!"})
      

    }
    else{
        // console.log(user[0])
        if(req.body.password !== user[0].password){
        res.json({message:"Bad password!",response:false})
        }
        else if(user[0].username === "Admin"){
            let payload={
                username:user[0].username,
                interested_in:user[0].interestedIn,
                searchGender:user[0].searchGender,
                likes:user[0].likes,
                age:user[0].age,
            }

            console.log(payload)
            let token = await jwt.sign(payload,process.env.SESSION_SECRET)
            console.log(token)
            res.json({dbuser:user[0],response:true,token})

        }
        else{
            res.json({dbuser:user[0],response:true})

        }
    }
})



router.post("/savematch/:like_status",(req,res)=>{
    console.log(req.body)
    let matched_profile={...req.body};
    let client = req.body.clientname;
    delete matched_profile.clientname;

console.log('Params: ' + req.params.like_status)
    if(req.params.like_status === "superlike"){
        matched_profile.like_status="superlike"
    }
    else{
        matched_profile.like_status="like"
    }
    console.log(client, matched_profile)

    User.findOneAndUpdate({username:client},{$push:{matches:matched_profile}})
    .then(dbuser=>{
        console.log(dbuser);
        console.log("user updated!")
        res.json({msg:"the match was received!"})

    })
})


router.get('/addreaction/:client/:reaction',(req,res,next)=>{
    console.log("/addreaction/:client/:reaction got pinged!")
    
    if(req.params.reaction === "likes"){
    User.findOneAndUpdate({username:req.params.client},{$inc:{likes:1}})
    .then(dbclient=>{
        console.log("Client got the like counted!")
        res.json({msg:"All updated back here",status:200,emoji:'😎'})
    })
    }
    else{
        res.status(455)
        let error = new Error("WTF am i suppose to do with this?");
        next(error)
    }
})


router.get("/getuserinfo/:client",(req,res)=>{
    User.find({username:req.params.client})
    .then(client=>{
        res.json(client)
    })
})


router.get('/delete/:username',(req,res)=>{
    User.remove({username:req.params.username})
    .then(user=>{
        console.log("User was deleted!");
        res.json({msg:"user deleted!"})
    })
})


router.delete("/trashmatch/:clientname/:matchname",(req,res)=>{
    console.log('/trashmatch DELETE fired.')
    User.find({username:req.params.clientname})
    .then(client=>{
        console.log(client)
        console.log("matchname: " + req.params.matchname)
        let matches=client[0].matches;
        let filtered=matches.filter(m=>m.name !== req.params.matchname)
        console.log(filtered)
        User.findOneAndUpdate({username:req.params.clientname},{$set:{matches:filtered}})
        .then(user=>{
            console.log("user matches updated!")
            res.redirect('http://localhost:3000/dashboard')

        })
    })
})












function formatAge(dob){
    let year = dob.split(" ")[2];
    let age = 2020 - parseInt(year);

    return age;
}


module.exports = router;