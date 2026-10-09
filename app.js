const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to read JSON request bodies
app.use(express.json());

// Custom request logger middleware
app.use(logger);

// Modular student routes
app.use("/students", studentRoutes);

// Handle invalid JSON and other request errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ message: "Invalid JSON body" });
  }
  console.error(err);
  return res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Student API running at http://localhost:${PORT}`);
});
