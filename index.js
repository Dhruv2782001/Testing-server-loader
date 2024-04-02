const fs=require('fs');
const express=require('express');
const mongoose=require('mongoose')
const app=express();
const path=require('path');


const dotenv=require('dotenv')
const { default: Axios } = require('axios');

dotenv.config({path:'./config.env'});


app.get("/api/test",(req,res)=>{
    res.status(200).json({
        message:"success"
    })
})

let arr=["https://agnee-enterprise.onrender.com/api/test","https://server-loader.vercel.app/api/test"]

const getApi=async()=>{
        arr.forEach(async (link)=>{
            try{

                const res=await Axios.get(link);
                console.log(res.data)
            }catch(error){
                console.log(error)
            }
        })
}

setInterval(async()=>{
    await getApi();
},600000)
const port=process.env.PORT ||3000;

// test comments

const server=app.listen(port,()=>{
    console.log(`server is listing on port ${port}`);
})