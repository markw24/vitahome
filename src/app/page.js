import { fetchEquipment } from "./fetchEquipment";
import EquipmentList from "./components/equipmentList";
import Navbar from "./components/navbar";

export default async function HomePage() {
  const equipment = await fetchEquipment();

  return (
    <>
      <main main className="bg-white min-h-screen"> 
        <Navbar />

        <EquipmentList equipment={equipment} />
      </main>
    </>

  );
}
