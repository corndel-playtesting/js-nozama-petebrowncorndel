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
    const query = `
    SELECT products.id, products.name, products.description, products.price, products.stockQuantity, products.imageURL
    FROM products 
    INNER JOIN product_categories ON products.id = product_categories.productId
    INNER JOIN categories ON product_categories.categoryId = categories.ID
    WHERE categories.name = ?
    `
    const results = await db.raw(query, [category])
    return results
  }

}




export default Product
