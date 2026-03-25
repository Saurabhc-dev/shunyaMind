function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-1 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default Input;