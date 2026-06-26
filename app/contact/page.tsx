import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
