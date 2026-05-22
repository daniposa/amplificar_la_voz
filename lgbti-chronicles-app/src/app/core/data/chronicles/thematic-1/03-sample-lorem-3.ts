import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_03: LocalizedModalContent = {
  title: { es: 'Crónica III', fr: 'Chronique III', en: 'Chronicle III' },
  rawText: {
    es: 'Curabitur pretium tincidunt lacus. {1}Nulla facilisi{/1}. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. {2}Vestibulum sapien{/2} proin quam.',
    fr: 'Curabitur pretium tincidunt lacus. {1}Nulla facilisi{/1}. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. {2}Vestibulum sapien{/2} proin quam.',
    en: 'Curabitur pretium tincidunt lacus. {1}Nulla facilisi{/1}. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. {2}Vestibulum sapien{/2} proin quam.'
  },
  tooltips: {
    1: {
      es: `<p>Término breve con <strong>texto</strong> y enlace.</p>
<p>Más: <a href="https://www.humanrights.gov" target="_blank" rel="noopener noreferrer">Derechos humanos (ejemplo)</a>.</p>`,
      fr: `<p>Terme court avec <strong>texte</strong> et lien.</p>
<p><a href="https://www.un.org/fr/human-rights" target="_blank" rel="noopener noreferrer">Droits humains (exemple)</a>.</p>`,
      en: `<p>Brief term with <strong>text</strong> and a link.</p>
<p><a href="https://www.un.org/en/human-rights" target="_blank" rel="noopener noreferrer">Human rights (example)</a>.</p>`
    },
    2: {
      es: `<p>Texto + imagen + enlace en un solo tooltip:</p>
<p><img src="images/image5.jpg" alt="Contexto visual" width="180"></p>
<p>Fuente: <a href="https://www.ohchr.org/es" target="_blank" rel="noopener noreferrer">ACNUDH</a>.</p>`,
      fr: `<p>Texte + image + lien :</p>
<p><img src="images/image6.jpg" alt="Visuel" width="180"></p>
<p><a href="https://www.ohchr.org/fr" target="_blank" rel="noopener noreferrer">ONU Droits humains</a>.</p>`,
      en: `<p>Text + image + link together:</p>
<p><img src="images/image1.jpg" alt="Visual context" width="180"></p>
<p>Source: <a href="https://www.ohchr.org/en" target="_blank" rel="noopener noreferrer">OHCHR</a>.</p>`
    }
  }
};
