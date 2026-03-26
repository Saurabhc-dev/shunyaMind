function Tag({ text }) {
  return (
    <div className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm text-gray-700">
      <span className="text-green-500">✔</span>
      {text}
    </div>
  );
}

export default Tag;