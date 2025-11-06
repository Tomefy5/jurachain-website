'use client'

import { useCallback } from 'react'
import { useLanguageStore } from '@/hooks/useLanguage'
import { getTranslations } from './config'

export function useTranslations() {
    const language = useLanguageStore((state) => state.language)
    const translations = getTranslations(language)

    const t = useCallback(
        (key: string, defaultValue?: string): string => {
            const keys = key.split('.')
            let value = translations

            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k]
                } else {
                    return defaultValue || key
                }
            }

            return typeof value === 'string' ? value : (defaultValue || key)
        },
        [translations]
    )

    return { t, language }
}
