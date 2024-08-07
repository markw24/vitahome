import pool from "./db";
import { useEffect, useState } from "react";

async function fetchEquipment() {
  try {
    const [rows] = await pool.query("SELECT * FROM equipment");
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    return [];
  }
}

export default async function HomePage() {
  const equipment = await fetchEquipment();

  return (
    <div>
      <h1>Equipment List</h1>
      <ul>
        {equipment.length > 0 ? (
          equipment.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No equipment found.</li>
        )}
      </ul>
    </div>
  );
}
