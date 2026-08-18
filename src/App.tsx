import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Concierge from "./components/Concierge";
import Footer from "./components/Footer";

export default function App() {
  function scrollToForm() {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <Navbar onRequestConsultation={scrollToForm} />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Concierge />
      </main>
      <Footer />
    </div>
  );
}
