/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    env: {
        MONGO_URL: process.env.MONGO_URL,
        STRITE_KEY: process.env.SECRET_KEY_STRIPE,
        SECRET_KEY_STRIPE_FORM: process.env.SECRET_KEY_STRIPE_FORM,
        SECRET_KEY_STRIPE: process.env.SECRET_KEY_STRIPE,
    },
    
}

module.exports = nextConfig
