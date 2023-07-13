import Stripe from "stripe"

import Cors from 'micro-cors';
import connectDB from "@/lib/db";
import User from "@/models/User";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

async function handler(req, res) {
    
  const sessionCurrent = await getServerSession(req, res)

    const {priceId} = req.body

    
    
    const stripe = new Stripe(process.env.SECRET_KEY_STRIPE)
    
    const session = await stripe.checkout.sessions.create({
         line_items: [
            {
                price: priceId,
                quantity: 1
            }
         ],
         mode: 'subscription',
         success_url: 'http://localhost:3000',
         cancel_url: 'http://localhost:3000'
    })
    await connectDB()
    
    const user = await User.findOne({email: sessionCurrent.user.email})
    
    user.subscription.push(session)
    user.courseId.push(priceId)
    await user.save()
    return res.status(200).json(session.url);
  }
export default cors(handler)