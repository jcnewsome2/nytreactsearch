
// Controller for our headlines
// ============================
var db = require('../models');

module.exports = {
    // Find all headlines, sort them by date, send them back to the user
    find: function (req, res) {
        console.log("Gathering saved articles from the db");
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(function (dbHeadline) {
                res.json(dbHeadline);
            }).catch(function (err) {
                res.json(err);
            })
    },
    // Delete the specified headline
    delete: function (req, res) {
        console.log("Deleting Article(s)");
        db.Article
            .remove({ _id: req.params.id })
            .then(function (dbHeadline) {
                res.json(dbHeadline);
            });
    },
    // Update the specified headline
    insert: function (req, res) {
        console.log("Adding saved articles to the db");
        console.log("req.body: ", req.body);
        db.Article
            .create(
                req.body
            ).then(function (dbHeadline) {
            console.log(dbHeadline);
            res.json(dbHeadline);
            }).catch(function(err) {
                res.json(err);
            });
        },
    }
