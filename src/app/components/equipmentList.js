import React from "react";

export default function EquipmentList({ equipment }) {
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
