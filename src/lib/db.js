import mongoose from "mongoose";

console.log(process.env.MONGO_URL, '===========================')
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
      console.log("db connected");
    
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;