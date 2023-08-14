const router = require("express").Router();
const PhotosPage = require("../../components/PhotosPage");
const PhotoItem = require("../../components/PhotoItem");
const PhotoPage = require("../../components/PhotoPage");
const { Photo } = require("../../db/models");

//показать все карточки
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.findAll();
    const document = res.renderComponent(PhotosPage, {
      title: "Photos Page",
      photos,
    });
    res.end(document);
  } catch ({ message }) {
    res.json(message);
  }
});

//показать конкретную карточку
router.get("/:photoId", async (req, res) => {
  const { photoId } = req.params;
  try {
    const photo = await Photo.findOne({ where: { id: photoId } });
    const document = res.renderComponent(PhotoPage, {
      photo,
      title: "Photo Page",
    });
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
