import db from '../db/index.js'

class User {
  static async findAll() {
    const query = `
      SELECT id, username, firstName, lastName, email, avatar 
      FROM users
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
    const query = `SELECT id, username, firstName, lastName, email, avatar FROM users WHERE id = ?`
    const results = await db.raw(query, [id])
    return results[0]
  }

  static async create(username, firstName, lastName, email, avatar, password) {
    const query =
      'INSERT INTO users (username, firstName, lastName, email, avatar, password) VALUES (?, ?, ?, ?, ?, ?) RETURNING *'
  }
}

export default User
