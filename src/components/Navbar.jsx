import React, { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // toggle menu open/close
  };

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">PowerFit</h1>

        <nav>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Trainers</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Hamburger / Toggle Button */}
          <button className="hamburger" onClick={handleToggle}>
            {isOpen ? "✖" : "☰"} {/* X icon when open, ☰ when closed */}
          </button>
        </nav>
      </div>
    </header>
  );
}