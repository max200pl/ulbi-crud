import * as uuid from 'uuid'; // формирование уникального имени для картинки 
import * as path from 'path'; // пути в node.js 

class FileService
{
     saveFile(file)
     {
          try {
               const fileName = uuid.v4() + '.jpg';// генерируем уникальное имя + .jpg
               const filePath = path.resolve('static', fileName); // получаем путь => текущая директория + имя папки, второй параметр название файла 
               file.mv(filePath); // у файла вызываем функцию .mv и передаем наш путь 
               return fileName
          } catch (e) {
               console.log(e)
          }

     }
}

export default new FileService();