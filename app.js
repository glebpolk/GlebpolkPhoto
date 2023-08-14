require("@babel/register");
require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
const fileUpload = require("express-fileupload");
const { Photo } = require("./db/models");

const PORT = process.env.PORT || 3000;

const app = express();

serverConfig(app);

const indexRouter = require("./routes");

app.use(fileUpload());

// app.post("/upload", async (req, res) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("Файл не был загружен.");
//   }
//   console.log(req.files.file);
//   console.log(req.body);
//   // Получение загруженного файла
//   let file = req.files.file;

//   // Путь для сохранения файла
//   let uploadPath = __dirname + "/public/img/" + file.name;

//   const newPhoto = await Photo.create({
//     title: req.body.title,
//     description: req.body.description,
//     img: `/img/${file.name}`,
//     user_id: req.session.user_id,
//   });
//   // Сохранение файла на сервере
//   file.mv(uploadPath, function (err) {
//     if (err) {
//       return res.status(500).send(err);
//     }

//     res.send("Файл успешно загружен.");
//   });
// });

app.use("/", indexRouter); //по указанному маршруту, отдавай указанный файл

app.get("/my-cookies", (req, res) => {
  console.log(req.cookies); // { test: '42' }
  res.json(req.cookies);
});

app.get("/session", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.json(req.session);
});

app.listen(PORT, () => {
  console.log(`Сервер работает на ${PORT} порту, все хорошо!`);
});
