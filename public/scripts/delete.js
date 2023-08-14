const photosList = document.querySelector(".card");

if (photosList) {
  photosList.addEventListener("click", async (e) => {
    if (e.target.classList.contains("btn-delete")) {
      const card = e.target.closest(".card");
      const { id } = card.dataset;
      const res = await fetch(`/api/photos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.message === "success") {
        card.remove();
      } else {
        alert(data.message);
      }
    }
  });
}
