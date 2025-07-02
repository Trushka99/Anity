import express from "express";
import Game from "../models/Games";
const gamesRoutes = express.Router();

gamesRoutes.get("/", async (req, res) => {
  const gameReviews = await Game.find();
  res.json(gameReviews);
});

gamesRoutes.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      res.status(404).json({ message: "Игра не найдена" });
    }
    res.json(game);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Некорректный ID" });
  }
});
gamesRoutes.post("/", async (req, res) => {
  const { img, title, description, fulldescription } = req.body;
  const review = new Game({ img, title, description, fulldescription });
  await review.save();
  res.status(201).json(review);
});
export default gamesRoutes;
