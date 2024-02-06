import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import path from 'path'

dotenv.config();
const app= express();
const port= process.env.PORT || 3020 ;
//const path=require('path');
app.use(express.json());

mongoose.connect(process.env.Mongo).then(()=>{
    console.log('Conneted to MongoDB');
})
.catch((err)=>{
    console.log(err);
});

app.listen(port,()=>{
    console.log('Server is running on port ',{port});
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use(express.static(path.join(__dirname,"/client/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
});

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})