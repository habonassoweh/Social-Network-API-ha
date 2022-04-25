const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts-controller");

// Set up GET all and POST at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
