"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { NAV_ITEMS } from "@/lib/constants";
import type { NavSubItem } from "@/lib/services-structure";
import { cn } from "@/lib/utils";

function hasSubmenu(
  item: (typeof NAV_ITEMS)[number]
): item is (typeof NAV_ITEMS)[number] & { submenu: readonly NavSubItem[] } {
  return "submenu" in item && Array.isArray(item.submenu);
}

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
              onMouseEnter={() => hasSubmenu(item) && setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              {hasSubmenu(item) ? (
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
                        className="absolute top-full left-1/2 mt-3 w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-surface-dark-elevated p-2 shadow-2xl"
                      >
                        {item.submenu.map((sub) => (
                          <div key={sub.name}>
                            <Link
                              href={sub.href}
                              className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {sub.name}
                              <ArrowRight className="h-3.5 w-3.5 opacity-40" />
                            </Link>
                            {sub.children && (
                              <div className="mb-1 ml-3 border-l border-white/5 pl-2">
                                {sub.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block rounded-lg px-3 py-2 text-xs text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
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
            Let&apos;s Build Together
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
                  {hasSubmenu(item) ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-gray-300"
                        onClick={() =>
                          setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                        }
                      >
                        {item.name}
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeSubmenu === item.name && "rotate-90"
                          )}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="space-y-1 pb-2 pl-4">
                          {item.submenu.map((sub) => (
                            <div key={sub.name}>
                              <Link
                                href={sub.href}
                                className="block py-2 text-sm text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                              {sub.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-1.5 pl-3 text-xs text-gray-500 hover:text-white"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
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
                  Let&apos;s Build Together
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
