import Stripe from 'stripe';

const stripe = new Stripe(process.env.SECRET_KEY_STRIPE)

// export default async function handler(req, res) {
//   const {id} = req.body
// //   console.log(allCourse, 'allCourseallCourseallCourseallCourseallCourse')
  
//     try {
      
//       const subscription = await stripe.subscriptions.retrieve('price_1NSEADLMsaZh1YZuNgARKhfn');

      
//       res.status(200).json({ isSubscribed: subscription.status === 'active' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to check subscription status' });
//     }
  
// }