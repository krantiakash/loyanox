import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LectureShowcase from "./components/LectureShowcase";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <LectureShowcase />
      <Testimonials />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}
