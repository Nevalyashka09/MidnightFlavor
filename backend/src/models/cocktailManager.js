const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "cocktail" });
  }

  addCocktail(cocktail) {
    return this.database.query(
      `insert into ${this.table} (name, spirit, ingredients, method) values (?, ?, ?, ?)`,
      [cocktail.name, cocktail.spirit, cocktail.ingredients, cocktail.method]
    );
  }

  findRandomCocktail() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY RAND() LIMIT 1`
    );
  }

  async getAllCocktails() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY cocktail_id DESC`
    );
  }

  async deleteCocktail(cocktailId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE cocktail_id = ?`,
      [cocktailId]
    );
  }
}

module.exports = UserManager;
