export class UserStorage {
  static #users = {
    id: ["henry", "tomson", "james"],
    pw: ["1111", "2222", "3333"],
    name: ["henry", "tomson", "james"],
  };
  static getUsers(...args) {
    const users = this.#users;
    const newUsers = args.reduce((newUsers, arg) => {
      newUsers[arg] = users[arg];
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((userInfo, key) => {
      userInfo[key] = users[key][idx];
      return userInfo;
    }, {});
    return userInfo;
    // return {
    //   id: users.id[idx],
    //   pw: users.pw[idx],
    //   name: users.name[idx],
    // };
  }
}
