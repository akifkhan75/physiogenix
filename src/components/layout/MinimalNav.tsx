"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const MinimalNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Dr. Faiza", href: "/about-dr-faiza" },
    { label: "Approach", href: "/about-physiogenix" },
    { label: "Screener", href: "/assessment" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled ? "nav-minimal-scrolled py-3.5" : "bg-[#f9faf8]/80 backdrop-blur-md py-5 border-b border-[#e0e6e1]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0f5948]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 relative overflow-hidden rounded-md border border-[#0f5948]/20 bg-white p-1 transition-all duration-300 group-hover:border-[#0f5948]/60">
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
                <span className="font-sans-editorial text-sm sm:text-base font-semibold tracking-editorial-widest uppercase text-[#0d1a17] transition-colors group-hover:text-[#0f5948]">
                  PHYSIOGENIX
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-editorial-widest uppercase text-[#758c87]">
                  Clinical Physical Therapy • F-7 Islamabad
                </span>
              </div>
            </Link>

            {/* Curated Links Center (Desktop) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-xs font-medium uppercase tracking-editorial-widest transition-colors duration-200 ${
                      isActive
                        ? "text-[#0f5948] font-semibold"
                        : "text-[#475c57] hover:text-[#0d1a17]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-4">
              {/* Direct Appointment CTA */}
              <button
                onClick={() => setBookingModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0f5948] hover:bg-[#0b4336] text-[#f9faf8] text-[11px] font-semibold uppercase tracking-editorial-wide transition-all duration-200 cursor-pointer"
              >
                <span>Book Assessment</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#0d1a17] hover:text-[#0f5948] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Fullscreen Mobile Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-full min-h-[calc(100vh-65px)] bg-[#f9faf8] border-b border-[#e0e6e1] px-6 py-10 flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-6 text-left">
              <span className="text-[10px] uppercase tracking-editorial-widest text-[#758c87] block pb-2 border-b border-[#e0e6e1]">
                Index // Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-editorial text-3xl text-[#0d1a17] hover:text-[#0f5948] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="space-y-4 pt-8 border-t border-[#e0e6e1] text-left">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingModalOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-md bg-[#0f5948] text-[#f9faf8] text-xs font-semibold uppercase tracking-editorial-wide text-center"
              >
                Request Clinical Assessment
              </button>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="p-3 rounded-md border border-[#e0e6e1] text-center text-[#475c57] hover:text-[#0d1a17]"
                >
                  Call Clinic
                </a>
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-md bg-[#edf5f2] text-center text-[#0f5948] font-semibold"
                >
                  WhatsApp
                </a>
              </div>

              <div className="text-[11px] text-[#758c87] pt-2">
                2nd Floor, Chaudhary Plaza, Sector F-7 Markaz, Islamabad
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};
