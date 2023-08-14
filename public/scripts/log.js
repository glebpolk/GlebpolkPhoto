const logForm = document.querySelector("#form-log");

if (logForm) {
  logForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const res = await fetch("/api/auth/authorization", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === "success") {
      window.location.assign("/photos");
    } else {
      document.querySelector(".error").innerHTML = data.message;
    }
  });
}
