import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";

//  Lazy loaded sections
const Friction = lazy(() => import("../sections/Friction"));
const System = lazy(() => import("../sections/System"));
const Application = lazy(() => import("../sections/Application"));
const Founder = lazy(() => import("../sections/Founder"));
const Marquee = lazy(() => import("../sections/Marquee"));
const Contact = lazy(() => import("../sections/Contact"));
const Footer = lazy(() => import("../sections/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Friction />
        <System />
        <Application />
        <Founder />
        <Marquee />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}