"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "10+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge digital solutions that drive growth and innovation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading digital solutions provider, recognized globally for excellence and innovation.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, creativity, and client success are at the core of everything we do.",
    },
    {
      icon: TrendingUp,
      title: "Our Promise",
      description: "Delivering exceptional results that exceed expectations and drive measurable business outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Solivite</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We are a complete digital solutions company with a rich legacy of transforming businesses through innovative technology and creative excellence.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Story */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl font-bold mb-8 text-center">Our Legacy</h2>
          <div className="glass-dark rounded-2xl p-8 md:p-12 space-y-6 text-gray-200 leading-relaxed">
            <p className="text-lg">
              Founded in 2014, Solivite began as a small team of passionate developers and designers with a vision to revolutionize the digital landscape. What started as a boutique agency has grown into a full-service digital solutions company serving clients across the globe.
            </p>
            <p>
              Over the years, we've built a reputation for excellence, delivering over 500 successful projects ranging from simple websites to complex enterprise applications. Our journey has been marked by continuous innovation, adapting to emerging technologies and market demands.
            </p>
            <p>
              In 2018, we expanded our services to include AI and data analytics, positioning ourselves at the forefront of technological innovation. By 2020, we had established partnerships with major tech companies and were recognized as a leader in digital transformation.
            </p>
            <p>
              Today, Solivite stands as a testament to what's possible when passion meets expertise. Our team of 50+ professionals continues to push boundaries, helping businesses of all sizes achieve their digital goals. We've worked with startups, mid-size companies, and Fortune 500 enterprises, each project adding to our rich legacy of success.
            </p>
            <p>
              As we look to the future, we remain committed to our founding principles: innovation, quality, and client success. Our legacy is not just in the projects we've completed, but in the relationships we've built and the impact we've made on businesses worldwide.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">What Drives Us</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

