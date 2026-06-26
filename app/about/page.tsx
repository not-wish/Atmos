import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AboutUs from "@/components/sections/AboutUs";

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <AboutUs />
      <Footer />
    </main>
  );
}
