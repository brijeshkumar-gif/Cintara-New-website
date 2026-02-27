"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Platform", href: "#platform", active: true },
  { label: "Use Cases", href: "#use-cases", active: false },
  { label: "How It Works", href: "#how-it-works", active: false },
  { label: "About", href: "#about", active: false },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Platform");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-root">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="header-logo">
          <Image
            src="/logo.png"
            alt="CINTARA Logo"
            width={40}
            height={40}
            className="logo-img"
            priority
          />
          <span className="logo-text">CINTARA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${activeNav === item.label ? "nav-link--active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <Link href="#contact" className="btn-contact">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`mobile-nav-link ${activeNav === item.label ? "mobile-nav-link--active" : ""}`}
              onClick={() => {
                setActiveNav(item.label);
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-contact mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
