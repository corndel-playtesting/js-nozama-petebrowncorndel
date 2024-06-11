import db from '../db/index.js'

class Review {
  static async findById(id) {
    const query = `SELECT * FROM reviews WHERE id = ?`
    const results = await db.raw(query, [id])
    return results
  }

  static async findByProductId(id) {
    const query = `SELECT * FROM reviews WHERE productId = ?`
    const results = await db.raw(query, [id])
    return results
  }


  static async create(newReview) {
    const query =
      "INSERT INTO reviews (productId, userId, rating, reviewText) VALUES (?, ?, ?, ?) RETURNING *";
    const results = await db.raw(query, [
      newReview.productId,
      newReview.userId,
      newReview.rating,
      newReview.reviewText,
    ])
    return results[0]
  }

  static async productAverageRating(id) {
    const query = `SELECT AVG(rating) AS averageRating FROM reviews WHERE productId = ?`
    const results = await db.raw(query, [id])
    return results[0].averageRating
  }


}

export default Review
