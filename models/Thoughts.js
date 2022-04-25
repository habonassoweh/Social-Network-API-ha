const { Schema, model } = require("mongoose");
const Thoughts = model("Thoughts", ThoughtsSchema);

//create schema with Thoughts data

const ThoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    //required
    //Must be between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //use a getter method to format the timestamp on query
  },
  //The user that created this thought
  username: {
    type: String,
    //required
  },
  //These are like replies
  reactions: {
    //array of nested docs created with the reactionSchema
  },
});

module.exports = Thoughts;
