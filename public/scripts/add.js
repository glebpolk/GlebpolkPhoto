const formAdd = document.querySelector("#form-add");

if (formAdd) {
  formAdd.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/photos", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        console.log(data);
        return;
      }
      const data = await res.json();
      console.log(data);

      if (data) {
        const cardsList = document.querySelector(".cardsList");
        cardsList.insertAdjacentHTML("beforeend", data.html);
      }

      formAdd.reset();
    } catch (message) {
      console.log(message);
    }
  });
}

// const res = await fetch("/api/photos", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: title.value,
//     description: description.value,
//     img: img.value,
//   }),
// });
// const data = await res.json();
// console.log(data);
// const filmsList = document.querySelector(".cardsList");
// filmsList.insertAdjacentHTML("beforeend", data.html);
// formAdd.reset();
