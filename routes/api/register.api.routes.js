const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.post("/", async (req, res) => {
  try {
    let user;
    const { name, email, password } = req.body;
    console.log(req.body);
    if (name.trim() && email.trim() && password.trim()) {
      user = await User.findOne({ where: { email } });
      if (user) {
        res.json({ message: "Данная почта уже существует" });
        return;
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ name, email, password: hash });
        req.session.user_id = user.id;
        res.json({ message: "success" });
        return;
      }
    } else {
      res.json({ message: "Заполните все поля!" });
      return;
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
