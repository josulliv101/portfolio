"use client";

import Card from "./Card";
import { useStore } from "./store";

export default function CardList() {
  const { projects, filter, filters } = useStore();
  console.log("projects", projects, filter, filters);
  const count = projects.filter((item) => item.isVisible === true).length;
  return (
    <div className="w-full max-w-[80%] flex flex-col gap-2">
      <p className="text-gray-400">
        Showing: {count} of {projects.length}
      </p>
      {projects.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
