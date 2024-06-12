import express from 'express'
import Product from '../models/Product.js'
import User from '../models/User.js'
import Review from '../models/Review.js'

const app = express()
app.use(express.json())


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
  const newProduct = await Product.create(req.body)
  res.json(newProduct)
})

app.post('/users', async (req, res) => {
  const newUser = await User.create(req.body)
  res.json(newUser)
})

app.post('/users/login', async (req, res) => {
  const userLogin = await User.logIn(req.body)
  res.json(userLogin)
})

app.delete('/user/:userId', async (req, res) => {
  const userDelete = await User.delete(req.params.userId)
  res.json(userDelete)
})

app.get('/products/:productId/reviews', async (req, res) => {
  const productReviews = await Review.findByProductId(req.params.productId)
  res.json(productReviews)
})

app.post('/reviews', async (req, res) => {
  const newReview = await Review.create(req.body)
  res.json(newReview)
})

app.get('/products/:productId/reviews/average', async (req, res) => {
  const productRating = await Review.productAverageRating(req.params.productId)
  res.json(productRating)
})

export default app
