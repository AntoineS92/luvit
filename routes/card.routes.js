const express = require("express");
const router = new express.Router();
const CardModel = require("../models/model.card");
const uploader = require("./../config/cloudinary");

//GET all cards in one collection
router.get("/", (req, res, next) => {
  CardModel.find()
    .then((result) => res.render("card/card", { card: result }))
    .catch(next);
});
//GET One card
router.get("/card/:id", (req, res, next) => {
  CardModel
    .findById(req.params.id)
    .then((card) => res.render("card/Onecard", { OneCardDetail: card }))
    .catch(next);
});
//GET create
router.get("/add-card", (req, res, next) => {
  CardModel.find()
    .then((result) => res.render("card/add-card", { newCard: result }))
    .catch(next);
});
//GET update
router.get("/update-card/:id", (req, res, next) => {
  CardModel.findById(req.params.id)
    .then((result) => res.render("card/update-card", { card: result }))
    .catch(next);
});
// GET delete
router.get("/delete/:id", (req, res, next) => {
  CardModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/collection/card"))
    .catch(next);
});
//POST Create
router.post("/add-card", uploader.single("image"), (req, res, next) => {
  const newCard = { ...req.body };
  if (!req.file) newCard.image = undefined;
  else newCard.image = req.file.path;

  CardModel.create(newCard)
    .then(() => res.redirect("/collection/card"))
    .catch(next);
});

//POST Update
router.post("/update/:id", uploader.single("image"), (req, res, next) => {
  const editedCard = { ...req.body };
  if (!req.file) editedCard.image = undefined;
  else editedCard.image = req.file.path;

  CardModel.findByIdAndUpdate(req.params.id, editedCard)
    .then(() => res.redirect("/collection/card"))
    .catch(next);
});
module.exports = router;
