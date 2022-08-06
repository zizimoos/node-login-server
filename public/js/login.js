const id = document.getElementById("id");
const pw = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id.value,
      pw: pw.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(res.message);
        window.location.href = "/";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("login error"));
    });
});
