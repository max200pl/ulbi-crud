import Router from "express";
import PostController from "./PostController.js";

// @ts-ignore
const router = new Router();

router.post('/posts', PostController.create) // маршрут endpoint , создание поста при вызове функции create 
router.get('/posts', PostController.getAll) // получение всех постов 
router.get('/posts/:id', PostController.getOne) // получение поста по id
router.put('/posts', PostController.update) // обновление поста созданного 
router.delete('/posts/:id', PostController.delete) // удаление поста по id

export default router;