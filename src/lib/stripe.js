
const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);
// console.log(stripe)

export default stripe;