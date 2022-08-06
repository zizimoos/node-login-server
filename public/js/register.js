const id = document.getElementById("id");
const userName = document.getElementById("name");
const pw = document.getElementById("pw");
const confirmPw = document.getElementById("confirm-pw");
const email = document.getElementById("email");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(id.value, userName.value, pw.value, confirmPw.value, email.value);
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: id.value,
  //       pw: pw.value,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.success) {
  //         alert(res.message);
  //         window.location.href = "/";
  //       } else {
  //         alert(res.message);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(new Error("login error"));
  //     });
});
