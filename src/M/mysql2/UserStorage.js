import database from "./db.js";

export class UserStorage {
  static async getUsers(...args) {}

  static async getUserInfo(id) {
    const sql = `SELECT * FROM users WHERE id = ?`;
    const data = await database.query(sql, [id], (err, results) => {
      if (results[0]) {
        return results[0];
      } else {
        return null;
      }
    });

    return data;
  }

  static async save(body) {}
}
