function Card({ item, setActiveImg  ,smImg }) {
  return (
    <div
      onMouseEnter={() => setActiveImg(item.img)}
      onClick={() => setActiveImg(item.img)}
      className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
    >
      <img alt="Memory Slips" src={item.smImg}  className="w-12 h-12 mb-3 object-contain"></img>  
      <h4 className="font-semibold text-bold text-lg mb-2">{item.title}</h4>
      <p className="text-sm text-gray-600">{item.desc}</p>
    </div>
  );
}

export default Card;