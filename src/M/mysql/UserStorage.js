import db from "./db.js";

export class UserStorage {
  static async getUsers(...args) {}

  static getUserInfo(id) {
    const sql = `SELECT * FROM users WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  static async save(body) {
    const sql = `INSERT INTO users(id, name, password, email) VALUES(?,?,?,?)`;
    return new Promise((resolve, reject) => {
      db.query(
        sql,
        [body.id, body.name, body.pw, body.email],
        (err, results) => {
          if (err) {
            reject(`${err}`);
          } else {
            resolve({ success: true, message: "Register Success" });
          }
        }
      );
    });
  }
}
