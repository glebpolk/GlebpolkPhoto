const formUpdate = document.querySelector("#form-update");

if (formUpdate) {
  formUpdate.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { title, description, img } = e.target;
    const { id } = formUpdate.dataset;
    const res = await fetch(`/api/photos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        // img: img.value,
      }),
    });
    const data = await res.json();
    if (data.message === "success") {
      window.location.assign(`/photos/${id}`);
    } else {
      alert(data.message);
    }
  });
}
