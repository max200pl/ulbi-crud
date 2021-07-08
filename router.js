import Router from "express";
import PostController from "./PostController.js";
import Todo from './modules/todo.js';

// @ts-ignore
const router = new Router();

router.get('/', async (req, res) =>
{
     const toDos = await Todo.find({}).lean();

     res.render("index", { // рендер страницы index.html
          title: 'To-dos List', // title в момент рендеринга страницы 
          isIndex: true, // title в момент рендеринга страницы 
          toDos // передаем массив как параметр на страницу
     })
})
router.get('/create', (req, res) =>
{
     res.render('create', {
          title: 'Create todo',
          isCreate: true
     })
})

router.post('/create', async (req, res) =>
{
     const toDo = new Todo({
          title: req.body.title
     })

     await toDo.save() // создали модель
     res.redirect("/")

})

router.post('/complete', async (req, res) =>
{
     const toDo = await Todo.findById(req.body.id)

     toDo.completed = !!req.body.completed
     await toDo.save()

     res.redirect('/')
})


router.post('/posts', PostController.create) // маршрут endpoint , создание поста при вызове функции create 
router.get('/posts', PostController.getAll) // получение всех постов 
router.get('/posts/:id', PostController.getOne) // получение поста по id
router.put('/posts', PostController.update) // обновление поста созданного 
router.delete('/posts/:id', PostController.delete) // удаление поста по id

export default router;