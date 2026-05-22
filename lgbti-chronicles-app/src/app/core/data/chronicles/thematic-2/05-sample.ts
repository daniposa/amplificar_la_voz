import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T2_05: LocalizedModalContent = {
  title: {
    es: 'Crónica T2-05 (muestra)',
    fr: 'Chronique T2-05 (échantillon)',
    en: 'Chronicle T2-05 (sample)'
  },
  rawText: {
    es: 'Texto de muestra para la crónica T2-05. {1}Frase destacada{/1} con una nota de ejemplo.',
    fr: 'Texte d’échantillon pour la chronique T2-05. {1}Phrase mise en évidence{/1} avec une note d’exemple.',
    en: 'Sample text for chronicle T2-05. {1}Highlighted phrase{/1} with an example tooltip.'
  },
  tooltips: {
    1: {
      es: '<p>Nota de ejemplo para la crónica T2-05.</p>',
      fr: '<p>Note d’exemple pour la chronique T2-05.</p>',
      en: '<p>Sample tooltip for chronicle T2-05.</p>'
    }
  }
};
