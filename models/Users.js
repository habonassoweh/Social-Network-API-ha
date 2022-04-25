const { Schema, model } = require("mongoose");
//creat Users model uding UsersSchema
const Users = model("Users", UsersSchema);

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

//export the Users model
module.exports = Users;
