"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Solivite transformed our digital presence. Their expertise in both design and development is unmatched. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "Working with Solivite was a game-changer. They delivered a beautiful, functional app that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "Their digital marketing strategies helped us triple our online engagement. Professional, creative, and results-driven.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.2}>
              <div className="glass-dark rounded-2xl p-8 relative">
                <Quote className="w-12 h-12 text-purple-400 mb-4 opacity-50" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

