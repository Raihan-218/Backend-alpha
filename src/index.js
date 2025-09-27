// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './env'
})


app.on("error", (err) => {  
    console.log("ERROR :", err);
    throw err
})
connectDB()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at PORT : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed !!!", err);
    })





/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
const app = express()
//*************first approach*****************


function connectDB(){}
connectDB()

// use this instead IIFE
;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port:${process.env.PORT}`);            
        })
    } catch(error){
        console.error("ERROR :" , error);
    }
} )()
*/

