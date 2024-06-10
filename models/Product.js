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

  static async create(name, description, price, stockQuantity, imageURL) {
    const query =
      'INSERT INTO products (name, description, price, stockQuantity, imageURL) VALUES (?, ?, ?, ?, ?) RETURNING *'
  }


  static async findByCategory(category) {
    const query = `SELECT * FROM products WHERE category = ?`
    const results = await db.raw(query, [category])
    return results
  }

}

export default Product
