import { UserStorage } from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }
  loginOld() {
    const { id, pw } = UserStorage.getUsers("id", "pw");
    if (id.includes(this.body.id)) {
      const idx = id.indexOf(this.body.id);
      if (pw[idx] === this.body.pw) {
        return {
          success: true,
          message: "Login Success",
        };
      }
      return {
        success: false,
        message: "password is wrong",
      };
    }
  }
  login() {
    const userInfo = UserStorage.getUserInfo(this.body.id);
    if (userInfo.id === this.body.id) {
      if (userInfo.pw === this.body.pw) {
        return {
          success: true,
          message: "Login Success",
        };
      }
      return {
        success: false,
        message: "password is wrong",
      };
    }
    return {
      success: false,
      message: "id is wrong",
    };
  }
}

export default User;
