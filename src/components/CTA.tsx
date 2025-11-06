'use client'

import { useTranslations } from '@/i18n/useTranslations'
import { Button } from './ui/Button'
import { motion } from 'framer-motion'

export default function CTA() {
    const { t } = useTranslations()

    return (
        <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
            {/* Animated Gradient Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, #0066CC 0%, #004999 50%, #003366 100%)`,
                }}
            />

            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                animate={{
                    scale: [1, 0.9, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none',
                }}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-8"
                >
                    {/* Accent Line */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex justify-center"
                    >
                        <div
                            className="h-1 w-16 rounded-full"
                            style={{ background: 'rgba(255, 255, 255, 0.4)' }}
                        />
                    </motion.div>

                    {/* Title - TAILLE RÉDUITE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                            {t('cta.title')}
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p
                            className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                            {t('cta.description')}
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                    >

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <Button variant="secondary" size="lg">

                                {t('cta.button')}

                            </Button>

                            <Button variant="outline" size="lg">

                                {t('cta.secondary')}

                            </Button>

                        </div>

                    </motion.div>

                    {/* Stats Below CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 gap-8 pt-16"
                        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
                    >
                        {[
                            { value: '1000+', label: 'Utilisateurs' },
                            { value: '24/7', label: 'Support' },
                            { value: '99.99%', label: 'Disponibilité' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="space-y-2"
                            >
                                <p className="text-3xl md:text-4xl font-black text-white">
                                    {stat.value}
                                </p>
                                <p className="text-sm md:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                />
            ))}
        </section>
    )
}
