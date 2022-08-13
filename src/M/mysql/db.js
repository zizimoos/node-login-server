import mysql from "mysql";

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "login_lecture",
});

db.connect(() => {
  console.log(" 🟢 Connected to the database");
});

export default db;
