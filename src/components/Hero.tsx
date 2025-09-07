// need to define type for props passed to Hero
type HeroProps = {
  hide: () => void;
};

export default function Hero({ hide }: HeroProps) {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-sky-50">
      <h1 className="text-5xl p-4">Offline Expense Tracker</h1>
      <button
        type="button"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-pointer my-4 outline-0"
        onClick={hide}
      >
        Get Started
      </button>
    </div>
  );
}
