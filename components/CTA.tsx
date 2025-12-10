"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="glass-dark rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Let's work together to create something amazing. Get in touch today and let's discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

