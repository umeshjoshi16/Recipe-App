import mongoose from "mongoose";

export const connectDB=async()=>{
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/recipeApp')
    console.log('Mongo DB connected successfully!!!');

  }
  catch(error){
    console.error(error.message);

  }
}