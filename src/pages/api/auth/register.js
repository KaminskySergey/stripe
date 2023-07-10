import connectDB from '../../../lib/db';
import User from '../../../models/User'
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import { Conflict } from 'http-errors';




export default async function handler(req, res){

  const { name, email, password, subscription } = await req.body;
console.log(name, email, password)
await connectDB();
console.log(name, email, password)

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    subscription,
    
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// const POST = async (req, res) => {
  
//   const { name, email, password } = await req.body;
// console.log(name, email, password)
// await connectDB();
// console.log(name, email, password)

//   const hashedPassword = await bcrypt.hash(password, 5);

//   const newUser = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User registered', user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };

// export default POST 