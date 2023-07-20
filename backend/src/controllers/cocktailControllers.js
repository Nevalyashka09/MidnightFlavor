const models = require("../models");

const getRandomCocktail = (req, res) => {
  models.cocktail
    .findRandomCocktail()
    .then((cocktail) => {
      if (!cocktail) {
        res.sendStatus(404);
      } else {
        res.send(cocktail);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getRandomCocktail,
};
