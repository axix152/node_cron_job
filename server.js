const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const { schedule } = require("./src/jobs/sendDataJob");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);

schedule(); // Start the cron job

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
