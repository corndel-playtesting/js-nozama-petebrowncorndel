import db from '../db/index.js'

class Product {
  static async findAll() {
    const query = `
      SELECT * 
      FROM products
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
    const query = `SELECT * FROM products WHERE id = ?`
    const results = await db.raw(query, [id])
    return results[0]
  }

  static async create(newProduct) {
    const query =
      'INSERT INTO products (name, description, price, stockQuantity, imageURL) VALUES (?, ?, ?, ?, ?) RETURNING *'
      const results = await db.raw(query, [newProduct.name, newProduct.description, newProduct.price, newProduct.stockQuantity, newProduct.imageURL])
      return results[0]
  }


  static async findByCategory(category) {
    const query = `SELECT * FROM products WHERE category = ?`
    const results = await db.raw(query, [category])
    return results
  }

}
const results = await Product.findByCategory('Baby')
console.log(results)


export default Product
