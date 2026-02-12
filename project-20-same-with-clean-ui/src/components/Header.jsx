export default function Header({ heading }) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
        {heading}
      </h1>
      <p className="text-stone-400 text-sm">
        Track shared expenses and settle debts easily
      </p>
    </header>
  );
}
