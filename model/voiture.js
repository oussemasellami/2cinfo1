var mongo = require("mongoose");
const Schema = mongo.Schema;
const Voiture = new Schema({
  matricule: String,
  couleur: String,
});

module.exports = mongo.model("voiture", Voiture);
