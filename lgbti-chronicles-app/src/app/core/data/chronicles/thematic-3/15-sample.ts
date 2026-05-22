import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T3_15: LocalizedModalContent = {
  title: {
    es: 'Crónica T3-15 (muestra)',
    fr: 'Chronique T3-15 (échantillon)',
    en: 'Chronicle T3-15 (sample)',
  },
  rawText: {
    es: 'Texto de muestra para la crónica T3-15. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: `Texte d’échantillon pour la chronique T3-15. {1}Phrase mise en évidence{/1} avec une note \
d’exemple.`,
    en: 'Sample text for chronicle T3-15. {1}Highlighted phrase{/1} with an example tooltip.',
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T3-15.</p>',
      fr: '<p>Note d’exemple pour la chronique T3-15.</p>',
      en: '<p>Sample tooltip for chronicle T3-15.</p>',
    },
  },
  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },
};
