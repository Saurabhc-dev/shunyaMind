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

  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">
      Our <span className="text-blue-500">Proprietary</span>{" "}
      <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
        Cognitive
      </span>{" "}
      Systems
    </h2>
    <p className="text-gray-600 mt-2">
      These systems form the backbone of cognition-first learning.
    </p>
  </div>

  {/* ROW 1 */}
  <div className="overflow-hidden group relative">
    <div className="hidden md:block absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
    <div className="hidden md:block absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

    <div className="flex gap-6 animate-scroll-right pause will-change-transform">
      {row1.map((item, i) => (
        <Card key={item.title + i} item={item} />
      ))}
    </div>
  </div>

  {/* ROW 2 */}
  <div className="overflow-hidden mt-6 group relative">
    <div className="flex gap-6 animate-scroll-left pause will-change-transform">
      {row2.map((item, i) => (
        <Card key={item.title + i} item={item} />
      ))}
    </div>
  </div>

</section>
  );
}

export default Marquee;
