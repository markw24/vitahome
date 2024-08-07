// components/FetchCategories.js
import { useEffect, useState } from "react";
import { fetchEquipmentCategories } from "./fetchEquipment";

export default function FetchCategories({ onCategoriesFetched }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const data = await fetchEquipmentCategories();
      setCategories(data);
      onCategoriesFetched(data);
    }
    getCategories();
  }, [onCategoriesFetched]);

  return null; // This component does not render anything itself
}
