import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Friction from "../sections/Friction";
import System from "../sections/System";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Application from "../sections/Application";
import Marquee from "../sections/Marquee";
import Founder from "../sections/Founder";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Friction />
      <System />
      <Application />
      <Founder />
      <Marquee />
      <Contact />
      <Footer />
    </>
  );
}
