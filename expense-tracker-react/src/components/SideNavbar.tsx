// import { RxHamburgerMenu } from 'react-icons/rx';
// import { RxCross1 } from 'react-icons/rx';

export default function SideNavbar() {
  return (
    <>
      <section
        id="side-nav-bar"
        className="z-1 fixed left-0 top-0 h-full w-[200px] overflow-x-hidden bg-gray-200 p-4 transition-[width] duration-200"
      >
        <h1 className="p-1 pb-4 font-semibold">Expense Tracker</h1>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer select-none p-1 hover:bg-gray-100 active:bg-gray-300">
            Dashboard
          </li>
          <li className="cursor-pointer select-none p-1 hover:bg-gray-100 active:bg-gray-300">
            Link 2
          </li>
          <li className="cursor-pointer select-none p-1 transition-[bg] duration-100 hover:bg-gray-100 active:bg-gray-300">
            Upload Files
          </li>
        </ul>
      </section>
    </>
  );
}
