"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ToggleThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="transition-all duration-100 text-white px-0 rounded-sm"
      title="toggle light/dark mode"
    >
      {/* Handle hiding of appropriate icon in global.css to avoid hydration warnings */}
      <Sun className="theme-light-icon h-6 w-6" />
      <Moon className="theme-dark-icon h-6 w-6" />
    </button>
  );
};

export default ToggleThemeButton;
