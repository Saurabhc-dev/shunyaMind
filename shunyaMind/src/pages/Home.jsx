import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Friction from "../sections/Friction";
import System from "../sections/System";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Friction />
      <System />
      <Contact />
      <Footer />
    </>
  );
}
