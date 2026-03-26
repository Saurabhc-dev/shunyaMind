import hoverBg from "../assets/hover_bg.png";

function ApplicationCard({ item }) {
  return (
    <div className="group min-w-[300px] md:min-w-[350px] rounded-2xl p-6 border bg-white shadow relative overflow-hidden transition-all duration-500 easy-in-out">
      <div
        className="
    absolute inset-0 
    bg-cover bg-center 
    rounded-2xl
    opacity-100 
    lg:opacity-0 
    lg:group-hover:opacity-100 
    transition duration-300
  "
        style={{ backgroundImage: `url(${hoverBg})` }}
      />
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <img src={item.icon} className="w-10 h-10 mb-4" />

        {/* Title */}
        <h3 className="font-bold text-[18px] text-[#0b3c5d] mb-4">
          {item.title}
        </h3>

        {/* Points */}
        <ul className="space-y-2 text-sm mb-4">
          {item.points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span>•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <hr />

        {/* Highlight */}
        <div className="mt-4 space-y-2">
          {item.highlight.map((h, i) => (
            <div key={i} className="flex gap-2 text-sm">
              <span className="text-green-500">✔</span>
              {h}
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className={`mt-auto w-full py-2 rounded-md text-sm mt-5 ${
            item.primary
              ? "bg-orange-500 text-white"
              : "border border-blue-400 text-blue-600"
          }`}
        >
          {item.button}
        </button>

        <p className="text-xs text-gray-400 mt-2 text-center">
          Early access to users
        </p>
      </div>
    </div>
  );
}

export default ApplicationCard;
