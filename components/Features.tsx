"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "We deliver projects on time without compromising quality",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability for all solutions",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance processes",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

