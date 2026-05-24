import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_19: LocalizedModalContent = {
  title: {
    es: 'Ximena',
    fr: 'Ximena',
    en: 'Ximena',
  },
  rawText: {
    es: `<p>Cuánto dolor siento al saber<br>
de tantos seres desaparecidos,<br>  
sin saber nada de ellos, sepultados en las escombreras.<br> 
Cuánta tristeza siento,<br> 
al pensar si tienen hambre o tienen frío.<br> 
Se les arrebató la felicidad y los condenaron al olvido.<br> 
¿Dónde están? ¿Quiénes son esos hombres<br> 
que se los llevaron?<br> 
¿O acaso ya olvidaron que también<br> 
eran seres humanos?</p><p><i>Mujer, mestiza, urbana</i></p>
`,
    fr: `<p>Quel deuil je ressens en sachant<br>   
Que tous ces êtres ont disparus,<br>  
Sans rien savoir d’eux, ensevelis sous les <b><u><i>{1}escombreras{/1}</i></u></b><br>
Quelle tristesse je ressens,<br>   
En me demandant s'ils ont faim ou froid.<br>  
Leur bonheur leur a été arraché, et on les a condamnés à être oubliés.<br>   
Où sont-ils ? Qui sont ces hommes<br>    
qui les ont enlevés ?<br>  
Ou ont-ils déjà oublié<br>   
Qu'ils étaient, eux aussi, des êtres humains ?</p><p><i>Femme, métisse, citadine</i></p>
`,
    en: `<p>How much pain I feel to know<br>
of so many disappeared ones<br> 
knowing nothing from them, buried in the <b><u><i>{1}escombreras{/1}</i></u></b>.<br> 
How much sorrow I feel to think,<br> 
if they are hungry or if they are cold.<br> 
Their happiness was ripped out of them, and they were sentenced to be forgotten.<br> 
Where are they? Who are those men who<br>  
took them away?<br> 
Or have they already forgotten that they<br> 
were human beings too?</p><p><i>Woman, mestiza, urbanite</i></p>
`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T1-19.</p>`,
      fr: `<p><strong>Escombreras</strong></p>
      <p>La colline de la Comuna 13 est devenue le symbole de la tragédie des disparitions forcées, où les groupes armés se débarrassaient des corps de leurs victimes. Les familles des victimes de disparition se sont battues pour obtenir le droit de rechercher leurs proches sur ce site.</p>`,
      en: `<p><strong>Escombreras</strong></p>
      <p>A hillside in Comuna 13 that became a symbol of the tragedy of forced disappearance, where armed groups disposed of the bodies of their victims. The families of the families of the disappearance victims fought for the right to search this site for their loved ones.</p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: N/A</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): desaparición forzada</p><p>Actor armado: N/A</p>`,
    fr: `<p>Lieu : N/A</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : disparition forcée</p><p>Acteur armé : N/A</p>`,
    en: `<p>Place: N/A</p><p>Date: N/A</p><p>Victimizing act(s): forced disappearance</p><p>Armed actor: N/A</p>`,
  },
};
