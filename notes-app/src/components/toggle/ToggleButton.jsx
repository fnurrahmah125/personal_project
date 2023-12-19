import { useState, useEffect } from "react";
import $ from "jquery";

import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode")) || false
  );

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));

    if (darkMode) {
      $("html").addClass("dark");
      $("body").addClass("dark-mode");
    } else {
      $("html").removeClass("dark");
      $("body").removeClass("dark-mode");
    }
  });

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <button
      className="h-10 w-10 flex-none p-2 rounded-full ring-1 ring-slate-200 hover:cursor-pointer hover:ring-slate-300 dark:bg-slate-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={handleDarkMode}
    >
      {!darkMode ? (
        <img src={sun} alt="sun icon" width={30} />
      ) : (
        <img src={moon} alt="sun icon" width={30} />
      )}
    </button>
  );
}

export default ToggleButton;
