const express = require("express");
const cors = require('cors')
const helmet = require('helmet')


const app = express();
app.use(cors());
app.use(helmet())

const mainRouter = require("./router.config");
const Joi = require("joi");


app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(mainRouter)

 

app.use((req,res,next)=>{
    next({
        code:422,
        message:"Resource Not found"
    })
})


//error handling middleware
app.use((error,req,res,next)=>{
    let statusCode= error.code || 500;
    let data = error.data || null;
    let msg = error.message || "Internal Server error"

    if(error instanceof Joi.ValidationError){
        statusCode = 422,
        msg = "validation Error",
        data ={}
    }
    console.log(error)

    const errorDetails = error.details
    // console.log(errorDetails)
    
    if(Array.isArray(errorDetails)){
        errorDetails.map((errorObj)=>{
            data[errorObj.context.label] = errorObj.message
        })
    }
    res.status(statusCode).json({
        result:data,
        message: msg ,
        meta : null
    })
})

module.exports= app