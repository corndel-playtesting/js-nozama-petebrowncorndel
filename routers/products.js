import { Router } from "express"
import Product from "../models/Product.js"

const router = Router()

router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.get("/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.json(product);
});

router.get("/category/:category", async (req, res) => {
  const productsInCategory = await Product.findByCategory(req.params.category);
  res.json(productsInCategory);
});

router.post("/", async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});

export default router