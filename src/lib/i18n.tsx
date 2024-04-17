import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './languages/pt.json';
import enTranslation from './languages/en.json';
import esTranslation from './languages/es.json';
import { useContexts } from '@/context/context';

i18n.use(initReactI18next).init({
    resources: {
        pt: { ...ptTranslation },
        en: { ...enTranslation },
        es: { ...esTranslation }
    },
    lng: 'pt',
});