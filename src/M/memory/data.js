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
}
