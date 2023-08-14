const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

//авторизация на сайте ранее зареганного пользователя
router.post("/authorization", async (req, res) => {
  try {
    let user;
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      user = await User.findOne({ where: { email } });
      const compare = await bcrypt.compare(password, user.password);
      if (user && compare) {
        req.session.user_id = user.id;
        res.json({ message: "success" });
        return;
      } else {
        res.json({ message: "Неверный логин или пароль" });
        return;
      }
    } else {
      res.json({ message: "Заполните все поля!" });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/logout", (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Ошибка при удалении сессии" });
    }

    res
      .clearCookie("user_sid") // серверное удаление куки по имени
      .redirect("/");
  });
});

module.exports = router;
