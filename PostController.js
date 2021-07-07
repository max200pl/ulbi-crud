import PostService from "./PostService.js"

class PostController
{
     // endPoint создания 
     async create(req, res) // функция которая создает пост 
     {
          try {
               console.log(req.files);
               const post = await PostService.create(req.body, req.files.picture) // передаем поля для отправки на сервер, второй параметр это наша картинка 
               res.json(post) //ответ сервера   
          } catch (e) {
               res.status(500).json(e.message) // возврат статуса при ошибке 
          }
     }
     // endPoint получения  
     async getAll(req, res)
     {
          try {
               const posts = await PostService.getAll(); // find() возвращает все посты с базы данных
               return res.json(posts)
          } catch (e) {
               res.status(500).json(e) // возврат статуса при ошибке 
          }
     }
     // endPoint получение  поста по id 
     async getOne(req, res)
     {
          try {
               const post = await PostService.getOne(req.params.id); // находим id в посте 
               return res.json(post)
          } catch (e) {
               res.status(500).json(e) // возврат статуса при ошибке 
          }
     }
     // endPoint обновления поста  
     async update(req, res)
     {
          try {
               const updatePost = await PostService.update(req.body) // метод получения и изменения поста 

               return res.json(updatePost)

          } catch (e) {
               res.status(500).json(e.message) // возврат статуса при ошибке 
          }
     }
     // endPoint удаления  поста  
     async delete(req, res)
     {
          try {
               const post = await PostService.delete(req.params.id)
               return res.json(post)
          } catch (e) {
               res.status(500).json(e) // возврат статуса при ошибке 
          }
     }
}

export default new PostController();