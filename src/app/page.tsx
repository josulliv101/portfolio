import Image from "next/image";
import { filters, projects } from "./data";
import Badge from "./Badge";
import Card from "./Card";
import CardList from "./CardList";
import Filter from "./Filter";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start p-4 py-12 md:p-12 lg:p-24 gap-12">
      <h2 className="text-5xl font-light">Portfolio</h2>
      <a
        href="https://github.com/josulliv101/whatsawesome"
        target="_blank"
        className="bg-blue-500 hover:bg-blue-500/90 text-white drop-shadow-md font-normal py-2 px-4 rounded inline-flex items-center gap-4"
      >
        <svg
          className="h-6 w-6 fill-white"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="GitHubIcon"
        >
          <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
        </svg>
        <span>View Code Sample</span>
      </a>
      <p className="font-normal text-2xl w-full md:w-2/3 text-gray-500 text-center leading-relaxed text-balance">
        Please find a sampling of my work below. All products/projects listed
        are actively being used (except for the demo site at the end) - not all
        are freely accessible to the public.
      </p>
      <Filter />
      <CardList />
    </main>
  );
}
