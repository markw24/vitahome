import { fetchEquipment } from "./databaseFiles/fetchEquipment";
import EquipmentList from "./components/equipmentList";

export default async function HomePage() {
  const equipment = await fetchEquipment();

  return <EquipmentList equipment={equipment} />;
}
