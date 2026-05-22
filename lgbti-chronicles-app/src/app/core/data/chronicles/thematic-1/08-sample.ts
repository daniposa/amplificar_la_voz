import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_08: LocalizedModalContent = {
  title: {
    es: 'Crónica T1-08 (muestra)',
    fr: 'Chronique T1-08 (échantillon)',
    en: 'Chronicle T1-08 (sample)'
  },
  rawText: {
    es: 'Texto de muestra para la crónica T1-08. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: 'Texte d’échantillon pour la chronique T1-08. {1}Phrase mise en évidence{/1} avec une note d’exemple.',
    en: 'Sample text for chronicle T1-08. {1}Highlighted phrase{/1} with an example tooltip.'
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T1-08.</p>',
      fr: '<p>Note d’exemple pour la chronique T1-08.</p>',
      en: '<p>Sample tooltip for chronicle T1-08.</p>'
    }
  }
};
