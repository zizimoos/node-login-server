const id = document.getElementById("id");
const pw = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  console.log(req);
});
