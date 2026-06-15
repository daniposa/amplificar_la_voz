import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_19: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 52.864, y: 7.407 },
  title: {
    es: 'Ximena',
    fr: 'Ximena',
    en: 'Ximena',
  },
  rawText: {
    es: `<p><i>Cuánto dolor siento al saber<br>
de tantos seres desaparecidos,<br>  
sin saber nada de ellos, sepultados en las escombreras.<br> 
Cuánta tristeza siento,<br> 
al pensar si tienen hambre o tienen frío.<br> 
Se les arrebató la felicidad y los condenaron al olvido.<br> 
¿Dónde están? ¿Quiénes son esos hombres<br> 
que se los llevaron?<br> 
¿O acaso ya olvidaron que también<br> 
eran seres humanos?</i></p><p class="identificador">Mujer, mestiza, urbana</p>
`,
    fr: `<p><i>Quel deuil je ressens en sachant<br>   
Que tous ces êtres ont disparus,<br>  
Sans rien savoir d’eux, ensevelis sous les </i><b>{1}escombreras{/1}</b><br>
<i>Quelle tristesse je ressens,<br>   
En me demandant s'ils ont faim ou froid.<br>  
Leur bonheur leur a été arraché, et on les a condamnés à être oubliés.<br>   
Où sont-ils ? Qui sont ces hommes<br>    
qui les ont enlevés ?<br>  
Ou ont-ils déjà oublié<br>   
Qu'ils étaient, eux aussi, des êtres humains ?</i></p><p class="identificador">Femme, métisse, citadine</p>
`,
    en: `<p><i>How much pain I feel to know<br>
of so many disappeared ones<br> 
knowing nothing from them, buried in the </i><b>{1}escombreras{/1}</b>.<br> 
<i>How much sorrow I feel to think,<br> 
if they are hungry or if they are cold.<br> 
Their happiness was ripped out of them, and they were sentenced to be forgotten.<br> 
Where are they? Who are those men who<br>  
took them away?<br> 
Or have they already forgotten that they<br> 
were human beings too?</i></p><p class="identificador">Woman, mestiza, urbanite</p>
`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T1-19.</p>`,
      fr: `<p><strong>Escombreras</strong></p>
      <p>La colline de la Comuna 13 est devenue le symbole de la tragédie des disparitions forcées, où les groupes armés se débarrassaient des corps de leurs victimes. Les familles des victimes de disparition se sont battues pour obtenir le droit de rechercher leurs proches sur ce site.</p>`,
      en: `<p><strong>Escombreras</strong></p>
      <p>A hillside in Comuna 13 that became a symbol of the tragedy of forced disappearance, where armed groups disposed of the bodies of their victims. The families of the disappearance victims fought for the right to search this site for their loved ones.</p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: N/A</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): desaparición forzada</p><p>Actor armado: N/A</p>`,
    fr: `<p>Lieu : N/A</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : disparition forcée</p><p>Acteur armé : N/A</p>`,
    en: `<p>Place: N/A</p><p>Date: N/A</p><p>Victimizing act(s): forced disappearance</p><p>Armed actor: N/A</p>`,
  },
};
