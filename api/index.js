import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const app= express();

mongoose.connect(process.env.Mongo).then(()=>{
    console.log('Conneted to MongoDB');
})
.catch((err)=>{
    console.log(err);
});

app.listen(3010,()=>{
    console.log('Server is running on port 3010');
});