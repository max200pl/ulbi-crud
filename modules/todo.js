import mongoose from "mongoose";

const schema = new mongoose.Schema({
     title: {
          type: String,
          require: true
     },
     completed: {
          type: Boolean,
          default: false
     }
})

export default mongoose.model('Todo', schema)