"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "#", submenu: [
    { name: "Design Services", href: "/services/design" },
    { name: "Content Writing", href: "/services/content" },
    { name: "Data & AI", href: "/services/data-ai" },
    { name: "Development", href: "/services/development" },
    { name: "Digital Marketing", href: "/services/marketing" },
    { name: "Games", href: "/services/games" },
  ]},
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo variant="landscape" showText={true} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="text-white hover:text-purple-300 transition-colors">
                      {item.name}
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 glass-dark rounded-lg p-2 shadow-xl"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-dark rounded-lg p-4 overflow-hidden"
            >
              {navItems.map((item) => (
                <div key={item.name} className="mb-2">
                  {item.submenu ? (
                    <>
                      <button
                        className="text-white w-full text-left py-2"
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === item.name ? null : item.name
                          )
                        }
                      >
                        {item.name}
                      </button>
                      {activeSubmenu === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 text-white/80 hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white py-2 hover:text-purple-300 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

