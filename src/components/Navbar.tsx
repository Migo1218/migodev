"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10,15,31,0)", "rgba(10,15,31,0.8)"]
  );
  const blur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(10px)"]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <motion.nav
      style={{ background: bg, backdropFilter: blur }}
      className="fixed top-0 left-0 w-full z-50 text-light px-4 md:px-24 transition-none"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4 md:gap-0">
        <div className="flex justify-between items-center px-2 md:px-0">
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight hover:cursor-pointer">
              <span className="text-accent">migo</span>dev
            </h1>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 font-semibold text-sm md:text-base">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={`relative transition-colors ${
                    isActive ? "text-accent text-base" : "hover:text-accent  text-base"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full"></span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
