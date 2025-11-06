'use client'

import Link from 'next/link'
import { useTranslations } from '@/i18n/useTranslations'
import Image from 'next/image'
import { motion } from 'framer-motion'

const socialLinks = [
    {
        name: 'GitHub',
        icon: '🐙',
        url: 'https://github.com/jurachain',
        color: '#0066CC',
    },
    {
        name: 'Twitter',
        icon: '𝕏',
        url: 'https://twitter.com/jurachain',
        color: '#00A3E0',
    },
    {
        name: 'LinkedIn',
        icon: '💼',
        url: 'https://linkedin.com/company/jurachain',
        color: '#0066CC',
    },
]

export default function Footer() {
    const { t } = useTranslations()

    const footerSections = [
        {
            title: t('footer.company'),
            links: [
                { label: t('footer.about'), href: '#' },
                { label: t('footer.blog'), href: '#' },
                { label: t('footer.community'), href: '#' },
            ],
        },
        {
            title: t('footer.resources'),
            links: [
                { label: t('footer.docs'), href: '#' },
                { label: t('footer.api'), href: '#' },
                { label: t('footer.support'), href: '#' },
            ],
        },
        {
            title: t('footer.legal'),
            links: [
                { label: t('footer.privacy'), href: '#' },
                { label: t('footer.terms'), href: '#' },
                { label: t('footer.contact'), href: '#' },
            ],
        },
    ]

    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, #1A1A2E 0%, #0D0D1A 50%, #000000 100%)`,
            }}
        >
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-40 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 102, 204, 0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                animate={{
                    scale: [1, 0.9, 1],
                    opacity: [0.1, 0.25, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 169, 224, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="flex-shrink-0"
                            >
                                <Image
                                    src="/original-jurachain-logo.png"
                                    alt="JuraChain Logo"
                                    width={48}
                                    height={48}
                                    className="rounded-lg"
                                />
                            </motion.div>
                            <div>
                                <h3 className="font-black text-xl text-white">JuraChain</h3>
                                <p className="text-xs" style={{ color: 'rgba(0, 169, 224, 0.8)' }}>
                                    LegalTech
                                </p>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                            Innovation blockchain pour la conformité légale et la transparence.
                        </p>
                    </motion.div>

                    {/* Footer Sections */}
                    {footerSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4
                                className="font-bold text-lg mb-6"
                                style={{
                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #00A3E0 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                                            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = '#00A3E0'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.3), transparent)',
                    }}
                />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    {/* Copyright */}
                    <p className="text-sm text-center md:text-left" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        {t('footer.rights')} • Crafted with ❤️ by{' '}
                        <span style={{ color: '#00A3E0' }}>JuraChain Team</span>
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6 md:gap-8">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl transition-all duration-300"
                                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                whileHover={{
                                    scale: 1.2,
                                    color: social.color,
                                    filter: 'drop-shadow(0 0 8px rgba(0, 102, 204, 0.5))',
                                }}
                                title={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        opacity: [0, 0.3, 0],
                    }}
                    transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        backgroundColor: 'rgba(0, 102, 204, 0.4)',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                />
            ))}
        </footer>
    )
}
