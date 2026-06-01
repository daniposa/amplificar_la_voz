import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_02: LocalizedModalContent = {
  title: { es: 'Mariana', fr: 'Mariana', en: 'Mariana' },
  rawText: {
    es: `<p>«Yo tenía 12 años. Uno de ellos se enamoró de mí. No sé el nombre, porque nunca lo dijo; siempre lo conocí como “el Mono”. Me llevaron pa una finca en donde me tuvieron una semana, me estrujaron, me violaron por ambos lados. Tuve un embarazo, pero me hicieron abortar. Me violaron varios, no fue nada más él. Me tenían encerrada en una habitación. A donde íbamos, me sacaban en camionetas blindadas. Nadie me veía cuando paseaba por el pueblo».</p> 
 <p><i>Mujer lesbiana</p></i>`,
    fr: `<p>« J’avais 12 ans. L’un d’eux est tombé amoureux de moi. Je ne connais pas son nom, parce qu’il ne l’a jamais dit ; je l’ai toujours connu sous le pseudonyme de “El Mono”. On m’a emmenée dans une <b><i>{1}finca{/1}</i></b>, et là, où on m’a retenue pendant une semaine, on m’a tourmentée, on m’a pénétré “par les deux trous”. Je suis tombée enceinte, mais on m’a fait avorter. J’ai été violée par plein de gens, c’était pas que lui. On m’a enfermée dans une pièce. Partout où nous allions, on m’emmenait dans des SUV blindés. Personne ne pouvait me voir quand on se promenait en ville. »</p>
<p><i>Femme lesbienne</p></i>
`,
    en: `<p>“I was 12 back then. One of them fell in love with me. I don’t know his name because he never told me. I always knew him as ‘el Mono.’ They took me to a <b><i>{1}finca{/1}</i></b> where I was held for a week. They tossed me around and raped me from the front and the back. I got pregnant, but they made me have an abortion. I was raped by several men, not just him. They kept me locked up in a room. Wherever we went, they would drive me around in armored SUVs. Nobody could see me when I went through town.”</p>
<p><i>Lesbian woman</i></p>
`,
  },
  tooltips: {
    1: {
      es: `<p>Primera frase destacada — solo enlace:</p>
<p><a href="https://www.colombia.co" target="_blank" rel="noopener noreferrer">Colombia.co</a></p>`,
      fr: `<p><strong><i>Finca</i></strong></p>
<p><img src="images/flotantes/finca.avif" alt="Une <i>finca</i> en Antioquia" width="220"></p>
<p><small>Une <i>finca</i> en Antioquia</small></p>
<p>En Colombie, le terme « finca » est habituellement utilisé pour désigner une maison, quel qu’en soit la taille, située dans une zone rurale. Une <i>finca</i> peut désigner aussi bien une petite maison de campagne comme une grande maison avec ses propres terres agricoles. Ces terres agricoles peuvent être des grandes étendues utilisées générer des bénéfices importants, ou elles peuvent être des petits potagers. Cela peut aussi être des terrains vagues, n’ayant pas d’utilité particulière mise à part d’être un lieu où l’on peut passer le temps hors de la ville.</p>`,
      en: `<p><strong><i>Finca</i></strong></p>
<p><img src="images/flotantes/finca.avif" alt="A <i>finca</i> in Antioquia" width="220"></p>
<p><small>A <i>finca</i> in Antioquia</small></p>
<p>In Colombia, “finca” is a term commonly used to refer to a house, regardless of its size, located in a rural area. A <i>finca</i> can range from a small country house to a large house with its own plantation. These agricultural plantations can be large expanses of land intended to produce a significant profit, or they can be small vegetable gardens. They may also be empty plots of land that serve no particular purpose, except to provide a place to spend time outside of any city or village.</p>`,
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
    es: '<p>Lugar: Valledupar, Cesar</p><p>Año: 1997</p><p>Hecho(s) victimizante(s): secuestro, violencia sexual, embarazo forzado, aborto forzado</p><p>Actor armado: N/A</p>',
    fr: '<p>Lieu : Valledupar, Cesar</p><p>Date : 1997</p><p>Fait(s) victimisant(s) : enlèvement, violence sexuelle, grossesse forcée, avortement forcé</p><p>Acteur armé : N/A</p>',
    en: '<p>Place: Valledupar, Cesar</p><p>Date: 1997</p><p>Victimizing act(s): kidnapping, sexual violence, forced pregnancy, forced abortion</p><p>Armed actor: N/A</p>',
  },
};
