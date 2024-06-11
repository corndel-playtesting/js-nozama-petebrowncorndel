import db from '../db/index.js'

class Review {
  static async findById(id) {
    const query = `SELECT * FROM reviews WHERE id = ?`
    const results = await db.raw(query, [id])
    return results
  }

//   static async create(name, description, price, stockQuantity, imageURL) {
//     const query =
//       'INSERT INTO products (name, description, price, stockQuantity, imageURL) VALUES (?, ?, ?, ?, ?) RETURNING *'
//   }

}

export default Review
