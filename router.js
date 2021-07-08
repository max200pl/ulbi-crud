import Router from "express";
import PostController from "./PostController.js";
import todo from './modules/todo.js';

// @ts-ignore
const router = new Router();

router.get('/', (req, res) =>
{
     res.render("index", {
          title: 'To-dos List',
          isIndex: true
     })
})
router.get('/create', (req, res) =>
{
     res.render('create', {
          title: 'Create todo',
          isCreate: true
     })
})


router.post('/posts', PostController.create) // маршрут endpoint , создание поста при вызове функции create 
router.get('/posts', PostController.getAll) // получение всех постов 
router.get('/posts/:id', PostController.getOne) // получение поста по id
router.put('/posts', PostController.update) // обновление поста созданного 
router.delete('/posts/:id', PostController.delete) // удаление поста по id

export default router;