import Stripe from "stripe"

import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});

async function handler(req, res) {
    
    

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
    return res.status(200).json(session.url);
  }
export default cors(handler)