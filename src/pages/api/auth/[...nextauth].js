import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from 'bcrypt';


const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
              await connectDB();
      
              try {
                const result = await User.findOne({ email: credentials.email });
      
                if (!result) {
                  throw new Error('Такого пользователя не существует');
                }
      
                const isPasswordCorrect = await bcrypt.compare(
                  credentials.password,
                  result.password
                );
      
                if (!isPasswordCorrect || result.email !== credentials.email) {
                  throw new Error('Неверный пароль или почта');
                }
          
                const sessionData = {
                  ...result._doc,
                  id: result._id.toString()
                };
            
                return sessionData;
              } catch (error) {
                throw new Error('Ошибка аутентификации');
              }
            },
          }),
    ],
    pages: {
      error: '/auth/login'
    },
    
})

export default handler


// CredentialsProvider({
//   id: "credentials",
//   name: "Credentials",
//   async authorize(credentials) {
//     await connectDB();
//     console.log(credentials)
//     try {
//       const user = await User.findOne({
//         email: credentials.email,
//       });
//       console.log(user, 'userrrr')
//       if (user) {
//         const isPasswordCorrect = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );

//         if (isPasswordCorrect) {
//           return user;
//         } else {
//           throw new Error("Wrong Credentials!");
//         }
//       } else {
//         throw new Error("User not found!");
//       }
//     } catch (err) {
//       throw new Error(err);
//     }
//   },
// }),