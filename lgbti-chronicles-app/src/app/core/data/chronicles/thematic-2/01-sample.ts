import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T2_01: LocalizedModalContent = {
  title: {
    es: 'Crónica T2-01 (muestra)',
    fr: 'Chronique T2-01 (échantillon)',
    en: 'Chronicle T2-01 (sample)',
  },
  rawText: {
    es: 'Texto de muestra para la crónica T2-01. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: `Texte d’échantillon pour la chronique T2-01. {1}Phrase mise en évidence{/1} avec une note \
d’exemple.`,
    en: 'Sample text for chronicle T2-01. {1}Highlighted phrase{/1} with an example tooltip.',
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T2-01.</p>',
      fr: '<p>Note d’exemple pour la chronique T2-01.</p>',
      en: '<p>Sample tooltip for chronicle T2-01.</p>',
    },
  },
  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },
};
