const express = require("express");
const router = new express.Router();
const CollectionModel = require("../models/model.collection");
const CardModel = require("../models/model.card");
const uploader = require("./../config/cloudinary");

//CRUD

//GET ALL
router.get("/", (req, res, next) => {
  CollectionModel.find()
    .populate("card")
    .then((result) => res.render("collection/collection", { collection: result }))
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
      res.render("collection/update-collection", { collection: result })
    )
    .catch(next);
});

//GET One Collection
router.get("/collection/:id", (req, res, next) => {
  CollectionModel.findById(req.params.id)
    .then((result) =>
      res.render("collection/collection-details", { OneCollectionDetail: result })
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
router.post("/add-collection", uploader.single("image"), (req, res, next) => {
  const newAlbum = { ...req.body };
  if (!req.file) newAlbum.image = undefined;
  else newAlbum.image = req.file.path;

  CollectionModel.create(newAlbum)
    .then(() => res.redirect("/collection"))
    .catch(next);
});
//POST Update
router.post("/update/:id", uploader.single("image"), (req, res, next) => {
  const editedCollection = { ...req.body };
  if (!req.file) editedCollection.image = undefined;
  else editedCollection.image = req.file.path;

  CollectionModel.findByIdAndUpdate(req.params.id, editedCollection)
    .then(() => res.redirect("/collection"))
    .catch(next);
});

module.exports = router;
