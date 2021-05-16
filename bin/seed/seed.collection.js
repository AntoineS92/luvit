require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const CollectionModel = require("./../../models/model.collection"); // fetch the model

const collections = [
  {
    name: "My favorite monuments",
    image:
      "https://www.merveilles-du-monde.com/images/Monuments/Tour-Eiffel.jpg",
    description:
      "Find a list here of my favorite monuments",
    cards: ["60a14710bd4a2049f46613eb", "60a14710bd4a2049f46613ea", "60a14710bd4a2049f46613ec"],
  },
];

(async function insertCards() {
  try {
    await CollectionModel.deleteMany(); // empty the styles db collection
    const inserted = await CollectionModel.insertMany(collections); // insert docs in db
    console.log(
      `seed collection done : ${inserted.length} documents inserted in database !`
    );
  } catch (err) {
    console.error(err);
  }
})();

CollectionModel.insertMany(collections);