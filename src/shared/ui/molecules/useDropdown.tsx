import { useState, useRef, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";

export const useDropdown = (menuItems: { label: string; link: string }[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const DropdownMenu = (): ReactNode =>
    isOpen && (
      <div
        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-50"
        ref={dropdownRef}
      >
        <ul className="py-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

  return { isOpen, toggleDropdown, DropdownMenu };
};
