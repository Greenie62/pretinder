const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());






app.get("/test",(req,res)=>{
    console.log("/test pinged!")
    res.json({msg:"Connected on back-end!"})
})

app.use(urlError);
app.use(errorHandler);



function urlError(req,res,next){
    res.status(404)
    let error=new Error(`Error--${req.originalUrl}`)
    next(error)
}


function errorHandler(err,req,res,next){
    res.status(500);
    res.json({
        message:err.message,
        stack:err.stack,
        custom:`Ooops, looks like you goofed a little! 🤓`
    })
}



app.listen(PORT,console.log(`Logged onto port ${PORT}`))