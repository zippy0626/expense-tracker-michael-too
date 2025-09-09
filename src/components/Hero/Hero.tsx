import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-sky-50">
      <h1 className="p-4 text-5xl">Offline Expense Tracker</h1>
      <button
        type="button"
        className="my-4 cursor-pointer rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow outline-0 hover:bg-gray-100"
      >
        <Link to="/dashboard">
          Get Started
        </Link>
      </button>
    </div>
  );
}
