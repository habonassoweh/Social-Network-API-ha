const { Users } = require("../models");

const usersController = {
  //the functions will go in here as methods
  getAllUsers(req, res) {
    Users.find({})
      .then((dbUsersData) => res.json(dbUsersData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //get one users by id
  getUsersById({ params }, res) {
    Users.findOne({ _id: params.id })
      .then((dbUsersData) => {
        // If no user is found, send 404
        if (!dbUsersData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // method for handling POST/api/users to add to the db
  createUser({ body }, res) {
    Users.create(body)
      .then((dbUsersData) => res.json(dbUsersData))
      .catch((err) => res.status(400).json(err));
  },
  // method for updating user by id
  updateUser({ params, body }, res) {
    Users.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUsersData) => {
        if (!dbUsersData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // method for deleting user
  deleteUser({ params }, res) {
    Users.findOneAndDelete({ _id: params.id })
      .then((dbUsersData) => {
        if (!dbUsersData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = usersController;
