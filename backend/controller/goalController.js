// use then and catch instead of try/catch
const asyncHandler = require("express-async-handler");

// @desc Get User Specific Goals
// @route GET /api/goals
// @access private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc Set a User Specific Goal
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    // return res.status(400).json({ message: "Empty Field, Please add a goal" });
    res.status(400);
    throw new Error("Please a text Field");
  }
  res.status(200).json({ message: "Set Goals" });
});

// @desc Update a User Specific Goal
// @route PUT /api/goals
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` });
});

// @desc Delete a User Specific Goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
