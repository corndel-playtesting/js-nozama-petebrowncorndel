import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

router.post("/login", async (req, res) => {
  const userLogin = await User.logIn(req.body);
  res.json(userLogin);
});

router.delete("/:userId", async (req, res) => {
  const userDelete = await User.delete(req.params.userId);
  res.json(userDelete);
});

export default router