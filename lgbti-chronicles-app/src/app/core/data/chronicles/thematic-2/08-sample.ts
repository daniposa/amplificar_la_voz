import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T2_08: LocalizedModalContent = {
  title: {
    es: 'Crónica T2-08 (muestra)',
    fr: 'Chronique T2-08 (échantillon)',
    en: 'Chronicle T2-08 (sample)',
  },
  rawText: {
    es: 'Texto de muestra para la crónica T2-08. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: `Texte d’échantillon pour la chronique T2-08. {1}Phrase mise en évidence{/1} avec une note \
d’exemple.`,
    en: 'Sample text for chronicle T2-08. {1}Highlighted phrase{/1} with an example tooltip.',
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T2-08.</p>',
      fr: '<p>Note d’exemple pour la chronique T2-08.</p>',
      en: '<p>Sample tooltip for chronicle T2-08.</p>',
    },
  },
  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
    fr: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
    en: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },
};
