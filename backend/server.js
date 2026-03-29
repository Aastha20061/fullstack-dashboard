const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://aasthaghai2006_db_user:aastha123@cluster0.tk0epjo.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/products", require("./routes/productRoutes"));

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});