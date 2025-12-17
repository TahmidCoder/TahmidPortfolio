import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden  bg-white dark:bg-gray-900 transition-colors duration-700">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gentle Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-red-100/40 dark:bg-red-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -40, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-red-50/50 dark:bg-red-600/15 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 30, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 w-80 h-80 bg-gray-100/60 dark:bg-red-400/10 rounded-full blur-3xl"
                />
            </div>

            {/* Subtle Floating Dots */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 10 - 5, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                    className="absolute w-1 h-1 bg-red-300 dark:bg-red-400 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Content */}
            <motion.div
                className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        }}
                        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mt-20"
                    >
                        {/* Subtle Rotating Border */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-400 dark:from-red-500 dark:via-red-600 dark:to-red-500 p-0.5"
                        >
                            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full" />
                        </motion.div>

                        {/* Image */}
                        <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-white dark:border-gray-900 shadow-xl bg-black">
                            <img
                                src="./tahmid.png"
                                alt="Tahmid – Full Stack Web Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Gentle Pulse Effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0, 0.2]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity
                            }}
                            className="absolute inset-0 rounded-full bg-red-400/20 dark:bg-red-500/30"
                        />
                    </motion.div>

                    {/* Status Badge */}

                </motion.div>

                {/* Name + SEO H1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-8 sm:mt-10"
                >
                    <h1 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-gray-700 dark:text-white/90 text-center">
                        <span className="text-red-600 dark:text-red-500 font-bold">Tahmid</span> – Full Stack Web Developer Portfolio
                    </h1>
                </motion.div>

                {/* Main Title */}
                <motion.div
                    className="flex flex-col gap-2 sm:gap-3 items-center mt-4 sm:mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >

                    <motion.span
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 text-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Based in Bangladesh
                    </motion.span>
                </motion.div>


                {/* Description */}
                <motion.div
                    className="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 text-center mt-6 sm:mt-8 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <h2 className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        I'm a passionate web developer who loves creating{" "}
                        <span className="text-red-600 dark:text-red-400 font-semibold">clean</span>,{" "}
                        <span className="text-red-600 dark:text-red-400 font-semibold">modern</span>, and{" "}
                        <span className="text-red-600 dark:text-red-400 font-semibold">user-friendly</span> websites.
                        I specialize in{" "}
                        <span className="text-gray-900 dark:text-white font-semibold">MERN Stack</span> and enjoy
                        bringing ideas to life through code.
                    </h2>
                </motion.div>

                {/* Tech Stack Icons */}
                <motion.div
                    className="flex gap-3 mt-6 flex-wrap justify-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, i) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className="bg-gray-100 dark:bg-white/5 backdrop-blur-sm 
                                       border border-gray-200 dark:border-white/10 
                                       px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300
                                       hover:bg-red-50 dark:hover:bg-red-500/20 
                                       hover:border-red-300 dark:hover:border-red-500/50 
                                       transition-all shadow-sm"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                >
                    {/* ✅ Download Resume Button */}
                    <motion.a
                        href="./Tahmid.pdf"
                        download="Tahmid-Full-Stack-Web-Developer-Resume.pdf"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 
               text-white font-medium
               transition-all duration-300 flex items-center justify-center gap-2
               shadow-md hover:shadow-lg rounded-lg"
                    >
                        <span>Download Resume</span>
                        <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ y: [0, 2, 0] }}
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

                    {/* Contact Me Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-white/20 
               hover:bg-gray-50 dark:hover:bg-white/5 
               hover:border-red-600 dark:hover:border-red-500 
               text-gray-700 dark:text-white font-medium
               transition-all duration-300 flex items-center justify-center gap-2 rounded-lg"
                    >
                        <Link to="contact" smooth={true} duration={500}>
                            <span>Contact Me</span>
                        </Link>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </motion.button>
                </motion.div>


            </motion.div>
        </div>
    )
}

export default Home