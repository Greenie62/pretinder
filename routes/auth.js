const router = require("express").Router();
const User = require('../models/User')



router.get('/admin',(req,res)=>{
    console.log("/admin fired!")
    User.find()
    .then(users=>{
    res.json({msg:"generic auth connection!",users})
    })
})


router.delete("/delete/:id",(req,res)=>{
    console.log(req.body);
    User.findOneAndDelete({_id:req.params.id})
    .then(user=>{
        console.log("user was removed.")
        res.json({msg:"user was removed!"})
    })
})



module.exports = router;