import stripe from "@/lib/stripe";
import User from "@/models/User";

// export default async function handler(req, res) {
//     // const {email} = req.body
//     // console.log(email, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
//       try {
        
//         const subscriptions = await stripe.subscriptions.list({
//           customer: email, // Идентификатор пользователя в Stripe
//         });
  
        
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to fetch subscriptions' });
//       }
    
//   }