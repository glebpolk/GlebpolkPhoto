const router = require("express").Router();

const registerRouter = require("./views/register.routes");
const photosRouter = require("./views/photos.routes");
const authRouter = require("./views/auth.router");
const updateRouter = require("./views/update.router");

const registerApiRouter = require("./api/register.api.routes");
const usersApiRouter = require("./api/user.api.routes");
const photoApiRouter = require("./api/photos.api.routes");
const authApiRouter = require("./api/auth.api.router");

router.use("/", registerRouter);
router.use("/photos", photosRouter);
router.use("/auth", authRouter);
router.use("/photos", updateRouter);

router.use("/api/photos", photoApiRouter);
router.use("/api/register", registerApiRouter);
router.use("/api/users", usersApiRouter);
router.use("/api/auth", authApiRouter);

module.exports = router;
