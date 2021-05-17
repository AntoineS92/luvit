const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    cards: [{type: Schema.Types.ObjectId, ref: "card"}],
    user_id : {type: Schema.Types.ObjectId, ref: "user"}
  },
  {
    timestamps: true,
  }
);

const CollectionModel = mongoose.model("collection", CollectionSchema);
module.exports = CollectionModel;
