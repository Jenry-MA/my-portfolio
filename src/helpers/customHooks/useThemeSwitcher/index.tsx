import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const useThemeSwitcher = (): [activeTheme: string, setTheme: Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, activeTheme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
