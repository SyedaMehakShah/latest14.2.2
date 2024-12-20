"use client";
import { useState } from "react";
import Link from "next/link";

import "../styles/navbar.css"; 


const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo">
        MS
      </Link>

      {/* Links for Desktop */}
      <div className="navLinks">
        <Link href="/" className="navLink">
          Home
        </Link>
        <Link href="/about" className="navLink">
          About
        </Link>
        <Link href="/contact" className="navLink">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="menuBtn" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Links for Mobile */}
      <div className={`mobileMenu ${menuOpen ? "show" : ""}`}>
        <Link href="/" className="navLink" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/about" className="navLink" onClick={toggleMenu}>
          About
        </Link>
        <Link href="/projects" className="navLink" onClick={toggleMenu}>
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
