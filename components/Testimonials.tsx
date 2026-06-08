"use client";

import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Solivite transformed our digital presence. Their expertise in both design and development is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content:
      "Working with Solivite was a game-changer. They delivered a beautiful, functional app that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content:
      "Their digital marketing strategies helped us triple our online engagement. Professional, creative, and results-driven.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface-dark-elevated py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from our satisfied clients."
          />
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="relative h-full rounded-2xl border border-white/5 bg-surface-dark p-8">
                <Quote className="mb-4 h-8 w-8 text-purple-500/40" />
                <p className="mb-6 leading-relaxed text-gray-400">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mb-4 flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-sm text-purple-400">
                      ★
                    </span>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
