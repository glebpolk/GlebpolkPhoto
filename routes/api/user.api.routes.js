const router = require("express").Router();
const { User } = require("../../db/models");

//отдаем всех юзеров
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch ({ message }) {
    res.json({ message });
  }
});

// отдаем конкретного одного юзера
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ where: { id: userId } });
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

//добавление юзера
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

//изменение пользователя
router.put("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    const [result] = await User.update(
      { name, email, password },
      { where: { id: userId } }
    );
    res.json(result);
  } catch ({ message }) {
    res.json({ message });
  }
});

//удаление пользователля
router.delete("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await User.destroy({ where: { id: userId } });
    res.json(result);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
