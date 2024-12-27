import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-[#FFCB05] rounded-md"></div>
        <h1 className="text-xl font-bold text-[#252525]">Adhitya</h1>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex space-x-6 text-[#252525]">
        <a href="#home" className="hover:text-gray-600">
          Home
        </a>
        <a href="#about" className="hover:text-gray-600">
          About
        </a>
        <a href="#projects" className="hover:text-gray-600">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-600">
          Contact
        </a>
      </nav>

      {/* Dropdown toggle button for smaller screens */}
      <div className="md:hidden relative">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none flex items-center bg-[#C4E7E1] text-[#252525] px-4 py-2 border-2 border-black rounded-lg hover:opacity-90"
        >
          <span className="font-bold">Scroll to</span>
          <svg
            className={`w-5 h-5 ml-2 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
            <a
              href="#home"
              className="block px-4 py-2 text-sm text-[#252525] hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm text-[#252525] hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-sm text-[#252525] hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm text-[#252525] hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </div>

      <a
        href="#contact"
        className="btn bg-[#FFCB05] text-[#252525] font-bold px-4 py-2 border-2 border-black rounded-lg hover:opacity-90"
      >
        Hire Me
      </a>
    </header>
  );
}
