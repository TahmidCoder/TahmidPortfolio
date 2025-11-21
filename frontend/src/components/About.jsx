import React from 'react'
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const SocialMediaIcons = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/TahmidCoder" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/md-tahmid-041535364/" },
    { icon: <FaTwitterSquare />, name: "Twitter", url: "https://x.com/MD_TAHMID_03" }
  ]

  const skills = [
    "React.js", "Node.js", "MongoDB", "Express.js",
    "Tailwind CSS", "JavaScript", "TypeScript", "REST API"
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <div className='min-h-screen w-full flex flex-col lg:flex-row bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      {/* Left Section - Profile */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6 items-center justify-center p-8 md:p-12 lg:p-16'>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 
                       bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-1.5
                       rounded-full overflow-hidden shadow-2xl relative"
          >
            <div className='w-full bg-black h-full rounded-full overflow-hidden'>
              <img
                src="./tahmid.png"
                alt="Tahmid"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: 0.5
            }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              delay: 0.8
            }}
            className="absolute -bottom-4 -left-4 w-20 h-20 bg-red-600 rounded-full opacity-20 blur-xl"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              I'm Tahmid
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-2 rounded-full" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
          >
            FullStack Web Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">📍</span>
            Based in Bangladesh
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-4 mt-4"
        >
          {SocialMediaIcons.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl group p-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-red-100 dark:hover:bg-red-500/20 hover:border-red-400 dark:hover:border-red-500 transition-all flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Right Section - About Info */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8'>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About Me
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate FullStack Web Developer with expertise in building modern,
            scalable web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With a strong foundation in both frontend and backend technologies,
            I create seamless user experiences that drive business growth and user satisfaction.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg text-center"
            >
              <h4 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-500">
                {stat.number}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md 
                         border border-gray-200 dark:border-gray-700
                         hover:border-red-500 dark:hover:border-red-500
                         hover:shadow-lg transition-all duration-300
                         text-center group"
            >
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300
                            group-hover:text-red-600 dark:group-hover:text-red-500
                            transition-colors">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap">
          <motion.a
            href="./Tahmid.pdf" // 📍 ফাইলটি public ফোল্ডারে থাকবে
            download="Tahmid-Resume.pdf"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-red-600 hover:bg-red-700
             text-white font-medium text-base
             border-2 border-red-600 hover:border-red-700
             transition-all duration-300 flex items-center gap-2 rounded-md shadow-md"
          >
            <span>Download Resume</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </motion.svg>
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-transparent hover:bg-red-50 dark:hover:bg-gray-800
                       text-red-600 dark:text-red-500 font-medium text-base
                       border-2 border-red-600 dark:border-red-500
                       transition-all duration-300 flex items-center gap-2"
          >
            <span>Contact Me</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default About
