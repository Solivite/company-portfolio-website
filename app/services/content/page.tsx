"use client";

import { motion } from "framer-motion";
import { FileText, PenSquare, BookOpen, Globe, MessageSquare, FileEdit } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Blog Writing",
    description: "Engaging, SEO-optimized blog posts that drive traffic and establish thought leadership in your industry.",
  },
  {
    icon: PenSquare,
    title: "Copywriting",
    description: "Compelling copy that converts. From landing pages to email campaigns, we write words that sell.",
  },
  {
    icon: BookOpen,
    title: "Technical Writing",
    description: "Clear, concise technical documentation, user manuals, and guides that make complex topics accessible.",
  },
  {
    icon: Globe,
    title: "Website Content",
    description: "Professional website content that tells your story, engages visitors, and drives conversions.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Content",
    description: "Captivating social media posts, captions, and content strategies that grow your online presence.",
  },
  {
    icon: FileEdit,
    title: "Content Strategy",
    description: "Comprehensive content strategies aligned with your business goals and target audience.",
  },
];

export default function ContentServices() {
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
            Content <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Writing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Words that resonate. We create compelling content that engages your audience and drives results.
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
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
          <h2 className="text-3xl font-bold mb-6">Let's Create Amazing Content</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get in touch to discuss your content needs and see how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

