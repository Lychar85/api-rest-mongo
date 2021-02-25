const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({

  title: {
    type:String
  },
  content: {
    type:String
  },
  cover: {
    type:String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, ref: "Category"
  },
  date: {
    type:Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Article", articleSchema)