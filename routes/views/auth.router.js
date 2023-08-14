const router = require("express").Router();
const AuthorizationPage = require("../../components/AuthorizationPage");

//показать страницу авторизации
router.get("/", async (req, res) => {
  try {
    const document = res.renderComponent(AuthorizationPage, {
      title: "Authorization Page",
    });
    res.end(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
