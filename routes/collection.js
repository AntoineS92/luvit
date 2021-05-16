const express = require("express");
const router = new express.Router();
//models en veux-tu en voilà
const unModel = require("/unmodel");

//CRUD

//GET ALL 
router.get("/collection", (req, res, next) => {
  unModel.find().populate("quelquechose")
    .then(() => res.render("collection"))
    .catch(next);
});
// GET CREATE
router.get('/add-collection' , (req,res,next) =>{
    unOuDesModel.find()
    .then((result)=> res.render("collection", {newCollection : result}))
})

//GET Update

//GET Delete
router.get("/delete/:id", (req, res, next) => {
  unModel
    .findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/dashboard/collection"))
    .catch(next);
});
//POST CREATE

//POST Update

//

module.exports = router;
