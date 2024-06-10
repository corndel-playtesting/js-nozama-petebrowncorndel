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

//   static async create(username, verified) {
//     const query =
//       'INSERT INTO products (username, verified) VALUES (?, ?) RETURNING *'
//     const results = await db.raw(query, [username, verified])
//     return results[0]
//   }
}

export default Product
