const get = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render("login");
  },
};

const post = {
  login: (req, res) => {
    console.log(req.body);
  },
};

export default { get, post };
