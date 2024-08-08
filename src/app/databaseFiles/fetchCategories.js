// components/FetchCategories.js
import { useEffect, useState } from "react";
import { fetchEquipment } from "./fetchEquipment";

export default function FetchCategories({ onCategoriesFetched }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const data = await fetchEquipment();
      setCategories(data);
      onCategoriesFetched(data);
    }
    getCategories();
  }, [onCategoriesFetched]);

  return null; // This component does not render anything itself
}
