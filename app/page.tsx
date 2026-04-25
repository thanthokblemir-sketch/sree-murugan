import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import AdvanceOrders from "@/components/AdvanceOrders";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <div className="bg-white">
        <SectionDivider />
      </div>
      <Menu />
      <Location />
      <AdvanceOrders />
      <Footer />
    </main>
  );
}
