import stripe from "@/lib/stripe";
import User from "@/models/User";
// import { getSession } from "next-auth/react";
import Stripe from "stripe";

export default async function handler(req, res) {
    
  // const session = await getSession({ req }); //  так можно лучить id из session
  // console.log(session, '1111111111111111111111111111111111111')
  // const user = await User.findOne({email: session.user.email})
  
  try {
    

const stripe = new Stripe(process.env.SECRET_KEY_STRIPE)
const data = await stripe.subscriptions.list({
  
  limit: 100,
});
        return res.json({data})
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch subscriptions' });
      }
    
  }