export default function Header() {
  return (
    <header className="flex flex-wrap shadow-md sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-500 text-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <a
          className="flex-none text-xl dark:text-white"
          href="https://github.com/josulliv101"
          target="_blank"
        >
          Joe Sullivan
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5"></div>
      </nav>
    </header>
  );
}
