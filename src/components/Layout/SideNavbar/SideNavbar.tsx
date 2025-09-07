import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <>
      <section
        id="side-nav-bar"
        className="h-full min-w-[200px] overflow-x-hidden bg-gray-200 p-4"
      >
        <h1 className="pb-4 font-semibold text-xl">Expense Tracker</h1>
        <ul className="flex flex-col gap-2">
          <Link to="/Dashboard">
            <li className="cursor-pointer p-1 transition-[background-color] duration-150 select-none hover:bg-gray-100 active:bg-gray-300">
              Dashboard
            </li>
          </Link>

          <li className="cursor-pointer p-1 transition-[background-color] duration-150 select-none hover:bg-gray-100 active:bg-gray-300">
            Link 2
          </li>

          <Link to="/Upload">
            <li className="cursor-pointer p-1 transition-[background-color] duration-150 select-none hover:bg-gray-100 active:bg-gray-300">
              Upload
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
}
