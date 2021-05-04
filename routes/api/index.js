const router = require("express").Router();
const userRoutes = require("../api/userRoutes");
const accountRoutes = require("../api/accountRoutes");
const characterRoutes = require("../api/characterRoutes");

router.use("/user", userRoutes);
router.use("/account", accountRoutes);
router.use("/character", characterRoutes);

module.exports = router;
