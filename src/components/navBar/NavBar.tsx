import React, { useState } from "react";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import { MenuIcon, MoonIcon, SunIcon } from "./icons";
import { NavBarProps } from "./NavBar.types";

const NavBar: React.FC<NavBarProps> = ({
  activeTabUrl,
  tabs,
  buttons,
  transparent,
  darkMode,
  showDarkModeToggle,
  darkModeText,
  onDarkModeToggle,
  showLocaleSelector,
  locale,
  locales = [],
  onLocaleChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleTabClick = (url: string) => {
    if (url) {
      window.location.href = url;
    }
  };

  const handleButtonClick = (button: any) => {
    window.open(button.url, button.opensTheLinkInNewTab ? "_blank" : "_self");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-100 ease-in-out border-b px-4 md:px-12 lg:px-[200px] py-2.5 ${
        transparent
          ? "bg-transparent border-transparent"
          : darkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          src={darkMode ? logoLight : logoDark}
          alt="logo"
          className="h-8 md:h-10 cursor-pointer"
          onClick={() => (window.location.href = window.location.origin)}
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center">
            {tabs.map((tab, index) => (
              <div key={index} className="relative">
                {tab.children ? (
                  <div>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-yellow-500 ${
                        activeTabUrl === tab.url
                          ? "text-yellow-500"
                          : darkMode
                            ? "text-white"
                            : "text-gray-900"
                      }`}
                      onClick={() => {
                        setOpenDropdown(openDropdown === index ? null : index);
                      }}
                    >
                      {tab.title}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === index && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                        <div className="p-2">
                          {tab.children.map((child, childIndex) => (
                            <button
                              key={childIndex}
                              className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm transition-colors text-gray-900 dark:text-white"
                              onClick={() => {
                                handleTabClick(child.url);
                                setOpenDropdown(null);
                              }}
                            >
                              {child.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-yellow-500 ${
                      activeTabUrl === tab.url
                        ? "text-yellow-500"
                        : darkMode
                          ? "text-white"
                          : "text-gray-900"
                    }`}
                    onClick={() => handleTabClick(tab.url)}
                  >
                    {tab.title}
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Desktop Buttons */}
          <div className="flex items-center">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  button.appearance === "yellow"
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : `hover:text-yellow-500 ${
                        darkMode
                          ? "text-white hover:bg-gray-800"
                          : "text-gray-900 hover:bg-gray-100"
                      }`
                }`}
                onClick={() => handleButtonClick(button)}
              >
                {button.title}
              </button>
            ))}
          </div>
          {/* Desktop Actions */}
          <div className="flex items-center gap-3 ml-3">
            {showDarkModeToggle && (
              <div className="flex items-center gap-2">
                <button
                  className={`p-2 rounded-md transition-colors ${
                    darkMode ? "text-yellow-500" : "hover:text-yellow-800"
                  }`}
                  onClick={() =>
                    onDarkModeToggle && onDarkModeToggle(!darkMode)
                  }
                >
                  {darkMode ? (
                    <MoonIcon className="h-4 w-4" />
                  ) : (
                    <SunIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            )}
            {showLocaleSelector && (
              <div className="relative">
                <div className="flex items-center gap-3">
                  <select
                    value={locale}
                    onChange={(e) =>
                      onLocaleChange && onLocaleChange(e.target.value)
                    }
                    className={`px-3 py-1 text-sm border rounded cursor-pointer ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  >
                    {locales.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className={`p-2 ${darkMode ? "text-white" : "text-gray-900"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 lg:hidden z-50">
          <div
            className="fixed inset-0 bg-black/20 transition-opacity duration-200"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`fixed right-0 top-0 h-full w-80 p-6 transform transition-transform duration-300 ease-in-out translate-x-0 ${
              darkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-200"
            } border-l shadow-xl`}
          >
            {/* Close Button */}
            <button
              className={`absolute top-4 right-4 p-2 rounded-md ${
                darkMode
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col gap-4 mt-12">
              {/* Mobile Navigation */}
              <div className="flex flex-col gap-4">
                {tabs.map((tab, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <button
                      className={`flex items-center w-full text-left text-base font-medium px-0 py-2 transition-colors ${
                        activeTabUrl === tab.url
                          ? "text-yellow-500"
                          : darkMode
                            ? "text-white"
                            : "text-gray-900"
                      }`}
                      onClick={() => {
                        if (!tab.children) {
                          handleTabClick(tab.url);
                          setIsMenuOpen(false);
                        } else {
                          setOpenDropdown(
                            openDropdown === index ? null : index,
                          );
                        }
                      }}
                    >
                      <span className="flex-grow">{tab.title}</span>
                      {tab.children && (
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                    {tab.children && openDropdown === index && (
                      <div className="flex flex-col gap-2 pl-0 ml-4">
                        {tab.children.map((child, childIndex) => (
                          <button
                            key={childIndex}
                            className={`text-left text-sm px-0 py-1 transition-colors ${
                              darkMode
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                            onClick={() => {
                              handleTabClick(child.url);
                              setIsMenuOpen(false);
                            }}
                          >
                            {child.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`py-3 font-medium transition-colors ${
                      button.appearance === "yellow"
                        ? "bg-yellow-500 hover:bg-yellow-600 text-black px-4 rounded-md text-center"
                        : "text-left px-0 " +
                          (darkMode
                            ? "text-white hover:bg-gray-800"
                            : "text-gray-900 hover:bg-gray-100")
                    }`}
                    onClick={() => {
                      handleButtonClick(button);
                      setIsMenuOpen(false);
                    }}
                  >
                    {button.title}
                  </button>
                ))}
              </div>

              {/* Mobile Actions */}
              <div
                className={`flex flex-col gap-4 pt-4 border-t ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                {showDarkModeToggle && (
                  <div className="flex items-center justify-start gap-4">
                    <span
                      className={`text-sm font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {darkModeText || "Dark Mode"}
                    </span>
                    <button
                      className={`p-2 rounded-md transition-colors ${
                        darkMode
                          ? "bg-gray-800 text-yellow-500"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        onDarkModeToggle && onDarkModeToggle(!darkMode)
                      }
                    >
                      {darkMode ? (
                        <MoonIcon className="h-4 w-4" />
                      ) : (
                        <SunIcon className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}

                {showLocaleSelector && (
                  <div className="flex items-center justify-start gap-4">
                    <span
                      className={`text-sm font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {locale === "fr" ? "Langue" : "Language"}
                    </span>
                    <select
                      value={locale}
                      onChange={(e) =>
                        onLocaleChange && onLocaleChange(e.target.value)
                      }
                      className={`px-3 py-1 text-sm border rounded ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    >
                      {locales.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
