"use client";

import { motion } from "framer-motion";
import { Palette, Video, Zap, Image, PenTool, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visual designs for print and digital media. From brochures to social media graphics, we create eye-catching designs that capture your brand essence.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing services for commercials, social media content, corporate videos, and more. We bring your stories to life.",
  },
  {
    icon: Zap,
    title: "Animations",
    description: "2D and 3D animations, motion graphics, and interactive animations that engage and captivate your audience.",
  },
  {
    icon: Image,
    title: "Logo Design",
    description: "Memorable logo designs that represent your brand identity. We create unique, scalable logos that make a lasting impression.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered design solutions for websites and mobile apps. We create intuitive, beautiful interfaces that users love.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Complete brand identity packages including color schemes, typography, style guides, and brand guidelines.",
  },
];

export default function DesignServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Design <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your ideas into visually stunning designs. Our creative team delivers exceptional design solutions that elevate your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss your design needs and create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

