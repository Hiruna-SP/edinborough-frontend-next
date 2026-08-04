"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { superGrotesk } from "@/lib/fonts";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Products", href: "/our-products" },
  { label: "Network", href: "/network" },
  { label: "Services", href: "/services" },
  { label: "Recipes", href: "/recipes" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="relative block h-14 w-36 -ml-7 -mt-2"
      aria-label="Edinborough home"
    >
      <Image
        src="/images/home/logo1.png"
        alt="Edinborough"
        fill
        priority
        sizes="144px"
        className="object-contain object-left"
      />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home-hero");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      // Once the bottom of the hero reaches the top
      // of the viewport, change navbar to red.
      setScrolled(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-[100]
        transition-all
        duration-300
        ease-in-out
        ${
          scrolled
            ? "bg-[#E2201B] shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-12">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className={`
            ${superGrotesk.className}
            hidden
            items-center
            gap-7
            lg:flex
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
                text-[13px]
                uppercase
                tracking-wide
                transition-colors
                duration-200
                ${
                  link.label === "Home"
                    ? scrolled
                      ? "text-white"
                      : "text-[#E2201B]"
                    : "text-white hover:text-white/70"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search + Menu */}
        <div className="flex items-center gap-6 text-white">

          <button
            type="button"
            aria-label="Search"
            className="transition-opacity hover:opacity-70"
          >
            <Search
              className="h-5 w-5"
              strokeWidth={2}
            />
          </button>

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen((open) => !open)
            }
            className="transition-opacity hover:opacity-70"
          >
            {mobileMenuOpen ? (
              <X
                className="h-5 w-5"
                strokeWidth={2}
              />
            ) : (
              <Menu
                className="h-5 w-5"
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className={`
            ${superGrotesk.className}
            flex
            flex-col
            gap-1
            bg-black/95
            px-6
            py-4
            lg:hidden
          `}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className={`
                py-2
                text-xs
                uppercase
                tracking-wide
                ${
                  link.label === "Home"
                    ? "text-[#E2201B]"
                    : "text-white"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}