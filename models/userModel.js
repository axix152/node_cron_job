// Simple in-memory user data
let users = [
  { name: "Younas", email: "younis@gmail.com" },
  { name: "Hassan", email: "hassan@gmail.com" },
];

const getUsers = () => users;

const addUser = (user) => {
  users.push(user);
};

module.exports = { getUsers, addUser };
