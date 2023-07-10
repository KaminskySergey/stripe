import { NextResponse } from "next/server";
import Stripe from "stripe";
export default async function handler(req, res) {
    console.log(process.env.SECRET_KEY_STRIPE)
    const stripe = new Stripe(process.env.SECRET_KEY_STRIPE)
    
    const prices = await stripe.prices.list({
        limit: 3
    })
    
    res.status(200).json(prices);
  }




























// import connectDB from '@/lib/db';
// import authMiddleware from '../../../middleware/authMiddleware'

// async function handler(req, res) {
//     await connectDB();
//     try {
//         const session = await getSession({ req });
//     console.log(session, 'sessionsessionsession')
//         // if (!session) {
//         //   return res.status(401).json({ error: 'Unauthorized' });
//         // }
    
//         const { name, phone, email, cardNumber, cardExpiration, cardCvc, status, courses} = req.body;
//         console.log(name, phone, email, cardNumber, cardExpiration, cardCvc, status, courses)
//         const userId = session.user.id; 
//     console.log(userId, 'userIduserIduserIduserIduserId')
//         const newPayment = new Payment({
//           userId,
//           name,
//           phone,
//           email,
//           cardNumber,
//           cardExpiration,
//           cardCvc,
//           courses,
//           status: 'succeeded' || status 
//         });
    
//         await newPayment.save();
    
//         res.status(201).json({ message: 'Payment created', payment: newPayment });
//       } catch (error) {
//         res.status(500).json({ message: 'Error creating payment', error: error.message });
//       }
    
// }

// export default authMiddleware(handler)