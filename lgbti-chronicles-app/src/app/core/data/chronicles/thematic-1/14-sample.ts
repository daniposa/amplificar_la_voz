import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_14: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 40.468, y: 93.888 },
  title: {
    es: 'Lucellys ',
    fr: 'Lucellys ',
    en: 'Lucellys',
  },
  rawText: {
    es: `<p>«Cuando me reclutó la guerrilla solo me hicieron trabajar. Cuando se me notaba lo femenino me ponían a cocinar. Raspar coca daña las manos. No puedo decir nada de la guerrilla, solo me hicieron trabajar. Pero tenía que ser hombre, porque la regla de las FARC-EP era “LGBT no”».</p><p class="identificador"><i>Mujer trans</p></i>
`,
    fr: `<p>« Quand les guérilleros m’ont recruté, on m’a seulement fait travailler. Dès qu’on a remarqué que j’étais efféminée, on m’a mis à la cuisine. Gratter les feuilles de coca abîme les mains. Je ne peux pas dire grand-chose sur la guérilla ; on m’a juste fait travailler. Mais je devais me comporter comme un vrai homme, parce que la règle des <b>{1}FARC-EP{/1}</b> était “interdit aux LGBT”. »</p><p class="identificador"><i>Femme trans</i></p>
`,
    en: `<p>“When the guerrillas recruited me, they only made me work. Whenever they noticed I was effeminate, they made me cook for them. Scraping coca leaves damages the hands. I can’t say much about the guerrillas; they just made me work. But I had to act like a true man, because the <b>{1}FARC-EP{/1}</b>'s rule was ‘No LGBT.’”</p><p class="identificador"><i>Trans woman</i></p>
`,
  },
  tooltips: {
    1: {
      es: `<p><strong>FARC-EP</strong> — Fuerzas Armadas Revolucionarias de Colombia – Ejército \
del Pueblo.</p>
<p>Organización político-militar. Más contexto (enlace externo): <a href="https://www.un.org/es" \
target="_blank" rel="noopener noreferrer">Naciones Unidas</a>.</p>
<p><strong>Ejemplo de imagen</strong> en tooltip (ruta bajo <code>images/</code>):</p>
<p><img src="images/image4.jpg" alt="Ilustración de ejemplo" width="200"></p>`,
      en: `<p><strong>FARC-EP guerrillas</strong></p>
<p>FARC-EP (<i>Fuerzas Armadas Revolucionarias de Colombia – Ejército del Pueblo</i>) are an insurgent politic-military organization that has existed for over 50 years in Colombia.  </p>`,
      fr: `<p><strong>FARC-EP guerrillas</strong></p>
<p>Les FARC-EP (<i>Fuerzas Armadas Revolucionarias de Colombia – Ejército del Pueblo</i>) sont une organisation politico-militaire insurgée qui existe depuis plus de 50 ans en Colombie. </p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: Belén de los Andaquíes</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): reclutamiento forzado, labor forzada</p><p>Actor armado: FARC-EP</p>`,
    fr: `<p>Lieu : Belén de los Andaquíes</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : recrutement forcé, travail forcé</p><p>Acteur armé : FARC-EP</p>`,
    en: `<p>Place: Belén de los Andaquíes</p><p>Date: N/A</p><p>Victimizing act(s): forced recruitment, forced labor</p><p>Armed actor: FARC-EP</p>`,
  },
};
