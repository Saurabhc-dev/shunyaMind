import system1 from "../assets/marquee1.png"; 
import system2 from "../assets/marquee2.png";
import system3 from "../assets/marquee3.png";
import system4 from "../assets/marquee4.png";
import Card from "../components/MarqueeCard";

const systems = [
  {
    title: "Learning Friction Reduction System™",
    desc: "Cognitive friction diagnostics and calibration system.",
    icon: system1,
  },
  {
    title: "Alpha Learner Loop™",
    desc: "Cognitive integration feedback loop for sustained momentum.",
    icon: system2,
  },
  {
    title: "Alpha Learner OS™",
    desc: "Unified operating system for learner cognition.",
    icon: system3,
  },
  {
    title: "Unified Learner Architecture™",
    desc: "Architecture unifying identity and integration.",
    icon: system4,
  },
  {
    title: "Alpha Learner Activation Protocol™",
    desc: "Proprietary cognitive activation protocol.",
    icon: system2,
  },
];

function Marquee() {
  const row1 = [...systems, ...systems];
  const row2 = [...systems, ...systems];

  return (
    <section className="py-20 bg-[#f7fbff] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Our <span className="text-blue-500">Proprietary</span>{" "}
          <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Cognitive</span> Systems
        </h2>
        <p className="text-gray-600 mt-2">
          These systems form the backbone of cognition-first learning.
        </p>
      </div>

      {/* 🔥 ROW 1 (→ direction) */}
      <div className="overflow-hidden group">
        <div className="hidden md:block absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden md:block absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-6 animate-scroll-right pause">
          {row1.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* 🔥 ROW 2 (← direction) */}
      <div className="overflow-hidden mt-6 group">
        <div className="flex gap-6 animate-scroll-left pause">
          {row2.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Footer text */}
      <div className="max-w-6xl m-auto px-4 my-8">
        <h5 className="text-center text-[#005999] text-[16px] mb-2 font-semibold">
          Each system operates independently — and integrates into a unified
          Cognition OS™
        </h5>

        <p className="section_subtitle mx-auto text-center  text-[10px] w-full md:w-[500px]">
          Shunya Mind is a Cognition First™ learning ecosystem combining
          neuroscience, cognitive science, and educational design. Shunya Mind
          and associated systems are proprietary trademarks owned by Navneesh
          Bansal, licensed exclusively for use under the Shunya Mind initiative.
        </p>
      </div>
    </section>
  );
}

export default Marquee;
