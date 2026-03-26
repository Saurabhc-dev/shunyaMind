function MarqueeCard({ item }) {
  return (
    <div className="min-w-[300px] bg-white p-5 rounded-xl shadow border flex gap-3 items-start">
      <img src={item.icon} className="w-10 h-10" />

      <div>
        <h3 className="font-semibold text-sm">{item.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
      </div>
    </div>
  );
}

export default MarqueeCard;