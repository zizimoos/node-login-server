import fs from "fs/promises";

export class UserStorage {
  static async getUsers(...args) {
    const users = await fs
      .readFile("./src/M/fileSystem/Users.json", "utf-8")
      .then((data) => {
        return JSON.parse(data);
      })
      .catch((err) => {
        console.error(new Error(err));
      });
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
  static async save(body) {
    const usersData = await fs
      .readFile("./src/M/fileSystem/Users.json", "utf-8")
      .then((data) => {
        return JSON.parse(data);
      })
      .catch((err) => {
        console.error(new Error(err));
      });

    usersData.id.push(body.id);
    usersData.pw.push(body.pw);
    usersData.name.push(body.name);
    usersData.email.push(body.email);

    const saveReturn = await fs
      .writeFile("./src/M/fileSystem/Users.json", JSON.stringify(usersData))
      .then(() => {
        return { success: true };
      })
      .catch((err) => {
        console.error(new Error(err));
      });
    return saveReturn;
  }
}
