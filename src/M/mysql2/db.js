import mysql from "mysql";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "login_lecture",
});

export default pool;
