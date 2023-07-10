













































// import { useRouter } from "next/router";
// import { CardElement, useStripe, useElements, CardCvcElement, CardNumberElement, CardExpiryElement } from '@stripe/react-stripe-js';

// import styles from './PaymentForm.module.css';
// import { useState } from "react";

// const cardElementStyles = {
//     base: {
//       fontSize: '16px',
//       fontFamily: 'Arial, sans-serif',
//       marginTop: '10px'
//     },
//   };

// const PaymentForm  = () => {
//    const stripe = useStripe();
//    const elements = useElements();
  
//    const [fullname, setFullname] = useState('')
//    const [tel, setTel] = useState('')
//    const [email, setEmail] = useState('')
// console.log(course.course.course, '56565656')

//     const router = useRouter();
//   const courseId = router.query.id;
// console.log(courseId)
// console.log(fullname, tel, email)
//   const handleChange = (e) => {
//     const {name, value} = e.target
//     switch (name) {
//       case 'fullname':
//         setFullname(value)
//         break;
//         case 'tel':
//           setTel(value)
//         break;
//         case 'email':
//           setEmail(value)
//         break;
          
//       default:
//         break;
//     }
//   }
//   const hangleSubmit = async (e) => {
// e.preventDefault()
// if (!stripe || !elements) {
//   return;
// }
// const { paymentMethod, error } = await stripe.createPaymentMethod({
//   type: 'card',
//   card: {
//     cardCvc: elements.getElement(CardCvcElement),
//     cardNumber: elements.getElement(CardNumberElement),
//     cardExpiration: `${elements.getElement(CardExpiryElement).value.split('/')[0]}/${elements.getElement(CardExpiryElement).value.split('/')[1]}`,
    
//   },
//   billing_details: {
//     fullname,
//     phone,
//     email,
//     courses: course.course.course,
//     status: 'succeeded',
//   },
// });
//   }
//   if (error) {
//     console.error('Ошибка создания платежа:', error);
//     return;
//   }
//   const paymentData = {
//     fullname,
//     tel,
//     email,
//     paymentMethodId: paymentMethod.id,
//   };
//   return (
//     <>
//     {/* <Elements stripe={stripePromise}> */}
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={hangleSubmit}>
//         <div className={styles.field}>
//           <label className={styles.label}>
//             Имя и фамилия:
//             <input className={styles.input} type="text" name="fullname" value={fullname} onChange={handleChange} />
//           </label>
//         </div>
//         <div className={styles.field}>
//           <label className={styles.label}>
//             Номер телефона:
//             <input className={styles.input} type="tel" name="tel" value={tel} onChange={handleChange} />
//           </label>
//         </div>
//         <div className={styles.field}>
//           <label className={styles.label}>
//             Email:
//             <input className={styles.input} type="email" name="email" value={email} onChange={handleChange} />
//           </label>
//         </div>
//         <div className={styles.field}>
//           <label className={styles.label}>
//             Карта:
//             <div className={styles.cardElementContainer}>
//               <div className={styles.cardNumberElement}>
//                 <CardNumberElement options={cardElementStyles} className={styles.input} />
//               </div>
//               <div className={styles.cardCvcElement}>
//                 <CardCvcElement options={cardElementStyles} className={styles.input} />
//               </div>
//             </div>
//           </label>
//         </div>
//         <div className={styles.field}>
//   <label className={styles.label}>
//     Срок годности карты:
//     <div className={styles.cardExpirationElement}>
//       <CardExpiryElement options={cardElementStyles} className={styles.input} />
//     </div>
//   </label>
// </div>
//         <div className={styles.field}>
//           <button className={styles.button} type="submit">
//             Оформить заказ
//           </button>
//         </div>
//       </form>
// </div>
//     {/* </Elements> */}
    
    
//     </>
//   )
// }

// export default PaymentForm 