var mongo = require("mongoose");
const Schema = mongo.Schema;
const Student = new Schema({
  name: String,
  description: String,
  age: Number,
});

module.exports=mongo.model("student",Student)