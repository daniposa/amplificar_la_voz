import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_36: LocalizedModalContent = {
  title: {
    es: 'Crónica T1-36 (muestra)',
    fr: 'Chronique T1-36 (échantillon)',
    en: 'Chronicle T1-36 (sample)'
  },
  rawText: {
    es: 'Texto de muestra para la crónica T1-36. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: 'Texte d’échantillon pour la chronique T1-36. {1}Phrase mise en évidence{/1} avec une note d’exemple.',
    en: 'Sample text for chronicle T1-36. {1}Highlighted phrase{/1} with an example tooltip.'
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T1-36.</p>',
      fr: '<p>Note d’exemple pour la chronique T1-36.</p>',
      en: '<p>Sample tooltip for chronicle T1-36.</p>'
    }
  }
};
