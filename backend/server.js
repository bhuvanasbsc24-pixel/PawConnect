const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to PawConnect API 🐾",
  });
});

app.get("/api/pets", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      breed: "Golden Retriever",
      age: 2,
      location: "Bengaluru",
    },
    {
      id: 2,
      name: "Luna",
      type: "Cat",
      breed: "Persian",
      age: 1,
      location: "Bengaluru",
    },
    {
      id: 3,
      name: "Max",
      type: "Dog",
      breed: "Labrador",
      age: 3,
      location: "Mysuru",
    },
    {
      id: 4,
      name: "Milo",
      type: "Cat",
      breed: "Siamese",
      age: 2,
      location: "Bengaluru",
    },
    {
      id: 5,
      name: "Coco",
      type: "Dog",
      breed: "Beagle",
      age: 1,
      location: "Tumakuru",
    },
    {
      id: 6,
      name: "Daisy",
      type: "Cat",
      breed: "British Shorthair",
      age: 4,
      location: "Bengaluru",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`PawConnect server running on http://localhost:${PORT}`);
});