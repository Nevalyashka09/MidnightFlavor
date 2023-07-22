const express = require("express");

const router = express.Router();

const cocktailControllers = require("./controllers/cocktailControllers");

router.get("/allCocktails", cocktailControllers.getAllCocktails);
router.get("/randomCocktail", cocktailControllers.getRandomCocktail);
router.post("/addCocktail", cocktailControllers.addCocktail);
router.delete("/deleteCocktail/:id", cocktailControllers.deleteCocktail);

module.exports = router;
