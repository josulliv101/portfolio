import { MailIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-wrap shadow-md z-50 w-full bg-blue-500 text-white text-sm py-4 dark:bg-gray-800">
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
        <a
          className="flex items-center gap-2"
          href="mailto:josulliv101@gmail.com"
        >
          josulliv101@gmail.com
        </a>
      </nav>
    </header>
  );
}
