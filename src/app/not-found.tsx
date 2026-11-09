import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Home, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#fafcfb]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0b8061] text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>Navigation Advisory</span>
        </div>

        <h1 className="editorial-serif text-5xl sm:text-6xl text-[#0e211e]">
          404 <br />
          <span className="text-2xl sm:text-3xl font-sans-body font-light text-[#4e6662] block mt-2">
            Page Not Found in Clinical Directory
          </span>
        </h1>

        <p className="text-sm text-[#5a7570] font-light leading-relaxed max-w-md mx-auto">
          The link you navigated to may have moved or been updated. You can return to our homepage, explore our 8 physical therapy departments, or schedule a consultation.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0e211e] hover:bg-[#10a880] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#e6f6f1] hover:bg-[#d2eae0] text-[#0b8061] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#c3e7da]"
          >
            <span>Explore Treatments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#f2f7f4] text-[#0e211e] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#dbe7e2]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#10a880]" />
            <span>Book Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
