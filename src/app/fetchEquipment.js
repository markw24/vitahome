import pool from "./db";

export async function fetchEquipment() {
  try {
    const [rows] = await pool.query("SELECT * FROM equipment");
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    return [];
  }
}
