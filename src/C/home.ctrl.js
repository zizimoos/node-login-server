import users from "../M/data.js";

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
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
      return res.json({
        success: false,
        msg: "password is wrong",
      });
    }
  },
};

export default { render, process };
