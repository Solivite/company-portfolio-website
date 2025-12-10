"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Palette,
  Code,
  Smartphone,
  PenTool,
  BarChart3,
  Megaphone,
  Gamepad2,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design Services",
    description: "Graphic design, UI/UX, logo design, animations, and video editing",
    href: "/services/design",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Development",
    description: "Web and mobile apps from WordPress to custom React/Angular solutions",
    href: "/services/development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Professional content creation for your digital presence",
    href: "/services/content",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Data & AI",
    description: "Data analytics, machine learning, and AI-powered solutions",
    href: "/services/data-ai",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, social media marketing, and comprehensive digital strategies",
    href: "/services/marketing",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Game development and interactive experiences",
    href: "/services/games",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="glass-dark rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

