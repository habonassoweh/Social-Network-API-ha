//add Schema constructor and model function
const { Schema, model } = require("mongoose");
const Reaction = model("Reaction", ReactionSchema);

const ReactionSchema = new Schema({
  reatcionId: {
    //Use Mongoose's Objectld data type
    //Default value is set to a new Objectld
  },
  reactionBody: {
    type: String,
    //required
    //default value is set to a new Objectld
  },
  username: {
    type: String,
    //required
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //use a getter method to format the timestamp on query
  },
});

module.exports = Reaction;
