const router = require("express").Router();
const instructorRoutes = require("./instructorRoutes");
const sharedRoutes = require("./sharedRoutes");
const loginRoutes = require("./loginRoutes");
const signUpRoutes = require("./signUpRoutes");
const landingpage = require("./landingPage");
const randomRoutes = require("./randomRoutes");

const profileRoutes = require("./profileRoutes")

const customWorkout = require("./customWorkoutRoutes");


router.use("/instructor", instructorRoutes);
router.use("/shared", sharedRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signUpRoutes);
router.use("/landingpage", landingpage);
router.use("/random", randomRoutes);

router.use("/profile",profileRoutes)

router.use("/custom", customWorkout);
router.use("/profile",profileRoutes)


module.exports = router;
