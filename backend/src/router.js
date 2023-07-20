const express = require("express");

const router = express.Router();

const cocktailControllers = require("./controllers/cocktailControllers");

router.get("/randomCocktail", cocktailControllers.getRandomCocktail);

module.exports = router;
