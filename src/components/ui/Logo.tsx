import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "light" | "dark";
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = "md",
  showText = true,
  variant = "dark",
  href = "/",
}) => {
  const sizeMap = {
    sm: { img: 32, textClass: "text-base tracking-tight", subTextClass: "text-[9px]" },
    md: { img: 42, textClass: "text-lg tracking-tight", subTextClass: "text-[10px]" },
    lg: { img: 54, textClass: "text-xl tracking-tight", subTextClass: "text-xs" },
    xl: { img: 68, textClass: "text-2xl tracking-tight", subTextClass: "text-sm" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center gap-3.5 group select-none", className)}>
      {/* Clinic Logo Mark Container with subtle emerald border */}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border transition-all duration-300 flex items-center justify-center p-1.5",
          variant === "dark"
            ? "bg-white border-[#e0ece7] group-hover:border-[#10a880]/50 shadow-sm"
            : "bg-white/10 border-white/20 group-hover:border-white/40 shadow-inner"
        )}
        style={{ width: currentSize.img + 8, height: currentSize.img + 8 }}
      >
        <Image
          src="/images/physiogenix-logo.png"
          alt="Physiogenix Clinical Physiotherapy Logo"
          width={currentSize.img}
          height={currentSize.img}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={cn(
              "font-semibold tracking-wider uppercase font-sans-body transition-colors",
              currentSize.textClass,
              variant === "dark"
                ? "text-[#0d211e] group-hover:text-[#10a880]"
                : "text-white group-hover:text-[#20c997]"
            )}
          >
            PHYSIOGENIX
          </span>
          <span
            className={cn(
              "font-medium tracking-widest uppercase transition-colors",
              currentSize.subTextClass,
              variant === "dark" ? "text-[#536965]" : "text-white/70"
            )}
          >
            Dr. Faiza • F-7 Islamabad
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10a880] rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
};
