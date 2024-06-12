import express from 'express'
import productRouter from '../routers/products.js'
import userRouter from '../routers/users.js'
import reviewRouter from '../routers/reviews.js'

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/reviews', reviewRouter)

export default app
