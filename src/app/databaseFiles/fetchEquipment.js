import pool from "./db";

export async function fetchEquipment() {
  try {
    const [rows] = await pool.query(`
      SELECT
        p.product_name AS product_name,
        p.product_category AS category_name,
        p.price AS product_price,
        p.vendor AS vendor_name,
        p.description AS product_description
      FROM
        product_database_new p
      ORDER BY
        p.product_category, p.product_name
    `);
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    return [];
  }
}
