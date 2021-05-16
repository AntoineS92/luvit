const express = require("express");
const router = new express.Router();
//models en veux-tu en voilà
const collectionModel= require("../models/model.collection");

//CRUD

//GET ALL
router.get("/", (req, res, next) => {
  collectionModel.find()
  //.populate("quelquechose")
    .then((result) => res.render("collection", {collection : result}))
    .catch(next);
});

// GET CREATE
router.get("/add-collection", (req, res, next) => {
  collectionModel.find()
    .then((result) => res.render("collection/add-collection", { newCollection: result }))
    .catch(next);
});

//GET Update
router.get("/update-collection/:id", (req, res, next) => {
  collectionModel.findById(req.params.id)
  //.populate("quelquechose")
    .then((result) =>
      res.render("collection/update-collection", { unOuDesModel: result })
    )
    .catch(next);
});

//GET One Card
router.get("/collection/:id", (req, res, next) => {
  collectionModel.findById(req.params.id)
    .then((card) => res.render("collection/Onecard", { OneCardDetail: card }))
    .catch(next);
});

//GET Delete
router.get("/delete/:id", (req, res, next) => {
  collectionModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/collection"))
    .catch(next);
});
//POST CREATE
router.post("/create", (req, res, next) => {
  collectionModel.create(req.body)
    .then(() => res.redirect("/collection"))
    .catch(next);
});
//POST Update
router.post("/update/:id", (req, res, next) => {
  collectionModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/collection"))
    .catch(next);
});


module.exports = router;
