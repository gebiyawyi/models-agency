import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ModelsSection from "../../components/ModelsSection/ModelsSection";
import Gallery from "../../components/Gallery/Gallery";
import AboutSection from "../../components/AboutSection/AboutSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ModelsSection />
        <Gallery />
        <AboutSection />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;
