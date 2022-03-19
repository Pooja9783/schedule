const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3030;
const connect = require("./src/config/db.js");

const scheduleControllers = require("./src/controllers/schedule");

app.use("/schedule", scheduleControllers);

app.listen(port, async () => {
  await connect();
  console.log("~~~~~~~Port Listening from 3030~~~~~~");
});
