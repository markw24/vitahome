import { fetchEquipment } from "./databaseFiles/fetchEquipment";
import EquipmentList from "./components/equipmentList";
import Navbar from "./components/Navbar";

export default async function HomePage() {
  const equipment = await fetchEquipment();

  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        
        <EquipmentList equipment={equipment} />
      </main>
    </>
  );
}
