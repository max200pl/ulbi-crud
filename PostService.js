import fileService from "./fileService.js";
import Post from "./Post.js";

class PostService
{
     // endPoint создания 
     async create(post, picture) // функция которая создает пост / принимает изображение 
     {
          //console.log("this", picture);
          const fileName = fileService.saveFile(picture) // вызываем функцию saveFile, передаем picture, получаем имя нашего файла 
          const createdPost = await Post.create({ ...post, picture: fileName }) // разворачиваем object post {author: Max, ....} и добавляем в конец picture: fileName
          return createdPost
     }
     // endPoint получения  
     async getAll()
     {
          const posts = await Post.find(); // find() возвращает все посты с базы данных
          return posts
     }
     // endPoint получение  поста по id 
     async getOne(id)
     {
          if (!id) {
               throw new Error('не указан ID')
          }
          const post = await Post.findById(id); // находим id в посте 
          return post
     }

     // endPoint обновления поста  
     async update(post)
     {
          if (!post._id) {
               throw new Error('не указан ID')
          }

          const updatePost = await Post.findByIdAndUpdate(post._id, post, { new: true }) // метод получения и изменения поста 

          return updatePost;
     }
     // endPoint удаления  поста  
     async delete(id)
     {
          if (!id) {
               throw new Error('не указан ID')
          }
          const post = await Post.findByIdAndDelete(id);
          return post
     }
}

export default new PostService()