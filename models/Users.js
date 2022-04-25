const { Schema, model } = require("mongoose");

//create schema with Users data
const UsersSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  thought: {
    userThoughts: [UsersSchema.thought],
  },
  friends: {},
});

//get total count of reactions on retrueval
UsersSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});
//creat Users model using UsersSchema
const Users = model("Users", UsersSchema);

//export the Users model
module.exports = Users;
