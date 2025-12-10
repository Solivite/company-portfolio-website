"use client";

import { motion } from "framer-motion";
import { Brain, Database, BarChart3, Cpu, Network, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models and algorithms tailored to your business needs. From predictive analytics to recommendation systems.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights. Comprehensive data analysis and visualization services.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "BI solutions that help you make data-driven decisions. Dashboards, reports, and analytics platforms.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Integrate AI capabilities into your existing systems. Chatbots, automation, and intelligent workflows.",
  },
  {
    icon: Network,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure. ETL processes, data warehousing, and cloud solutions.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and behaviors with advanced predictive models. Stay ahead of the curve with data science.",
  },
];

export default function DataAIServices() {
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
            Data & <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">AI Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of data and artificial intelligence to drive innovation and growth in your business.
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
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
          <h2 className="text-3xl font-bold mb-6">Unlock the Power of Data</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your business with AI and data solutions? Let's talk.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-white font-semibold hover:from-orange-700 hover:to-red-700 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

