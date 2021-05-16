const express = require("express");
const router = new express.Router();
const CollectionModel = require("../models/model.collection");
const CardModel = require("../models/model.card");

//CRUD

//GET ALL
router.get("/", (req, res, next) => {
  CollectionModel.find()
    .populate("card")
    .then((result) => res.render("collection", { collection: result }))
    .catch(next);
});

// GET CREATE
router.get("/add-collection", (req, res, next) => {
  CollectionModel.find()
    .then((result) =>
      res.render("collection/add-collection", { newCollection: result })
    )
    .catch(next);
});

//GET Update
router.get("/update-collection/:id", (req, res, next) => {
  CollectionModel.findById(req.params.id)
    .populate("card")
    .then((result) =>
      res.render("collection/update-collection", { updateCollection: result })
    )
    .catch(next);
});

//GET One Collection
router.get("/collection/:id", (req, res, next) => {
  CollectionModel.findById(req.params.id)
    .then((result) =>
      res.render("collection/Onecollection", { OneCollectionDetail: result })
    )
    .catch(next);
});

//GET Delete
router.get("/delete/:id", (req, res, next) => {
  CollectionModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/collection"))
    .catch(next);
});
//POST CREATE
router.post("/create", (req, res, next) => {
  CollectionModel.create(req.body)
    .then(() => res.redirect("/collection"))
    .catch(next);
});
//POST Update
router.post("/update/:id", (req, res, next) => {
  CollectionModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/collection"))
    .catch(next);
});

module.exports = router;
