const router = require("express").Router();
const usersRoutes = require("./users-routes");
const thoughtsRoutes = require("./thoughts-routes");

// add prefix of `/users` to routes created in `users-routes.js`
router.use("/users", usersRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
