module.exports = app => {
  const books = require("../controllers/books.controller.js");

  var router = require("express").Router();

  // Create a new Librery
  router.post("/", books.create);

  // Retrieve all Librery
  router.get("/", books.findAll);

  // Retrieve all published Librery
  router.get("/published", books.findAllPublished);

  // Retrieve a single Librery with id
  router.get("/:id", books.findOne);

  // Update a Librery with id
  router.put("/:id", books.update);

  // Delete a Librery with id
  router.delete("/:id", books.delete);

  // Delete all Librery
  router.delete("/", books.deleteAll);

  app.use('/api/books', router);
};