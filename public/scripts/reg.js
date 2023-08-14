const formReg = document.querySelector("#form-reg");

if (formReg) {
  formReg.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    // console.log(name);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
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
    console.log(data);
  });
}
