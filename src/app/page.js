import { fetchEquipment } from "./databaseFiles/fetchEquipment";
import SequentialEquipmentDisplay from "./components/sequentialEquipment";
import blownupView from "./components/blownupView";
import Navbar from "./components/Navbar";

export default async function HomePage() {
  const equipment = await fetchEquipment();

  return (
    <div>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div>
          <SequentialEquipmentDisplay equipment={equipment} />
          <blownupView />
        </div>
      </main>
    </div>
  );
}
