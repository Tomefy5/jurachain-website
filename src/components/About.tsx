'use client'

import { useTranslations } from '@/i18n/useTranslations'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion, easeOut } from 'framer-motion'

export default function About() {
    const { t } = useTranslations()
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="about"
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
                className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
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
                className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: easeOut }}
                    className="mb-20 lg:mb-28"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div
                            className="h-1 w-12 rounded-full"
                            style={{ background: 'linear-gradient(90deg, #0066CC 0%, #00A3E0 100%)' }}
                        />
                        <span style={{ color: '#0066CC', fontSize: '0.875rem', fontWeight: '700' }}>
                            À PROPOS
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
                        style={{
                            background: 'linear-gradient(135deg, #1A1A2E 0%, #0066CC 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {t('about.title')}
                    </h2>
                    <p
                        className="text-lg md:text-xl leading-relaxed max-w-3xl"
                        style={{ color: '#555555' }}
                    >
                        {t('about.subtitle')}
                    </p>
                </motion.div>

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
                        className="group relative"
                        onMouseEnter={(e) => {
                            const card = e.currentTarget.querySelector('[data-card]') as HTMLElement
                            if (card) {
                                card.style.transform = 'translateY(-8px) scale(1.02)'
                                card.style.boxShadow = '0 20px 50px rgba(0, 102, 204, 0.2), inset 0 1px 0 rgba(255,255,255,0.6)'
                                card.style.borderColor = '#0066CC'
                            }
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget.querySelector('[data-card]') as HTMLElement
                            if (card) {
                                card.style.transform = 'translateY(0) scale(1)'
                                card.style.boxShadow = '0 8px 24px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255,255,255,0.4)'
                                card.style.borderColor = 'rgba(0, 102, 204, 0.1)'
                            }
                        }}
                    >
                        <div
                            data-card
                            className="relative bg-white p-8 md:p-10 rounded-2xl transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,250,255,0.6) 100%)',
                                border: '2px solid rgba(0, 102, 204, 0.1)',
                                boxShadow: '0 8px 24px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255,255,255,0.4)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {/* Icon Container */}
                            <motion.div
                                animate={isVisible ? { y: [0, -5, 0] } : {}}
                                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15) 0%, rgba(0, 169, 224, 0.1) 100%)',
                                    border: '2px solid rgba(0, 102, 204, 0.2)',
                                }}
                            >
                                🎯
                            </motion.div>

                            <h3
                                className="text-2xl md:text-3xl font-black mb-4 leading-tight"
                                style={{
                                    background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {t('about.mission.title')}
                            </h3>
                            <p
                                className="text-base md:text-lg leading-relaxed"
                                style={{ color: '#666666' }}
                            >
                                {t('about.mission.description')}
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

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
                        className="group relative"
                        onMouseEnter={(e) => {
                            const card = e.currentTarget.querySelector('[data-card]') as HTMLElement
                            if (card) {
                                card.style.transform = 'translateY(-8px) scale(1.02)'
                                card.style.boxShadow = '0 20px 50px rgba(0, 102, 204, 0.2), inset 0 1px 0 rgba(255,255,255,0.6)'
                                card.style.borderColor = '#0066CC'
                            }
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget.querySelector('[data-card]') as HTMLElement
                            if (card) {
                                card.style.transform = 'translateY(0) scale(1)'
                                card.style.boxShadow = '0 8px 24px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255,255,255,0.4)'
                                card.style.borderColor = 'rgba(0, 102, 204, 0.1)'
                            }
                        }}
                    >
                        <div
                            data-card
                            className="relative bg-white p-8 md:p-10 rounded-2xl transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,250,255,0.6) 100%)',
                                border: '2px solid rgba(0, 102, 204, 0.1)',
                                boxShadow: '0 8px 24px rgba(0, 102, 204, 0.08), inset 0 1px 0 rgba(255,255,255,0.4)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {/* Icon Container */}
                            <motion.div
                                animate={isVisible ? { y: [0, -5, 0] } : {}}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15) 0%, rgba(0, 169, 224, 0.1) 100%)',
                                    border: '2px solid rgba(0, 102, 204, 0.2)',
                                }}
                            >
                                🚀
                            </motion.div>

                            <h3
                                className="text-2xl md:text-3xl font-black mb-4 leading-tight"
                                style={{
                                    background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {t('about.vision.title')}
                            </h3>
                            <p
                                className="text-base md:text-lg leading-relaxed"
                                style={{ color: '#666666' }}
                            >
                                {t('about.vision.description')}
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
                </div>
            </div>
        </section>
    )
}
