'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LanguageState {
    language: 'en' | 'fr'
    setLanguage: (lang: 'en' | 'fr') => void
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: 'en',
            setLanguage: (lang) => set({ language: lang }),
        }),
        {
            name: 'language-storage',
        }
    )
)
