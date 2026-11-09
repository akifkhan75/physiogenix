"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, ChevronDown, MessageSquare, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { BookingModal } from "@/components/ui/BookingModal";
import { clinicData } from "@/data/clinicData";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Dr. Faiza", href: "/about-dr-faiza" },
    { name: "About Clinic", href: "/about-physiogenix" },
    { name: "Screener", href: "/assessment" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "glass-nav-scrolled py-3" : "bg-[#fbfdfc]/90 backdrop-blur-md py-4 border-b border-[#e2ede8]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors",
                          isActive
                            ? "text-[#10a880] bg-[#e6f6f1]/60"
                            : "text-[#2e4743] hover:text-[#10a880] hover:bg-[#f3f8f5]"
                        )}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="p-3 bg-white rounded-2xl border border-[#dbece4] shadow-xl space-y-1">
                            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase text-[#7a918d] tracking-wider border-b border-[#eef5f2] mb-1">
                              Clinical Specializations
                            </div>
                            {clinicData.services.slice(0, 6).map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="block px-3 py-2 rounded-xl text-xs text-[#2e4743] hover:text-[#0c7a5d] hover:bg-[#f3f8f5] transition-colors"
                              >
                                <div className="font-semibold">{service.title}</div>
                                <div className="text-[10px] text-[#6d847f] truncate">
                                  {service.shortDescription}
                                </div>
                              </Link>
                            ))}
                            <div className="pt-1.5 border-t border-[#eef5f2]">
                              <Link
                                href="/services"
                                className="block px-3 py-1 text-xs font-semibold text-[#10a880] hover:underline"
                              >
                                View All 8 Clinical Services →
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#10a880] bg-[#e6f6f1]/60"
                        : "text-[#2e4743] hover:text-[#10a880] hover:bg-[#f3f8f5]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Verified Phone link */}
              <a
                href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-[#2e4743] hover:text-[#10a880] hover:bg-[#f3f8f5] transition-colors"
                title="Call Physiogenix Clinic Islamabad"
              >
                <Phone className="w-3.5 h-3.5 text-[#10a880]" />
                <span>{clinicData.contact.primaryPhone}</span>
              </a>

              {/* Book Assessment CTA */}
              <button
                onClick={() => setBookingModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#10a880] hover:bg-[#0c8263] text-white text-xs font-semibold tracking-wide shadow-sm shadow-[#10a880]/20 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Assessment</span>
              </button>
            </div>

            {/* Mobile Menu & CTA trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-3 py-2 rounded-xl bg-[#10a880] text-white text-xs font-semibold"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#2e4743] hover:bg-[#f3f8f5]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-[#e2ede8] animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#10a880] bg-[#e6f6f1]"
                      : "text-[#2e4743] hover:bg-[#f5faf8]"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-[#eef5f2] space-y-2">
                <a
                  href={clinicData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry (+92 330 5122052)</span>
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6d847f] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#10a880]" />
                  <span>2nd Floor, Chaudhary Plaza, F-7 Markaz, Islamabad</span>
                </div>
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

