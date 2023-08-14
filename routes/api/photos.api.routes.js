const router = require("express").Router();
const { Photo } = require("../../db/models");
const PhotoItem = require("../../components/PhotoItem");

//получить все фотографии
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.findAll();
    res.json(photos);
  } catch ({ message }) {
    res.json({ message });
  }
});

//получить одну фотографию
router.get("/:photoId", async (req, res) => {
  try {
    const { photoId } = req.params;
    const photo = await Photo.findOne({ where: { id: photoId } });
    res.json(photo);
  } catch ({ message }) {
    res.json({ message });
  }
});

//добавить/создать новую карточку фотографии
// router.post("/", async (req, res) => {
//   try {
//     const { img, title, description } = req.body;
//     const photoNew = await Photo.create({
//       img,
//       title,
//       description,
//       user_id: req.session.user_id,
//     });
//     const html = res.renderComponent(
//       PhotoItem,
//       { photo: photoNew },
//       { htmlOnly: true }
//     );
//     console.log(html);
//     res.json({ html });
//     res.json(photo);
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

//добавить/создать новую карточку фотографии
router.post("/", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("Файл не был загружен.");
    }
    console.log("-----11111---->", req.files.file);
    console.log("----222222----->", req.body);
    // Получение загруженного файла
    let file = req.files.file;

    // Путь для сохранения файла
    let uploadPath = __dirname + "/../../public/img/" + file.name;
    console.log("-----333333---->", uploadPath);

    const newPhoto = await Photo.create({
      title: req.body.title,
      description: req.body.description,
      img: `/img/${file.name}`,
      user_id: req.session.user_id,
    });
    console.log(newPhoto);

    const html = res.renderComponent(
      PhotoItem,
      { photo: newPhoto },
      { htmlOnly: true }
    );
    // Сохранение файла на сервере
    file.mv(uploadPath, function (err) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      console.log("____OK______");
      res.json({ html });
      // res.send("Файл успешно загружен.");
    });
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

//обновить конкренутю карточку
router.put("/:photoId", async (req, res) => {
  try {
    const { title, description, img } = req.body;
    const { photoId } = req.params;
    const [result] = await Photo.update(
      { title, description, img },
      { where: { id: photoId, user_id: req.session.user_id } }
    );
    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
    res.json({ message: "false" });
  } catch ({ message }) {
    res.json(message);
  }
});

//удалить карточку фотографии
router.delete("/:photoId", async (req, res) => {
  try {
    const { photoId } = req.params;
    const result = await Photo.destroy({
      where: { id: photoId, user_id: req.session.user_id },
    });
    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
    res.json({ message: "false" });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
