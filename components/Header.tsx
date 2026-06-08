"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-dark border-b border-white/5 bg-surface-dark/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Logo variant="landscape" showText={true} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => "submenu" in item && item.submenu && setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {"submenu" in item && item.submenu ? (
                <>
                  <button className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    {item.name}
                  </button>
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-surface-dark-elevated p-2 shadow-2xl"
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {sub.name}
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <PrimaryButton href="/contact" className="px-6 py-3 text-sm" showArrow={false}>
            Start Your Project
          </PrimaryButton>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-surface-dark/95 backdrop-blur-xl md:hidden"
          >
            <div className="container mx-auto space-y-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.name}>
                  {"submenu" in item && item.submenu ? (
                    <>
                      <button
                        className="w-full py-3 text-left text-sm font-medium text-gray-300"
                        onClick={() =>
                          setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                        }
                      >
                        {item.name}
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="space-y-1 pb-2 pl-4">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-2 text-sm text-gray-400 hover:text-white"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-sm font-medium text-gray-300 hover:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <PrimaryButton
                  href="/contact"
                  className="w-full text-center"
                  showArrow={false}
                >
                  Start Your Project
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
