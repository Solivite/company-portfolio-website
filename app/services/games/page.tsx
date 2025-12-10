"use client";

import { motion } from "framer-motion";
import { Gamepad2, Smartphone, Users, Zap, Trophy, Puzzle } from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Full-cycle game development for mobile, web, and desktop platforms. From concept to launch and beyond.",
  },
  {
    icon: Smartphone,
    title: "Mobile Games",
    description: "Engaging mobile games for iOS and Android. Casual, puzzle, action, and strategy games that captivate players.",
  },
  {
    icon: Puzzle,
    title: "Game Design",
    description: "Creative game design, mechanics, and storytelling. We design games that are fun, engaging, and memorable.",
  },
  {
    icon: Zap,
    title: "AR/VR Games",
    description: "Immersive augmented and virtual reality experiences. Cutting-edge technology meets creative gameplay.",
  },
  {
    icon: Users,
    title: "Multiplayer Games",
    description: "Online multiplayer games with real-time synchronization, matchmaking, and social features.",
  },
  {
    icon: Trophy,
    title: "Game Analytics",
    description: "Player behavior analytics, monetization strategies, and A/B testing to optimize game performance.",
  },
];

export default function GamesServices() {
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
            Game <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create immersive gaming experiences that entertain, engage, and captivate players worldwide.
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
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Game?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's bring your game idea to life and create an experience players will love.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}

