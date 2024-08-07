import React from "react";

export default function EquipmentList({ equipment }) {
  return (
    <div>
      <h1>Equipment List</h1>
      <table>
        <thead>
          <tr>
            <th>Equipment Name</th>
            <th>Category</th>
            <th>Vendor</th>
            <th>Price</th>
            <th>Order Link</th>
          </tr>
        </thead>
        <tbody>
          {equipment.length > 0 ? (
            equipment.map((item) => (
              <tr key={item.equipment_id}>
                <td>{item.equipment_name}</td>
                <td>{item.category_name}</td>
                <td>{item.vendor_name}</td>
                <td>${item.price}</td>
                <td>
                  <a
                    href={item.order_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No equipment found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
