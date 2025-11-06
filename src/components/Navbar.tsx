'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from '@/i18n/useTranslations'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslations()

    const navLinks = [
        { href: '#about', label: t('nav.about') },
        { href: '#features', label: t('nav.features') },
        { href: '#technology', label: t('nav.technology') },
        { href: '#contact', label: t('nav.contact') },
    ]

    return (
        <nav
            className="sticky top-0 z-40 backdrop-blur-xl shadow-lg"
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 255, 0.95) 100%)',
                borderBottom: '1px solid rgba(0, 102, 204, 0.1)',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            href="/"
                            className="flex items-center gap-3 group cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Image
                                    src="/original-jurachain-logo.png"
                                    alt="JuraChain Logo"
                                    width={50}
                                    height={50}
                                    className="rounded-lg shadow-md"
                                    priority
                                />
                            </motion.div>
                            <div className="hidden sm:flex flex-col">
                                <span
                                    className="font-black text-lg"
                                    style={{ color: '#1A1A2E' }}
                                >
                                    JuraChain
                                </span>
                                <span
                                    className="text-xs font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #0066CC 0%, #00A3E0 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    LegalTech
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    className="font-semibold text-sm transition-all duration-300 relative group"
                                    style={{ color: '#666666' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#0066CC'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#666666'
                                    }}
                                >
                                    {link.label}
                                    {/* Underline Animation */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-jura-primary to-jura-primary-light"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            background: 'linear-gradient(90deg, #0066CC 0%, #00A3E0 100%)',
                                        }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Language Switcher */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <LanguageSwitcher />
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                            className="hidden sm:block px-6 py-2.5 text-white rounded-lg font-bold text-sm transition-all duration-300 relative overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3)',
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 12px 35px rgba(0, 102, 204, 0.5)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #004999 0%, #003366 100%)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #0066CC 0%, #004999 100%)'
                            }}
                        >
                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                                animate={{ x: ['0%', '100%'] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                            <span className="relative z-10">{t('hero.cta_primary')}</span>
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg transition-colors"
                            style={{
                                backgroundColor: isOpen ? 'rgba(0, 102, 204, 0.1)' : 'transparent',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: isOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </motion.svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden"
                >
                    <div className="pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.href}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-lg transition-all font-semibold text-sm"
                                    style={{
                                        color: '#666666',
                                        backgroundColor: 'transparent',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#0066CC'
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 102, 204, 0.1)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#666666'
                                        e.currentTarget.style.backgroundColor = 'transparent'
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    )
}
