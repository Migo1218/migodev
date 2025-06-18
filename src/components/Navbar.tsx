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
      className="fixed top-0 left-0 w-full z-50 text-light md:px-24 transition-none"
    >
      <div className="flex items-center justify-between px-16 py-4">
        <Link href={"/"}>
          <h1 className="md:text-2xl text-l font-bold tracking-tight hover:cursor-pointer">
            <span className="text-accent">migo</span>dev
          </h1>
        </Link>
        <div className="space-x-6 font-semibold flex items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={`relative transition-colors ${
                    isActive ? "text-accent" : "hover:text-accent"
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
