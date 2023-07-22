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

const getAllCocktails = (req, res) => {
  models.cocktail
    .getAllCocktails()
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

const addCocktail = (req, res) => {
  const newCocktail = req.body;
  models.cocktail
    .addCocktail(newCocktail)
    .then(([result]) => {
      res.status(200);
      console.info(req.body);
      res.location(`/cocktail/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteCocktail = (req, res) => {
  const cocktailId = req.params.id;
  models.cocktail
    .deleteCocktail(cocktailId)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getRandomCocktail,
  addCocktail,
  getAllCocktails,
  deleteCocktail,
};
