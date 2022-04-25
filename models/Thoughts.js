const { Schema, model } = require("mongoose");

//create schema with Thoughts data

const ThoughtsSchema = new Schema(
  {
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
    reactions: [
      {
        type: Schema.Types.ObjectId,
        reference: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//get total count of reactions on retrieval
ThoughtsSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Thoughts = model("Thoughts", ThoughtsSchema);

module.exports = Thoughts;
