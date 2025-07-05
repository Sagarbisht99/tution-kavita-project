
import WhyChooseAcademy from "./components/WhyChooseAcademy";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";
import Home from "./components/Home";


export default function page() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        {/* Hero Section */}
        <Home />
        <WhyChooseAcademy />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
}
