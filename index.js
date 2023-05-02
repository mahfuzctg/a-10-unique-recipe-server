const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./Data/Chefdata.json");
const recipes = require("./Data/Recipedata.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Unique is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});
app.get("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedRecipe = recipes.find((r) => parseInt(r.id) === id);
  res.send(selectedRecipe);
});
app.listen(port, () => {
  console.log(`unique is running on port: ${port}`);
});
