import { create } from "zustand";
import { Project } from "./types";
import { filters, projects } from "./data";
import { FILTER_ID_ALL } from "./data";

export interface PortfolioState {
  projects: Array<Project & { className?: string; isVisible?: boolean }>;
  filters: Array<string | { id: string; label: string }>;
  filter?: string;
  updateFilter: (filterId: string) => void;
}

export type PortfolioProject = PortfolioState["projects"][number];

export const useStore = create<PortfolioState>((set) => ({
  projects: projects.map((project) => ({ ...project, isVisible: true })),
  filters,
  filter: FILTER_ID_ALL,
  updateFilter: (filterId: string) => {
    set((state) => ({
      filter: filterId,
      projects: state.projects.map((project) => ({
        ...project,
        isVisible:
          filterId === FILTER_ID_ALL || project.tags.includes(filterId),
      })),
    }));
  },
}));
