import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T3_10: LocalizedModalContent = {
  title: {
    es: 'Crónica T3-10 (muestra)',
    fr: 'Chronique T3-10 (échantillon)',
    en: 'Chronicle T3-10 (sample)'
  },
  rawText: {
    es: 'Texto de muestra para la crónica T3-10. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: 'Texte d’échantillon pour la chronique T3-10. {1}Phrase mise en évidence{/1} avec une note d’exemple.',
    en: 'Sample text for chronicle T3-10. {1}Highlighted phrase{/1} with an example tooltip.'
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T3-10.</p>',
      fr: '<p>Note d’exemple pour la chronique T3-10.</p>',
      en: '<p>Sample tooltip for chronicle T3-10.</p>'
    }
  }
};
