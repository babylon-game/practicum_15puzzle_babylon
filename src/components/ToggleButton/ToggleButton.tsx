import { useState } from 'react';

export default function ToggleButton() {
  const [theme, setTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <label
        htmlFor="disabled-toggle"
        className="inline-flex relative items-center mb-5 cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="disabled-toggle"
          className="sr-only peer"
          checked={theme}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <span className="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">
          Theme
        </span>
      </label>
    </div>
  );
}
