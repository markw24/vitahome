import { fetchEquipment } from "./databaseFiles/fetchEquipment";
import EquipmentList from "./components/equipmentList";
import Navbar from "./components/Navbar";
import IntroBox from "./components/introBox";
import Footer from "./components/footer";

export default async function HomePage() {
  const equipment = await fetchEquipment();

  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <IntroBox />
        {/* <EquipmentList equipment={equipment} /> */}

        <div className="flex flex-col space-y-5 items-center p-20">
          <div className="bg-white rounded-full border-2 border-[#1F5434] px-8 py-2 inline-block group hover:bg-[#1F5434] hover:bg-opacity-75">
            <h1 className="text-[#1F5434] text-[24px] font-Montserrat group-hover:text-white">I’ve received recommendations for home accessibility device installation</h1>
          </div>
          <div className="bg-white rounded-full border-2 border-[#1F5434] px-8 py-2 inline-block group hover:bg-[#1F5434] hover:bg-opacity-75">
            <h1 className="text-[#1F5434] text-[24px] font-Montserrat group-hover:text-white">I’ve not yet consulted a professional but looking to browse options</h1>
          </div>
        </div>

        <Footer />

      </main>
    </>
  );
}
