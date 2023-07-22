const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(user) {
    return this.database.query(
      `insert into ${this.table} (name, email, hashedPassword ) values (?, ?, ?)`,
      [user.name, user.email, user.hashedPassword]
    );
  }

  findUserByEmail(user) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      user.email,
    ]);
  }
}

module.exports = UserManager;
