const router = require("express").Router();
const { Photo } = require("../../db/models");
const UpdatePage = require("../../components/UpdatePage");

//обновление конкретной карточки
router.get("/:photoId/form-update", async (req, res) => {
  try {
    const { photoId } = req.params;
    const photo = await Photo.findOne({ where: { id: photoId } });
    const document = res.renderComponent(UpdatePage, {
      title: "Update Page",
      photo,
    });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
