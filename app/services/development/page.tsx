"use client";

import { motion } from "framer-motion";
import { Code, Globe, Smartphone, ShoppingCart, Layers, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Affordable WordPress websites and e-commerce solutions. Custom themes, plugins, and maintenance.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description: "Beautiful, high-converting Shopify stores. Custom themes, apps, and integrations to boost sales.",
  },
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Fully custom web applications built with React, Next.js, Angular, or Vue. Scalable, modern, and fast.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps, plus cross-platform solutions with React Native and Flutter.",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description: "End-to-end development from frontend to backend. APIs, databases, cloud infrastructure, and more.",
  },
  {
    icon: Rocket,
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, security patches, and 24/7 support for your digital products.",
  },
];

export default function DevelopmentServices() {
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
            Development <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From simple websites to complex applications, we build digital solutions that scale with your business.
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
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
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to bring your idea to life? Get in touch and let's discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

