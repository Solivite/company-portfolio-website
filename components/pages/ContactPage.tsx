"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import GradientHeadline, {
  GradientText,
} from "@/components/ui/GradientHeadline";
import HeroBackground from "@/components/effects/HeroBackground";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(data.message ?? "Thank you for your message!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-gray-500 transition-colors focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-dark pt-28 pb-12 md:pt-36">
        <HeroBackground rayIntensity={0.75} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
              Contact
            </p>
            <GradientHeadline
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl"
            >
              Let&apos;s Build <GradientText>Together</GradientText>
            </GradientHeadline>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
              Ready to build, design, and grow your brand online? Tell us about
              your project and we&apos;ll get back to you within one business
              day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-surface-dark mt-12 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Contact cards */}
            <ScrollReveal className="space-y-4 lg:col-span-1">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  lines: [SITE.email, "support@solivite.com"],
                  href: `mailto:${SITE.email}`,
                },
                {
                  icon: Phone,
                  title: "Phone",
                  lines: [SITE.phone],
                  href: `tel:${SITE.phone.replace(/\D/g, "")}`,
                },
                {
                  icon: MapPin,
                  title: "Serving",
                  lines: ["Clients globally", "Remote & on-site"],
                  href: undefined,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-surface-dark-elevated p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="mt-1 block text-sm text-gray-400 transition-colors hover:text-purple-300"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="mt-1 text-sm text-gray-400">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              ))}
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="rounded-2xl border border-white/5 bg-surface-dark-elevated p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Send us a Message
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Fill out the form and we&apos;ll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className={inputClass}
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {feedback && (
                    <p
                      className={`rounded-xl border px-4 py-3 text-sm ${
                        status === "success"
                          ? "border-green-500/30 bg-green-500/10 text-green-300"
                          : "border-red-500/30 bg-red-500/10 text-red-300"
                      }`}
                      role="alert"
                    >
                      {feedback}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:from-purple-500 hover:to-violet-500 glow-purple disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
