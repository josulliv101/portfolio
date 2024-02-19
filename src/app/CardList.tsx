"use client";

import Card from "./Card";
import { FILTER_ID_ALL } from "./data";
import { useStore } from "./store";

export default function CardList() {
  const { projects, filter, filters } = useStore();
  const count = projects.filter((item) => item.isVisible === true).length;
  return (
    <div className="w-full xl:max-w-[80%] flex flex-col gap-2">
      <p className="text-gray-400">
        showing {count} of {projects.length}
        {filter !== FILTER_ID_ALL ? ` / ${filter}` : ""}
      </p>
      <div className="flex gap-8 items-start flex-col">
        {projects.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
