import fs from "fs/promises";

export class UserStorage {
  static getUsers(...args) {
    const newUsers = args.reduce((newUsers, arg) => {
      newUsers[arg] = users[arg];
      return newUsers;
    }, {});
    return newUsers;
  }
  static async getUserInfo(id) {
    const users = await fs
      .readFile("./src/M/fileSystem/Users.json", "utf-8")
      .then((data) => {
        return JSON.parse(data);
      })
      .catch((err) => {
        console.error(new Error(err));
      });
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((userInfo, key) => {
      userInfo[key] = users[key][idx];
      return userInfo;
    }, {});
    return userInfo;
  }
  static save(body) {
    users.id.push(body.id);
    users.pw.push(body.pw);
    users.name.push(body.name);
    users.email.push(body.email);
    return {
      success: true,
    };
  }
}
