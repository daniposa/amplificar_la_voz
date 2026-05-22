import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_16: LocalizedModalContent = {
  title: {
    es: 'Crónica T1-16 (muestra)',
    fr: 'Chronique T1-16 (échantillon)',
    en: 'Chronicle T1-16 (sample)',
  },
  rawText: {
    es: 'Texto de muestra para la crónica T1-16. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: `Texte d’échantillon pour la chronique T1-16. {1}Phrase mise en évidence{/1} avec une note \
d’exemple.`,
    en: 'Sample text for chronicle T1-16. {1}Highlighted phrase{/1} with an example tooltip.',
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T1-16.</p>',
      fr: '<p>Note d’exemple pour la chronique T1-16.</p>',
      en: '<p>Sample tooltip for chronicle T1-16.</p>',
    },
  },
  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },
};
