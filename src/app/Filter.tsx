"use client";

import Badge from "./Badge";
import { useStore } from "./store";

export default function Filter() {
  const { updateFilter, filters, filter: activeFilter } = useStore();
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap text-balance">
      {filters.map((filter) => {
        const id = typeof filter === "string" ? filter : filter.id;
        const label = typeof filter === "string" ? filter : filter.label;
        return (
          <Badge
            key={id}
            aria-pressed={id === activeFilter ? true : undefined}
            onClick={() => updateFilter(id)}
          >
            {label}
          </Badge>
        );
      })}
    </div>
  );
}
