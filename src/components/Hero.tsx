'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from '@/i18n/useTranslations'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { motion } from 'framer-motion'
import { easeOut } from 'framer-motion'

export default function Hero() {
    const { t } = useTranslations()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: easeOut },
        },
    }

    return (
        <section
            className="relative min-h-screen overflow-hidden pt-24 pb-20"
            style={{
                background: `linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 50%, #F0FAFF 100%)`,
            }}
        >
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    y: [0, -50, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 102, 204, 0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                animate={{
                    y: [0, 50, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 169, 224, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Left Content */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Badge */}
                        <motion.div variants={itemVariants}>
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                                style={{
                                    background: 'rgba(0, 102, 204, 0.08)',
                                    border: '1px solid rgba(0, 102, 204, 0.2)',
                                }}
                            >
                                <span
                                    className="w-2 h-2 rounded-full animate-pulse"
                                    style={{ backgroundColor: '#0066CC' }}
                                />
                                <span style={{ color: '#0066CC', fontSize: '0.875rem', fontWeight: '600' }}>
                                    {t('hero.badge')}
                                </span>
                            </div>
                        </motion.div>

                        {/* Title - TAILLE RÉDUITE */}
                        <motion.div variants={itemVariants}>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
                                style={{
                                    color: '#1A1A2E',
                                    background: 'linear-gradient(135deg, #1A1A2E 0%, #0066CC 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {t('hero.title')}
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants}>
                            <p
                                className="text-lg md:text-xl leading-relaxed max-w-lg"
                                style={{ color: '#555555' }}
                            >
                                {t('hero.description')}
                            </p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div

                            variants={itemVariants}

                            className="flex flex-col sm:flex-row gap-4 pt-4"

                        >

                            <Button size="lg">

                                {t('hero.cta_primary')}

                            </Button>

                            <Button variant="outline" size="lg">

                                {t('hero.cta_secondary')}

                            </Button>

                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-8 pt-12"
                            style={{ borderTop: '1px solid rgba(0, 102, 204, 0.1)' }}
                        >
                            {[
                                { value: '10K+', label: 'Tx/sec' },
                                { value: '99.9%', label: 'Uptime' },
                                { value: '50+', label: 'Enterprises' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="space-y-2"
                                >
                                    <p
                                        className="text-4xl font-black"
                                        style={{ color: '#0066CC' }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="text-sm font-semibold"
                                        style={{ color: '#888888' }}
                                    >
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Illustration - Blockchain Chain */}
                    <motion.div
                        variants={itemVariants}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Animated Blockchain Chain */}
                        <div className="w-full aspect-square flex items-center justify-center">
                            {/* Main Circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute w-80 h-80 rounded-full"
                                style={{
                                    border: '2px solid rgba(0, 102, 204, 0.2)',
                                }}
                            />

                            {/* Inner Circle */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute w-64 h-64 rounded-full"
                                style={{
                                    border: '2px solid rgba(0, 102, 204, 0.3)',
                                }}
                            />

                            {/* Center Node */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute w-24 h-24 rounded-xl flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                    boxShadow: '0 0 30px rgba(0, 102, 204, 0.5)',
                                }}
                            >
                                <span className="text-white font-bold text-4xl">⛓️</span>
                            </motion.div>

                            {/* Orbiting Nodes */}
                            {[0, 120, 240].map((angle, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        rotate: 360,
                                        x: Math.cos((angle * Math.PI) / 180) * 120,
                                        y: Math.sin((angle * Math.PI) / 180) * 120,
                                    }}
                                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                    className="absolute w-16 h-16 rounded-lg flex items-center justify-center"
                                    style={{
                                        background: 'rgba(0, 102, 204, 0.1)',
                                        border: '2px solid rgba(0, 102, 204, 0.3)',
                                    }}
                                >
                                    <span className="text-jura-primary text-xl">◆</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
