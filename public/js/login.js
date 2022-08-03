const id = document.getElementById("id");
const pw = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("login success");
        window.location.href = "/";
      } else {
        alert(res.msg);
      }
    });
});
