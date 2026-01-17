import express from'express';
const app=express();
import cors from'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './Routers/userRoutes.js';
import {connectDB} from'./Config/db.js';

const PORT=process.env.PORT||8000;
app.use(cors());
app.use(cookieParser());
app.use(express.json());



connectDB();
app.get('/',(req,res)=>{
  res.send('Hello this is the server of recipe app')
})
app.use('/', userRoutes);

app.listen(PORT,()=>{
  console.log('server is running at port 8000')
}) 