'use client'

import { useTranslations } from '@/i18n/useTranslations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export default function Technology() {
    const { t } = useTranslations()
    const { ref, isVisible } = useScrollAnimation()

    const techs = [
        { key: 'architecture', icon: '🏗️' },
        { key: 'consensus', icon: '⛓️' },
        { key: 'smart_contracts', icon: '📝' },
        { key: 'privacy', icon: '🔐' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <section
            id="technology"
            ref={ref}
            className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 50%, #F8FAFF 100%)`,
            }}
        >
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    y: [0, -50, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-40 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 102, 204, 0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                animate={{
                    y: [0, 50, 0],
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 169, 224, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Grid Background Pattern */}
            <div
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 lg:mb-28"
                >
                    {/* Section Badge */}
                    <motion.div
                        animate={isVisible ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex justify-center mb-6"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
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
                                TECHNOLOGIE AVANCÉE
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
                        style={{
                            background: 'linear-gradient(135deg, #1A1A2E 0%, #0066CC 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {t('technology.title')}
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                        style={{ color: '#555555' }}
                    >
                        {t('technology.subtitle')}
                    </p>
                </motion.div>

                {/* Technology Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {techs.map((tech, index) => (
                        <motion.div
                            key={tech.key}
                            variants={itemVariants}
                            whileHover={{ y: -12 }}
                            className="group relative"
                        >
                            <motion.div
                                animate={isVisible ? { scale: [1, 1.02, 1] } : {}}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                className="h-full"
                            >
                                <div
                                    className="relative h-full bg-white p-10 md:p-12 rounded-3xl overflow-hidden transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.8) 100%)',
                                        border: '2px solid rgba(0, 102, 204, 0.12)',
                                        boxShadow: '0 10px 30px rgba(0, 102, 204, 0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#0066CC'
                                        e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 102, 204, 0.25), inset 0 1px 0 rgba(255,255,255,0.7)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(0, 102, 204, 0.12)'
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.1), inset 0 1px 0 rgba(255,255,255,0.7)'
                                    }}
                                >
                                    {/* Icon Container */}
                                    <motion.div
                                        animate={isVisible ? { y: [0, -12, 0], rotate: [0, 5, 0] } : {}}
                                        transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.2 }}
                                        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 text-5xl transition-all duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15) 0%, rgba(0, 169, 224, 0.1) 100%)',
                                            border: '2px solid rgba(0, 102, 204, 0.25)',
                                            boxShadow: '0 8px 20px rgba(0, 102, 204, 0.1)',
                                        }}
                                    >
                                        {tech.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <h3
                                        className="text-2xl md:text-3xl font-black mb-5 leading-tight"
                                        style={{
                                            background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {t(`technology.${tech.key}.title`)}
                                    </h3>

                                    <p
                                        className="text-base md:text-lg leading-relaxed"
                                        style={{ color: '#666666', lineHeight: '1.8' }}
                                    >
                                        {t(`technology.${tech.key}.description`)}
                                    </p>

                                    {/* Accent Line */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.5), transparent)',
                                        }}
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Gradient Border Animation */}
                                    <div
                                        className="absolute -inset-0.5 bg-gradient-to-r from-jura-primary to-jura-primary-light rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.3) 0%, rgba(0, 169, 224, 0.15) 100%)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20 lg:mt-28"
                >
                    <p
                        className="text-lg md:text-xl mb-8"
                        style={{ color: '#666666' }}
                    >
                        Découvrez comment notre technologie révolutionne le secteur légal
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300"
                        style={{
                            background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                            boxShadow: '0 8px 24px rgba(0, 102, 204, 0.3)',
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 16px 40px rgba(0, 102, 204, 0.5)',
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        En savoir plus
                        <span>→</span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                        backgroundColor: 'rgba(0, 102, 204, 0.3)',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                />
            ))}
        </section>
    )
}
