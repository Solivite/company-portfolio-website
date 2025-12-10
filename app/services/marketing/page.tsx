"use client";

import { motion } from "framer-motion";
import { Search, Share2, Target, TrendingUp, Mail, BarChart } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve your search engine rankings with our comprehensive SEO strategies. Keyword research, on-page optimization, and link building.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Grow your brand on social media. Content creation, community management, and paid advertising across all platforms.",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize ROI with Google Ads, Facebook Ads, and other paid advertising campaigns. Data-driven strategies that convert.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage your audience with targeted email campaigns. Automation, segmentation, and conversion optimization.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Track and measure your marketing performance. Comprehensive analytics dashboards and actionable insights.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "End-to-end growth strategies. From acquisition to retention, we help you scale your business sustainably.",
  },
];

export default function MarketingServices() {
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
            Digital <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Marketing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Grow your online presence and reach your target audience with data-driven marketing strategies.
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's create a marketing strategy that drives real results for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg text-white font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

