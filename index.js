import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = 'mongodb+srv://max200pl:29121994mO111@cluster0.bmnyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json()) //парсер json 
app.use(express.static('static')) // возврат статических фалов из папки static
app.use(fileUpload({})) // регистрируем middle-ware для работы с файлами 

app.use('/api', router) // регистрируем роутер  ==> /api/posts

async function startApp()
{
     try {
          await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }) // подключение к базе данных 
          app.listen(PORT, () => console.log('server start' + PORT))// подключаемся к  порту 5000 и слушаем события 
     } catch (e) {
          console.log(e);
     }
}

startApp()
