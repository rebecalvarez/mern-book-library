const router = require("express").Router();
const bookshelfRoutes = require("./bookshelf");

// Bookshelf routes
router.use("/bookshelf", bookshelfRoutes);

module.exports = router;
