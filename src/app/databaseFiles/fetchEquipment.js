import pool from "./db";

export async function fetchEquipment() {
  try {
    const [rows] = await pool.query(`
      SELECT 
        e.id AS equipment_id,
        e.name AS equipment_name,
        ec.name AS category_name,
        v.name AS vendor_name,
        ed.price,
        ed.order_link
      FROM 
        equipment e
      JOIN 
        equipment_categories ec ON e.category_id = ec.id
      JOIN 
        equipment_details ed ON e.id = ed.equipment_id
      JOIN 
        vendors v ON ed.vendor_id = v.id
    `);
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    return [];
  }
}
