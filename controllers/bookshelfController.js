const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find({})
      .sort({ date: -1 })
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(502).json(err));
  },
 
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(502).json(err));
  },

  delete: function(req, res) {
    db.Book
      .findByIdAndDelete({ _id: req.params.id })
      .then(dbBook => res.json(dbBook))
 
      .catch(err => res.status(502).json(err));
  }
};
