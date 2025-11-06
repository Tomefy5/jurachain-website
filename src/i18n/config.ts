export const languages = {
    en: 'English',
    fr: 'Français',
} as const

export const defaultLanguage = 'en' as const

export type Language = keyof typeof languages

export const getTranslations = (lang: Language) => {
    const translations: Record<Language, any> = {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
    }
    return translations[lang]
}
