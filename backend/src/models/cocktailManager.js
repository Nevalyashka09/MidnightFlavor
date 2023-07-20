const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "cocktail" });
  }

  addCocktail(cocktail) {
    return this.database.query(
      `insert into ${this.table} (name, ingridients, method) values (?, ?, ?)`,
      [cocktail.name, cocktail.ingridients, cocktail.method]
    );
  }

  findRandomCocktail() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY RAND() LIMIT 1`
    );
  }
}

module.exports = UserManager;
