import express from 'express'
import Product from '../models/Product.js'

const app = express()
app.use(express.json())

// You can delete this endpoint
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to Nozama!', time: Date.now() })
})

// TODO: add endpoints during the workshop

app.get('/products', async (req, res) => {
  const products = await Product.findAll()
  res.json(products)
})

app.get('/products/:productId', async (req, res) => {
  const product = await Product.findById(req.params.productId)
  res.json(product)
})

app.get('/products/category/:category', async (req, res) => {
  const productsInCategory = await Product.findByCategory(req.params.category)
  res.json(productsInCategory)
})

app.post('/products', async (req, res) => {
  const newProduct = await Product.create(req.body.name, req.body.description, req.body.price, req.body.stockQuantity, req.body.imageURL)
  res.json(newProduct)
})

export default app
