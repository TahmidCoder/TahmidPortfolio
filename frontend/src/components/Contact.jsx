import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    { icon: '✉️', title: 'Email', value: 'mdtahmid0003@gmail.com', link: 'mailto:mdtahmid0003@gmail.com' },
    { icon: '📱', title: 'Phone', value: '+880 0000000000', link: 'tel:+8801234567890' },
    { icon: '📍', title: 'Location', value: 'Bangladesh', link: 'https://maps.app.goo.gl/bMwPjjS754mS2t3w5' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, title: 'GitHub', link: 'https://github.com/TahmidCoder' },
    { icon: <FaLinkedin />, title: 'LinkedIn', link: 'https://www.linkedin.com/in/md-tahmid-041535364/' },
    { icon: <FaTwitterSquare />, title: 'Twitter', link: 'https://x.com/MD_TAHMID_03' }
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-700 overflow-hidden">

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-visible">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, i % 2 === 0 ? 50 : -50, 0],
              y: [0, i % 2 === 0 ? -30 : 40, 0]
            }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute rounded-full blur-3xl ${i === 0 ? 'top-20 left-10 w-96 h-96 bg-red-100/40 dark:bg-red-500/20' : i === 1 ? 'bottom-20 right-10 w-96 h-96 bg-red-50/50 dark:bg-red-600/15' : 'top-1/2 left-1/2 w-80 h-80 bg-gray-100/60 dark:bg-red-400/10'}`}
            style={{ willChange: 'transform' }}
          />
        ))}

        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-red-300 dark:bg-red-400 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, willChange: 'transform' }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">

        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. Feel free to reach out!
          </p>
        </motion.div>

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Info */}
          <motion.div className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h2>
            {contactMethods.map((method, i) => (
              <motion.a key={i} href={method.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-red-400 dark:hover:border-red-500 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{method.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{method.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Buttons */}
            <motion.div className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h3>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social, i) => (
                  <motion.a key={i} href={social.link} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="text-3xl group p-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-red-100 dark:hover:bg-red-500/20 hover:border-red-400 dark:hover:border-red-500 transition-all flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email', 'subject', 'message'].map((field, i) => (
                <motion.div key={field}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{field === 'name' ? 'Your Name' : field === 'email' ? 'Your Email' : field === 'subject' ? 'Subject' : 'Message'}</label>
                  {field !== 'message' ?
                    <input type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'john@example.com' : 'Project Inquiry'}
                    /> :
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  }
                </motion.div>
              ))}

              <motion.button type="submit"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
              >
                Send Message
                <motion.svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
