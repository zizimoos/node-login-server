const id = document.getElementById("id");
const userName = document.getElementById("name");
const pw = document.getElementById("pw");
const confirmPw = document.getElementById("confirm-pw");
const email = document.getElementById("email");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(id.value, userName.value, pw.value, confirmPw.value, email.value);
  if (
    !id.value ||
    !userName.value ||
    !pw.value ||
    !confirmPw.value ||
    !email.value
  ) {
    alert("Please fill all the fields");
    return;
  }
  if (pw.value !== confirmPw.value) {
    alert("Password does not match");
    return;
  }

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id.value,
      pw: pw.value,
      name: userName.value,
      email: email.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(res.message);
        window.location.href = "/login";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => {
      console.error(new Error("register error"));
    });
});
