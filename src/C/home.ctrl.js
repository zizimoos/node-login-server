import User from "../M/memory/Users.js";

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
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

export default { render, process };
