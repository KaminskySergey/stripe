import {Schema, model, models} from "mongoose";

const paymentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    cardNumber: {
      type: String,
      required: true
    },
    cardExpiration: {
      type: String,
      required: true
    },
    cardCvc: {
      type: String,
      required: true
    },
    paymentMethodId: { type: String, required: true },
  status: { type: String, enum: ['succeeded', 'failed', 'canceled'], default: 'succeeded' },
      
},
{
    versionKey: false,
    timestamps: true
})




const Payment = models.payment || model('payment', paymentSchema);
export default Payment