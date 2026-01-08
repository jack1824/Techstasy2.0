import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { use, useRef } from "react";
import Navbar from "./components/Navbar";
import NextSection from "./components/NextSection";
import Hero from "./components/Hero";

function App() {
  const navbar = useRef(null);

  return (
    <>
      <Navbar />
      <Hero />
      <NextSection />
    </>
  );
}

export default App;
