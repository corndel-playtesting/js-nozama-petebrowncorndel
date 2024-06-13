import { Router } from "express";
import Review from "../models/Review.js";

const router = Router();

router.get("/:productId/", async (req, res) => {
  const productReviews = await Review.findByProductId(req.params.productId);
  res.json(productReviews);
});

router.post("/", async (req, res) => {
  const newReview = await Review.create(req.body);
  res.json(newReview);
});

router.get("/:productId/average", async (req, res) => {
  const productRating = await Review.productAverageRating(req.params.productId);
  res.json(productRating);
});

export default router