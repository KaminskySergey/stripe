// // import mongoose from "mongoose";

// // import express from "express"

// const mongoose = require("mongoose");
// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");
// require("dotenv").config();
// const next = require('next');


// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();
  
//   server.use(logger("dev"));
//   server.use(express.json());
//   server.use(cors());
//   // // Обработка маршрута /auth/register
//   // server.get('/auth/register', (req, res) => {
//   //   // Ваш код обработки маршрута здесь
//   //   // Например, отправка HTML-страницы с формой регистрации
    
//   // });

//   // Передача остальных запросов Next.js для обработки
//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });
//   server.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// server.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message });
// });
//   server.listen(4000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:4000');
//   });
// });

// // не знаю зачем вообще был нужен експресс
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//       console.log("db connected");
    
//   } catch (error) {
//     console.log(error);
//   }
// };

// // app.use((req, res) => {
// //   res.status(404).json({ message: "Not found" });
// // });

// // app.use((err, req, res, next) => {
// //   res.status(500).json({ message: err.message });
// // });

// // app.listen(3000, () => {
// //   console.log(`Server is running on port 3000`);
// // });

