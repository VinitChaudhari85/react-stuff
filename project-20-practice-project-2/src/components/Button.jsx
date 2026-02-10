export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 bg-stone-600 rounded hover:bg-stone-700 cursor-pointer"
    >
      {children}
    </button>
  );
}