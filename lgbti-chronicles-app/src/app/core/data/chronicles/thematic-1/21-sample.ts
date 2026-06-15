import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_21: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 51.354, y: 61.296 },
  title: {
    es: 'Gloria',
    fr: 'Gloria',
    en: 'Gloria',
  },
  rawText: {
    es: `<p><i>Duele la lengua rota.<br>
¿Dónde está mi femenino?<br>
¿A dónde se ha ido mi lengua y yo con ella?<br>
Y en este silencio de la lengua,<br>
¿qué tonada silbaré?</i></p><p class="identificador">Mujer</p>
`,
    fr: `<p><i>La douleur d’une langue déchirée<br>   
Où est ma féminité ?<br>  
Où est partie ma langue et moi avec elle ?<br>  
Et dans ce silence de la langue<br>  
quel air pourrais-je siffler ?</i></p><p class="identificador">Femme</p>
`,
    en: `<p><i>The torn-up tongue throbs.<br>
Where is my feminine now?<br>
Where have they gone? Myself and my tongue.<br>
And what tune am I supposed to whistle<br> 
in this silence of something I no longer own?</i></p><p class="identificador">Woman></p>
`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T1-21.</p>`,
      fr: `<p>Note d’exemple pour la chronique T1-21.</p>`,
      en: `<p>Sample tooltip for chronicle T1-21.</p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: N/A</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): N/A </p><p>Actor armado: N/A</p>`,
    fr: `<p>Lieu : N/A</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : N/A</p><p>Acteur armé : N/A</p>`,
    en: `<p>Place: N/A</p><p>Date: N/A</p><p>Victimizing act(s): N/A</p><p>Armed actor: N/A</p>`,
  },
};
