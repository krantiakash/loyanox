import About from "./components/About";
import Contact from "./components/Contact";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LectureShowcase from "./components/LectureShowcase";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
// import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Curriculum />
      {/* <Portfolio /> */}
      <LectureShowcase />
      {/* <Testimonials /> */}
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}
