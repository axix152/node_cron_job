const { getUsers, addUser } = require("../models/userModel");

const sendDataToUsers = (req, res) => {
  const users = getUsers();
  users.forEach((user) => {
    console.log(`Sending data to ${user.name} at ${user.email}`);
  });
  res.send("Data sent to all users.");
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  addUser({ name, email });
  res.send(`User ${name} added!`);
};

module.exports = { sendDataToUsers, createUser };
