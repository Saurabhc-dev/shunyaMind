import { useState } from "react";
import brain1 from "../assets/brain1.png";
import brain2 from "../assets/brain2.png";
import brain3 from "../assets/brain3.png";
import brain4 from "../assets/brain4.png";
import smImg1 from "../assets/smImg1.png"
import Card from "../components/Card";

const data = [
  {
    title: "Distraction",
    desc: "High cognitive load shrinks available attention, making it difficult for students to stay focused even with strong intentions.",
    img: brain1,
    smImg: smImg1
  },
  {
    title: "Exam Anxiety",
    desc: "Stress narrows cognitive bandwidth, reducing clarity and causing even well-prepared students to underperform.",
    img: brain2,
    smImg: smImg1
  },
  {
    title: "Memory Slips",
    desc: "When encoding is weak, retention drops. Students forget lessons despite revising, because recall readiness is low.",
    img: brain3,
        smImg: smImg1

  },
  {
    title: "Inconsistency",
    desc: "Fluctuating cognitive rhythms disrupt output, making performance swing even when motivation and effort remain strong.",
    img: brain4,
        smImg: smImg1

  },
];

function Friction() {
  const [activeImg, setActiveImg] = useState(brain1);
  const [index, setIndex] = useState(0); // ✅ FIX: missing state

  return (
    <section className="py-10 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            What <span className="text-orange-500">Stops</span>{" "}
            <span className="text-blue-500">Brilliant Minds</span> from Performing?
          </h2>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">
          
          {/* LEFT */}
          <div className="space-y-6">
            {data.slice(0, 2).map((item, i) => (
              <Card key={i} item={item} setActiveImg={setActiveImg} />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src={activeImg}
              alt="brain"
              className="w-[280px] lg:w-[350px] transition-all duration-300"
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {data.slice(2).map((item, i) => (
              <Card key={i} item={item} setActiveImg={setActiveImg} />
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden text-center">
          
          {/* IMAGE */}
          <img
            src={data[index].img}
            alt="brain"
            className="w-[300px] mx-auto mb-6 transition-all duration-300"
          />

          {/* CARD */}
          <div className="bg-[#f5eee6] p-5 rounded-xl shadow text-left md:text-center">
            <h3 className="font-semibold text-lg">
              {data[index].title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {data[index].desc}
            </p>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {data.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  i === index ? "bg-orange-500 scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* SWIPE */}
          <div
            className="mt-4"
            onTouchStart={(e) => (window.startX = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const endX = e.changedTouches[0].clientX;

              if (window.startX - endX > 50) {
                setIndex((prev) => (prev + 1) % data.length);
              } else if (endX - window.startX > 50) {
                setIndex((prev) =>
                  prev === 0 ? data.length - 1 : prev - 1
                );
              }
            }}
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}

export default Friction;