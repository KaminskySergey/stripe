// import '../styles/globals.css';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { SessionProvider } from "next-auth/react"
export default function App({Component,pageProps: { session, ...pageProps }}) {
  const stripePromise = loadStripe(process.env.SECRET_KEY_STRIPE_FORM)
  return (
    <SessionProvider session={session}>
      <Elements stripe={stripePromise}>

      <Component {...pageProps} />
      </Elements>
    </SessionProvider>
  )
}