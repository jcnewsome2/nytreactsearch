var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleData = new mongoose.Schema({
  title: {
      type: String,
      required:true,
      unique: true
  },

  link: {
      type: String,
      required: true
  },

  summary: {
      type: String,
      required: true
  },
  
  notes: [{
      type: Schema.Types.ObjectId,
      ref: 'Notes'
  }]

});

var Article = mongoose.model('Article', articleData);

module.exports = Article;