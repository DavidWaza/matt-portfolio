import React from "react";
import Link from "next/link";

interface MenuOverlayProps {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  navbarOpen,
  setNavbarOpen,
}) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-gray-900 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul className="w-full flex flex-col items-start">
        <Link
          href="/"
          className="nav-link"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="nav-link"
          onClick={() => {
            setNavbarOpen(false);
          }}
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
