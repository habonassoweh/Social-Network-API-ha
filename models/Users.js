const { Schema, model } = require("mongoose");
const { required } = require("nodemon/lib/config");

//create schema with Users data
const UsersSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    thought: {
      userThoughts: [UsersSchema.thought],
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        reference: "Users",
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
UsersSchema.virtual("friendCount").get(function () {
  return this.comments.length;
});

//creat Users model using UsersSchema
const Users = model("Users", UsersSchema);

//export the Users model
module.exports = Users;
