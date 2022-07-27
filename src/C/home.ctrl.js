function home(req, res) {
  res.render("home");
}
function login(req, res) {
  res.render("login");
}

export default { home, login };
