import db from "../db/index.js";

class User {
  static async findAll() {
    const query = `
      SELECT id, username, firstName, lastName, email, avatar 
      FROM users
    `;
    const results = await db.raw(query);
    return results;
  }

  static async findById(id) {
    const query = `SELECT id, username, firstName, lastName, email, avatar FROM users WHERE id = ?`;
    const results = await db.raw(query, [id]);
    return results[0];
  }

  static async create(newUser) {
    const query =
      "INSERT INTO users (username, firstName, lastName, email, avatar, password) VALUES (?, ?, ?, ?, ?, ?) RETURNING *";
    const results = await db.raw(query, [
      newUser.username,
      newUser.firstName,
      newUser.lastName,
      newUser.email,
      newUser.avatar,
      newUser.password,
    ]);
    return results[0];
  }

  static async delete(userID) {
    const query = "DELETE FROM users WHERE id = ?";
    const results = await db.raw(query, [userID]);
    return results;
  }

  static async logIn(credentials) {
    const { username, password } = credentials
    const query = `
          SELECT id, username, firstName, lastName, email, avatar
          FROM users
          WHERE username = ? AND password = ?
          `;
    const results = await db.raw(query, [username, password]);
    if (results.length === 0) {
      throw new Error('User not found');
    }
    return results[0];
  }
}

export default User;
