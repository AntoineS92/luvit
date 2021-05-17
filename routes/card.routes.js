const express = require("express");
const router = new express.Router();
const CardModel = require("../models/model.card");

//GET all cards in one collection
router.get("/", (req, res, next) => {
  CardModel.find()
    .then((result) => res.render("card/card", { card: result }))
    .catch(next);
});
//GET One card
router.get("/card/:id", (req, res, next) => {
  collectionModel
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
    .then((result) => res.render("card/update-card", { udpdateCard: result }))
    .catch(next);
});
// GET delete
router.get("/delete/:id", (req, res, next) => {
  CardModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/card"))
    .catch(next);
});
//POST Create
router.post("/create", (req, res, next) => {
  CardModel.create(req.body)
    .then(() => res.redirect("/card"))
    .catch(next);
});
//POST Update
router.post("/update/:id", (req, res, next) => {
  CardModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/card"))
    .catch(next);
});
module.exports = router;
