const express = require("express");

// express router
const router = express.Router();

// routes callback function imported from goalController
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

/* ********************************
repeated router for getting a goal and setting a goal
********************************/
// router.get("/", getGoals);
// router.post("/", setGoal);

/********************************
 change it into
 *******************************/
router.route("/").get(getGoals).post(setGoal);

/* ********************************
repeated router for updating a goal and deleting a goal
********************************/
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);
/********************************
 change it into
 *******************************/
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
