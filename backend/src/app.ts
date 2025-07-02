import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import gamesRoutes from "./routes/gamesRoutes";
import cors from "cors";
import path = require("path");
import multer from "multer";
import Images from "./models/Images";
import { Request, Response } from "express";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../uploads")));
// Настройка multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
app.get("/images", async (req, res) => {
  const images = await Images.find();
  res.json(images);
});
app.post(
  "/upload",
  upload.single("image"),
  async (req: Request, res: Response) => {
    if (!req.file) {
      res.status(400).send("Нет файла");
      return;
    }

    // Путь к файлу для фронта
    const imagePath = `/images/${req.file.filename}`;
    const newImage = new Images({ gameImage: imagePath });
    // 👉 можешь сохранить imagePath в Mongo, если нужно
    // const newImage = new Images({ path: imagePath });
    // await newImage.save();
    await newImage.save();

    res.status(201).json({ newImage });
  }
);
app.use("/games", gamesRoutes);
console.log(PORT);
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("✅ Подключено к MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Ошибка подключения к MongoDB:", err));
