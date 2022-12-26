import { createI18n } from 'vue-i18n'
import fr from './locales/fr'
import en from './locales/en'

const messages = {
    fr: fr,
    en: en
}

const i18n = createI18n({
    messages,
    fallbackLocale: ['en']
})

export default i18n;