import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-scroll';
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: ['Home', 'About', 'Projects', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Documentation', 'Guides', 'FAQ']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
    }
  ]

  const socialLinks = [
    { icon: <FaGithub />, color: 'hover:text-gray-700 dark:hover:text-white', link: 'https://github.com/TahmidCoder' },
    { icon: <FaLinkedin />, color: 'hover:text-blue-600', link: 'https://www.linkedin.com/in/md-tahmid-041535364/' },
    { icon: <FaTwitterSquare />, color: 'hover:text-blue-400', link: 'https://x.com/MD_TAHMID_03' },
    { icon: <MdEmail />, color: 'hover:text-red-600 dark:hover:text-red-400', link: 'mailto:your-email@example.com' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-700">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-red-200/20 dark:bg-red-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-red-100/15 dark:bg-red-400/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 pb-12 border-b border-gray-200 dark:border-gray-800"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent">
                Tahmid
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              A passionate FullStack Web Developer crafting clean, modern, and user-friendly digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all ${social.color}`}
                >
                  {social.icon}
                </motion.a>

              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              variants={itemVariants}
              className="flex flex-col"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3 flex flex-col">
                {section.links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.toLowerCase().replace(/\s+/g, '-')}
                      className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-800"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to get the latest updates on my projects and web development insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <span className="font-semibold text-gray-700 dark:text-gray-300">© {currentYear} Tahmid.</span> All rights reserved.
            </p>
          </motion.div>

          {/* Status */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Available for projects
            </span>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6"
          >
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 dark:text-white">50+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Projects</p>
            </div>
            <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-6">
              <p className="text-lg font-bold text-gray-900 dark:text-white">30+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Clients</p>
            </div>
            <div className="text-center border-l border-gray-200 dark:border-gray-800 pl-6">
              <p className="text-lg font-bold text-gray-900 dark:text-white">5+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Years</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-red-400 to-transparent dark:via-red-500 mt-8"
        />

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer