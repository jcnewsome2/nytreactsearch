
var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request'); // for web-scraping
var cheerio = require('cheerio'); // for web-scraping
var fetch = require('../../controllers/fetch.js');

var { Article, Notes } = require('../../models');

var scrape = require('../../src/scripts/scrape.js');

router.use(express.static('public'));

router.get('/save', function(req,res){

    Article.find({}), function(err, doc){
        if(err){
            console.log(err);
        }
        else {
            var articleObj = {
                articles: doc
            };

            res.render('saved', articleObj);
        }
    }
    
});

router.get('/scrape', function(req,res){
        return scrape;
});

router.post('/save', function(req, res){

    var saveArticles = {};

    saveArticles.title = req.body.title;
    saveArticles.link = req.body.link;
    saveArticles.summary = req.body.summary;
    saveArticles.notes = req.body.notes;

    var entry = new Article(saveArticles);
    entry.save(function(err, doc){
        if(err){
            console.log(err);
        }
        else {
            console.log(doc);
        }
    });
    res.redirect('/saved');
});

router.get("/delete/:id", function(req, res) {
    
      Article.findOneAndRemove({"_id": req.params.id}, function (err, offer) {
        if (err) {
          console.log("Not able to delete:" + err);
        } else {
          console.log("Able to delete, Yay");
        }
        res.redirect("/saved");
      });
    });
    
router.get("/notes/:id", function(req, res) {
    
      console.log(req.params.id);
    
      Notes.findOneAndRemove({"_id": req.params.id}, function (err, doc) {
        if (err) {
          console.log("Not able to delete:" + err);
        } else {
          console.log("Able to delete, Yay");
        }
        res.send(doc);
      });
    });
    

router.get("/articles/:id", function(req, res) {
    
      console.log(req.params.id);
    
      Article.findOne({"_id": req.params.id})
    
      .populate('notes')
    
      .exec(function(err, doc) {
        if (err) {
          console.log("Not able to find article and get notes.");
        }
        else {
          console.log("We are getting article and maybe notes? " + doc);
          res.json(doc);
        }
    });
});
    
    // Create a new note or replace an existing note
router.post("/articles/:id", function(req, res) {
    
      // Create a new note and pass the req.body to the entry
      var newNote = new Note(req.body);
      // And save the new note the db
      newNote.save(function(error, doc) {
        // Log any errors
        if (error) {
          console.log(error);
        } 
        else {
          // Use the article id to find it and then push note
          Article.findOneAndUpdate({ "_id": req.params.id }, {$push: {notes: doc._id}}, {new: true, upsert: true})
    
          .populate('notes')
    
          .exec(function (err, doc) {
            if (err) {
              console.log("Cannot find article.");
            } else {
              console.log("On note save we are getting notes? " + doc.notes);
              res.send(doc);
            }
          });
        }
    });
});

module.exports = router;