const { Thoughts } = require("../models");

const thoughtsController = {
  //the functions will go in here as methods
  getAllThoughts(req, res) {
    Thoughts.find({})
      .then((dbThoughtsData) => res.json(dbThoughtsData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  //get one thought by id
  getThoughtsById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .then((dbThoughtsData) => {
        // If no thought is found, send 404
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // method for handling POST/api/thoughts to add to the db
  createThought({ body }, res) {
    Thoughts.create(body)
      .then((dbThoughtsData) => res.json(dbThoughtsData))
      .catch((err) => res.status(400).json(err));
  },
  // method for updating thought by id
  updateThought({ params, body }, res) {
    Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found with this id" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // method for deleting thought
  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.id })
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thoughtsController;
