import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import {AboutSection}  from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import Footer from "./component/Footer";
import AchievemantSection from "./component/AchievemantSection";
import ContactUs from "./component/ContactUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievemantSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactUs/>
      </div>
      <Footer/>
    </main>
  );
}
