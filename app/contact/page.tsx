"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", newsletterEmail);
    alert("Thank you for subscribing to our newsletter!");
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-dark rounded-2xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hello@solivite.com</p>
              <p className="text-gray-300">support@solivite.com</p>
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">+1 (555) 987-6543</p>
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                123 Innovation Drive<br />
                Tech Valley, CA 94025<br />
                United States
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-dark rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to get the latest updates, tips, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

