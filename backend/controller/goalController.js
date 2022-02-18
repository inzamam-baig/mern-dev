// use then and catch instead of try/catch
const asyncHandler = require("express-async-handler");
// model
const Goal = require("../models/goalModel");

// @desc Get User Specific Goals
// @route GET /api/goals
// @access private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Set a User Specific Goal
// @route POST /api/goals
// @access Private

const setGoal = asyncHandler(async (req, res) => {
  // checking if goal is sent in request
  if (!req.body.goal) {
    // return res.status(400).json({ message: "Empty Field, Please add a goal" });
    res.status(400);
    throw new Error("Please a text Field");
  }
  const goal = await Goal.create({
    goal: req.body.goal,
  });
  res.status(200).json({ message: goal });
});

// @desc Update a User Specific Goal
// @route PUT /api/goals
// @access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc Delete a User Specific Goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
  await goal.remove();
  res.status(200).json({ id: `Deleted Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
