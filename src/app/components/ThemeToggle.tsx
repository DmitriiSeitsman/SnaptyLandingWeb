"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type Labels = {
  dark: string;
  light: string;
  toggle: string;
};

const defaultLabels: Labels = {
  dark: "Dark",
  light: "Light",
  toggle: "Toggle theme",
};

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("snapty-theme", theme);
}

type ThemeToggleProps = {
  labels?: Partial<Labels>;
};

export default function ThemeToggle({ labels: labelsProp }: ThemeToggleProps) {
  const labels = { ...defaultLabels, ...labelsProp };
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("snapty-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme: Theme = prefersDark ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const onToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button type="button" className="theme-toggle" onClick={onToggle} aria-label={labels.toggle}>
      <span className="theme-toggle-icon">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span>{theme === "dark" ? labels.dark : labels.light}</span>
    </button>
  );
}
