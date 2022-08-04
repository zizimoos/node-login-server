import { UserStorage } from "../M/memory/data.js";

const render = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render("login");
  },
};

const process = {
  login: (req, res) => {
    const { id, pw } = req.body;
    const users = UserStorage.getUsers("id", "pw");
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
          message: "Login Success",
        });
      }
      return res.json({
        success: false,
        message: "password is wrong",
      });
    }
  },
};

export default { render, process };
