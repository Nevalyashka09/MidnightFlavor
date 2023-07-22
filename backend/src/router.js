const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword } = require("./middlewares/auth");

const cocktailControllers = require("./controllers/cocktailControllers");
const userControllers = require("./controllers/userControllers");

router.post("/users", hashPassword, userControllers.createUser);

router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/allCocktails", cocktailControllers.getAllCocktails);
router.get("/randomCocktail", cocktailControllers.getRandomCocktail);
router.get("/randomCocktail/:spirit", cocktailControllers.getCocktailBySpirit);
router.post("/addCocktail", cocktailControllers.addCocktail);
router.delete("/deleteCocktail/:id", cocktailControllers.deleteCocktail);

module.exports = router;
