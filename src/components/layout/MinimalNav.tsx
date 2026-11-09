"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";

export const MinimalNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Center navigation requested: Home, About, Services, Conditions, Contact
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-dr-faiza" },
    { label: "Services", href: "/services" },
    { label: "Conditions", href: "/assessment" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "nav-minimal-scrolled py-3.5"
            : "bg-[#FCFBF8]/85 backdrop-blur-md py-4 sm:py-5 border-b border-[#E8E7E0]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Left: Physiogenix Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative overflow-hidden rounded border border-[#E8E7E0] bg-white p-1 transition-colors group-hover:border-[#193B2C]/40">
                <Image
                  src="/images/physiogenix-logo.png"
                  alt="Physiogenix Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans-editorial text-sm sm:text-base font-semibold tracking-editorial-widest uppercase text-[#252A25] transition-colors group-hover:text-[#193B2C]">
                  PHYSIOGENIX
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-editorial-widest uppercase text-[#7F8B7E]">
                  Dr. Faiza • F-7 Markaz
                </span>
              </div>
            </Link>

            {/* Center: Home, About, Services, Conditions, Contact */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-xs uppercase tracking-editorial-widest transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-[#193B2C] font-semibold border-b border-[#193B2C]"
                        : "text-[#555E55] hover:text-[#252A25] font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Book Appointment */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="hidden sm:inline-flex items-center px-4 py-2 rounded bg-[#193B2C] hover:bg-[#122B20] text-[#FCFBF8] text-[11px] font-medium uppercase tracking-editorial-wide transition-all duration-200 cursor-pointer shadow-sm hover:shadow"
              >
                Book Appointment
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#252A25] hover:text-[#193B2C] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full min-h-[calc(100vh-65px)] bg-[#FCFBF8] border-b border-[#E8E7E0] px-6 py-8 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-6 text-left">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#7F8B7E] block pb-2 border-b border-[#E8E7E0]">
                Navigation // Index
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-editorial transition-colors ${
                        isActive
                          ? "text-[#193B2C] font-normal"
                          : "text-[#252A25] hover:text-[#193B2C]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-[#E8E7E0] space-y-4 text-left">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-3.5 bg-[#193B2C] text-[#FCFBF8] rounded text-xs font-medium uppercase tracking-editorial-widest text-center"
              >
                Book Appointment
              </button>
              <div className="text-[11px] text-[#7F8B7E] text-center">
                Chaudhary Plaza, Sector F-7 Markaz, Islamabad
              </div>
            </div>
          </div>
        )}
      </header>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
};
