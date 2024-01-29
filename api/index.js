import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'


dotenv.config();
const app= express();

mongoose.connect(process.env.Mongo).then(()=>{
    console.log('Conneted to MongoDB');
})
.catch((err)=>{
    console.log(err);
});

app.listen(3020,()=>{
    console.log('Server is running on port 3020');
});

app.use('/api/user',userRouter);