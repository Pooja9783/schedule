const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedule");
const scheduleTime = require("node-schedule");
router.post("", async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    scheduleTime.scheduleJob("0 1 * * *", function (fireDate) {
      console.log(
        "This job was supposed to run at " +
          fireDate +
          ", but actually ran at " +
          new Date()
      );
    });
    return res.status(201).send(schedule);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const schedule = await Schedule.find().lean().exec();
    return res.send(schedule);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});
module.exports = router;
