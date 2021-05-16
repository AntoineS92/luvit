const express = require("express");
const router = new express.Router();
//models en veux-tu en voilà
//const unModel = require("/unmodel");

//CRUD

//GET ALL
router.get("/collection", (req, res, next) => {
  unModel.find().populate("quelquechose")
    .then(() => res.render("collection"))
    .catch(next);
});

// GET CREATE
router.get("/add-collection", (req, res, next) => {
  unOuDesModel.find()
    .then((result) => res.render("collection/add-collection", { newCollection: result }))
    .catch(next);
});

//GET Update
router.get("/update-collection/:id", (req, res, next) => {
  unOuDesModel.findById(req.params.id).populate("quelquechose")
    .then((result) =>
      res.render("collection/update-collection", { unOuDesModel: result })
    )
    .catch(next);
});

//GET One Card
router.get("/collection/:id", (req, res, next) => {
  unModel.findById(req.params.id)
    .then((card) => res.render("collection/Onecard", { OneCardDetail: card }))
    .catch(next);
});

//GET Delete
router.get("/delete/:id", (req, res, next) => {
  unModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/dashboard/collection"))
    .catch(next);
});
//POST CREATE
router.post("/create", (req, res, next) => {
  unModel.create(req.body)
    .then(() => res.redirect("/dashboard/collection"))
    .catch(next);
});
//POST Update
router.post("/update/:id", (req, res, next) => {
  unModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/dashboard/collection"))
    .catch(next);
});


module.exports = router;
