'use client'

import { useState, useEffect } from 'react'
import { useLanguageStore } from '@/hooks/useLanguage'
import clsx from 'clsx'

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguageStore()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
    ]

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-jura-primary text-jura-primary hover:bg-jura-light transition-all font-semibold text-sm"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.3 5.3l.3-.3a6 6 0 000 8.5l-.3-.3A5 5 0 117.3 5.3zM9 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                {language.toUpperCase()}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white border-2 border-jura-primary rounded-lg shadow-xl z-50 overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code as 'en' | 'fr')
                                setIsOpen(false)
                            }}
                            className={clsx(
                                'w-full text-left px-4 py-3 transition-colors font-medium',
                                language === lang.code
                                    ? 'bg-jura-primary text-white'
                                    : 'hover:bg-jura-light text-jura-secondary'
                            )}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
