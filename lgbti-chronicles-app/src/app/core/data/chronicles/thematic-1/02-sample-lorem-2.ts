import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_02: LocalizedModalContent = {
  title: { es: 'Crónica II', fr: 'Chronique II', en: 'Chronicle II' },
  rawText: {
    es: `Duis aute irure dolor in {1}reprehenderit in voluptate{/1} velit esse cillum dolore eu \
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, {2}sunt in culpa qui \
officia{/2} deserunt mollit anim id est laborum.`,
    fr: `Duis aute irure dolor in {1}reprehenderit in voluptate{/1} velit esse cillum dolore eu \
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, {2}sunt in culpa qui \
officia{/2} deserunt mollit anim id est laborum.`,
    en: `Duis aute irure dolor in {1}reprehenderit in voluptate{/1} velit esse cillum dolore eu \
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, {2}sunt in culpa qui \
officia{/2} deserunt mollit anim id est laborum.`,
  },
  tooltips: {
    1: {
      es: `<p>Primera frase destacada — solo enlace:</p>
<p><a href="https://www.colombia.co" target="_blank" rel="noopener noreferrer">Colombia.co</a></p>`,
      fr: `<p>Première phrase — lien externe :</p>
<p><a href="https://www.diplomatie.gouv.fr" target="_blank" rel="noopener \
noreferrer">Diplomatie.gouv.fr</a></p>`,
      en: `<p>First highlight — external link only:</p>
<p><a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer">GOV.UK</a></p>`,
    },
    2: {
      es: `<p>Segunda frase — solo imagen:</p>
<p><img src="images/image2.jpg" alt="Ejemplo" width="220"></p>`,
      fr: `<p>Deuxième phrase — image :</p>
<p><img src="images/image3.jpg" alt="Exemple" width="220"></p>`,
      en: `<p>Second highlight — image only:</p>
<p><img src="images/image4.jpg" alt="Example" width="220"></p>`,
    },
  },
  contextInfo: {
    es: '<p>year: 2025</p><p>actor: FARC EP</p><p>location: Arauca - Arauquita</p>',
  },
};
