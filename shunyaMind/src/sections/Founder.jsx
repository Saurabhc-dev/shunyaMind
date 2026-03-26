import founderImg from "../assets/founder.png";
import logo from "../assets/logo_transparent.svg";
import leftClip from "../assets/leftclip.png";
import Tag from "../components/Tag";

function Founder() {
  return (
    <section className="py-12 md:py-24 px-4 relative overflow-hidden">
      
      {/* Background Clip Image */}
      <div className="relative h-0 overflow-x-clip pointer-events-none">
        <img
          src={leftClip}
          alt=""
          className="hidden lg:block absolute -left-56 top-0 -translate-y-1/2"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The{" "}
          <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Thinking Behind
          </span>{" "}
          Shunya Mind
        </h2>

        {/* CARD */}
        <div className="flex flex-col md:flex-row mx-auto mt-12 bg-white shadow-md rounded-xl p-6 gap-6 ">
          
          {/* LEFT IMAGE */}
          <div className="rounded-lg overflow-hidden w-full md:w-[370px] z-10 ">
            <img
              src={founderImg}
              alt="Navneesh Bansal"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex flex-col justify-between md:h-[370px]">
            
            <div className="flex flex-col gap-4">
              
              {/* Top row */}
              <div className="flex justify-between items-center w-full">
                
                <div className="px-3 py-1 bg-white border rounded-lg text-xs text-gray-700">
                  FOUNDER
                </div>

                <img src={logo} className="w-10 h-10" />
              </div>

              {/* Name */}
              <h3 className="text-[#0b3c5d] font-bold text-3xl md:text-5xl">
                Navneesh Bansal
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                <Tag text="Educator" />
                <Tag text="Cognitive Systems Architect" />
                <Tag text="Cognition & Mindfulness Practitioner" />
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                As a teacher, I saw tens of thousands of brilliant students struggle — not because they lacked intelligence,
                but because they carried friction inside the mind. This system exists to fix the real problem — not the symptoms,
                not the chapters, but the mind at the point where learning breaks down.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 md:mt-0">
              <a
                href="#"
                className="block text-center md:inline-block bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Explore the Vision
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;