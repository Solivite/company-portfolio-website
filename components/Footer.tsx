import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo variant="landscape" showText={true} className="mb-4" />
            <p className="text-gray-300 text-sm">
              Complete digital solutions for your business. We transform ideas into reality.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/design" className="hover:text-purple-300 transition-colors">Design Services</Link></li>
              <li><Link href="/services/development" className="hover:text-purple-300 transition-colors">Development</Link></li>
              <li><Link href="/services/marketing" className="hover:text-purple-300 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/data-ai" className="hover:text-purple-300 transition-colors">Data & AI</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Solivite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

