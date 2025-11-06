'use client'

import { useTranslations } from '@/i18n/useTranslations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Card } from './ui/Card'
import { motion, easeOut } from 'framer-motion'

const featureIcons = {
    legal_compliance: '⚖️',
    transparency: '👁️',
    security: '🔒',
    scalability: '⚡',
    interoperability: '🔗',
    sustainability: '🌱',
}

export default function Features() {
    const { t } = useTranslations()
    const { ref, isVisible } = useScrollAnimation()

    const featuresList = [
        { key: 'legal_compliance', icon: featureIcons.legal_compliance },
        { key: 'transparency', icon: featureIcons.transparency },
        { key: 'security', icon: featureIcons.security },
        { key: 'scalability', icon: featureIcons.scalability },
        { key: 'interoperability', icon: featureIcons.interoperability },
        { key: 'sustainability', icon: featureIcons.sustainability },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeOut },
        },
    }

    return (
        <section
            id="features"
            ref={ref}
            className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 50%, #F0F4FF 100%)`,
            }}
        >
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                animate={{
                    y: [0, 40, 0],
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{ duration: 12, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 169, 224, 0.08) 0%, transparent 70%)',
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
                    transition={{ duration: 0.8, ease: easeOut }}
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
                                FONCTIONNALITÉS CLÉS
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
                        {t('features.title')}
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                        style={{ color: '#555555' }}
                    >
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    {featuresList.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <motion.div
                                animate={isVisible ? { scale: [1, 1.02, 1] } : {}}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                className="h-full"
                            >
                                <div
                                    className="relative h-full bg-white p-8 md:p-10 rounded-2xl overflow-hidden transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,255,0.7) 100%)',
                                        border: '2px solid rgba(0, 102, 204, 0.1)',
                                        boxShadow: '0 8px 24px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#0066CC'
                                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 102, 204, 0.2), inset 0 1px 0 rgba(255,255,255,0.6)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(0, 102, 204, 0.1)'
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)'
                                    }}
                                >
                                    {/* Icon Container */}
                                    <motion.div
                                        animate={isVisible ? { y: [0, -8, 0] } : {}}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-4xl transition-all duration-300"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15) 0%, rgba(0, 169, 224, 0.1) 100%)',
                                            border: '2px solid rgba(0, 102, 204, 0.2)',
                                        }}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <h3
                                        className="text-xl md:text-2xl font-black mb-3 leading-tight"
                                        style={{
                                            background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                        }}
                                    >
                                        {t(`features.items.${feature.key}.title`)}
                                    </h3>
                                    <p
                                        className="text-base md:text-lg leading-relaxed"
                                        style={{ color: '#666666' }}
                                    >
                                        {t(`features.items.${feature.key}.description`)}
                                    </p>

                                    {/* Gradient Border Animation */}
                                    <div
                                        className="absolute -inset-0.5 bg-gradient-to-r from-jura-primary to-jura-primary-light rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.3) 0%, rgba(0, 169, 224, 0.1) 100%)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
