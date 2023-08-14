const router = require("express").Router();
const RegisterPage = require("../../components/RegisterPage");

//показать страницу регистрации
router.get("/", async (req, res) => {
  try {
    const document = res.renderComponent(RegisterPage, {
      title: "Register Page",
    });
    res.end(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
