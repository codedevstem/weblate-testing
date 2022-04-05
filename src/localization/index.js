import i18next from 'i18next';
import en from '../assets/localizations/en.lang.json';
import no from '../assets/localizations/no.lang.json';
const resources = {
    en: {
        translation: en
    },
    no: {
        translation: no
    },
}
i18next.init({
    lng: 'en',
    debug: true,
    resources: resources
})

export default i18next;