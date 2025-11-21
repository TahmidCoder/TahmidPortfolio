import React, { useState, useEffect, useContext } from 'react'
import BTN from "../context/DarkModeToggleBTN"
import { Link } from 'react-scroll'
import { MdOutlineDarkMode, MdMenu, MdClose } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'
const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const links = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => {
        setMobileMenuOpen(false)
    }

    const mobileMenuVariants = {
        hidden: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    const mobileMenuItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        })
    }

    return (
        <>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full h-16 md:h-20 flex justify-between items-center px-4 sm:px-6 lg:px-12 xl:px-20 z-50 transition-all duration-300
                    ${scrolled
                        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg  dark:border-gray-800/50'
                        : 'bg-transparent'
                    }
                `}
            >
                {/* Logo */}
                <motion.div
                    className="flex items-center z-50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src="./my.svg" alt="" className='w-40' />
                </motion.div>

                {/* Desktop Nav Links */}
                <motion.nav
                    className="hidden lg:block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <ul className="flex items-center space-x-1">
                        {links.map((link, index) => (
                            <motion.li
                                key={link.to}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="relative"
                            >
                                <Link
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 cursor-pointer transition-colors duration-200 block"
                                    to={link.to}
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    spy={true}
                                    activeClass="text-red-600 dark:text-red-500"
                                    onSetActive={() => setActiveSection(link.to)}
                                >
                                    {link.label}
                                    {activeSection === link.to && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 dark:bg-red-500"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>

                {/* Desktop Right side buttons */}
                <motion.div
                    className="hidden lg:flex gap-4 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <BTN />
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white text-sm font-medium transition-colors shadow-sm hover:shadow-md"
                    >
                        <Link to="contact" smooth={true} duration={600} offset={-80}>
                            <span className="flex items-center gap-2">
                                <span>Contact Me</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </motion.button>
                </motion.div>
                {/* Mobile Menu Button */}
                <motion.button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {mobileMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden flex flex-col"
                        >
                            {/* Menu Header */}
                            <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-red-500 dark:to-red-700 bg-clip-text text-transparent">
                                        Menu
                                    </h2>
                                    <span className="w-2 h-2 bg-red-600 dark:bg-red-500 rounded-full animate-pulse" />
                                </div>
                                <motion.button
                                    onClick={() => setMobileMenuOpen(false)}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <MdClose className="text-xl text-gray-700 dark:text-gray-300" />
                                </motion.button>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 px-6 py-8 overflow-y-auto">
                                <ul className="space-y-2">
                                    {links.map((link, index) => (
                                        <motion.li
                                            key={link.to}
                                            custom={index}
                                            variants={mobileMenuItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <Link
                                                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 cursor-pointer block py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                                to={link.to}
                                                smooth={true}
                                                duration={600}
                                                offset={-80}
                                                onClick={handleLinkClick}
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 bg-red-600 dark:bg-red-500 rounded-full" />
                                                    {link.label}
                                                </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Menu Footer */}
                            <motion.div
                                className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 180 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <BTN />
                                    </motion.button>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleLinkClick}
                                    className="w-full px-5 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white text-sm font-medium transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                                >
                                    <Link
                                        to="contact"
                                        smooth={true}
                                        duration={600}
                                    >
                                        <span>Contact Me</span>
                                    </Link>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav