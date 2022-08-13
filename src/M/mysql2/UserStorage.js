import database from "./db.js";

export class UserStorage {
  static async getUsers(...args) {}

  static getUserInfo(id) {
    const sql = `SELECT * FROM users WHERE id = ?`;
    const data = database.query(sql, [id], (err, results) => {
      return results[0];
    });
    return data;
  }

  static async save(body) {}
}
