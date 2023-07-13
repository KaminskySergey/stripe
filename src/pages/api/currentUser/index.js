import connectDB from "@/lib/db";

import User from "@/models/User";
import { getServerSession } from "next-auth";


export default async function handler(req, res) {
    
    try {
        const sessionCurrent = await getServerSession(req, res)
        console.log(sessionCurrent.user.email, 'aaa')
        
        await connectDB()
          const user = await User.findOne({email: sessionCurrent.user.email})
        return res.json({user})
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch subscriptions' });
      }
    
  }