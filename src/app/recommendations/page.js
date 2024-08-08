'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Checklist from "../components/Checklist";

export default function Recommendations() {
  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col py-10 px-20 items-center">
          <Checklist /> 
        </div>
        <Footer />
      </main>
    </>
  );
}
