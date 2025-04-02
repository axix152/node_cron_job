const cron = require("node-cron");
const { getUsers } = require("../models/userModel");

const schedule = () => {
  cron.schedule("* * * * *", () => {
    const users = getUsers();
    console.log("Scheduled job running every minute");

    users.forEach((user) => {
      console.log(`Sending data to ${user.name} at ${user.email}`);
    });
  });
};

module.exports = { schedule };
