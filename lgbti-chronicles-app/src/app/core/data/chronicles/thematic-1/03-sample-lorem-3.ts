import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_03: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 37.43, y: 14 },
  title: { es: 'Edith', fr: 'Edith', en: 'Edith' },
  rawText: {
    es: `<p>«“Marica sidosa, sabemos cuántos has contagiado, sabemos que tienes gonorrea, te damos tantas horas, no hables con la Policía, porque no logras salir”. Venía huyendo, ya había recorrido varios municipios, y dije: “No, si me matan aquí en este territorio...”. Mi familia me recogió los pasajes para que me fuera para Medellín o para Bogotá y dije: “No, ya no corro más”. Me quedé en el territorio, fui al comandante de la Policía, coloqué la denuncia y resulta que era de los grupos armados; tenía nexos con esa gente. Cuando voy y le llevo el panfleto, se echó a reír con una risa irónica y me dijo: “Pero es que lo que dice el panfleto es verdad”».</p>
<p><i>Mujer trans</i></p> 
`,
    fr: `<p>« “Pédé porteuse du sida, on sait combien de personnes tu as infecté, on sait que tu as la chtouille, on te laisse quelques heures pour partir, ne parle pas à la police, parce que tu ne t’en sortiras pas vivant.” J’étais en fuite, j’avais déjà traversé plusieurs villages et je me suis dis dans ma tête : “Mon Dieu, si on me tue ici...” Ma famille a payé les tickets de bus pour que je me rende à Medellín ou à Bogotá et je leur ai dit : “Non, je ne veux plus fuir.” Je suis resté sur le territoire, je suis allé voir le commandant de police, j’ai porté plainte et j’ai découvert qu’il appartenait aux groupes armés ; il avait des liens avec ces gens-là. Lorsque je lui ai apporté le tract, il a ri d’un air ironique et m’a dit : “Mais c’est vrai, ce que dit le tract.” »</p>
    <p><i>Femme trans</i></p>`,
    en: `<p>“‘You poz fag, we know how many you’ve given it to, we know you have gonorrhea, we’ll give you these many hours, do not talk to the police, because you won’t make it out of here.’ I had been running away and had already gone through several towns when I said to myself: ‘God, what if they kill me here, in my own land…’ My family got me the tickets to leave for Medellín or Bogotá and I said: ‘No, I’m not running away anymore.’ I stayed there, went to the police commander, filed a complaint, and it turned out that he was part of the armed groups; he was linked to those people. When I went to deliver him the note, he started laughing ironically and told me: ‘But what they say in the note is true, though.’”</p>
<p><i>Trans woman</i></p>
`,
  },
  tooltips: {
    1: {
      es: `<p>Término breve con <strong>texto</strong> y enlace.</p>
<p>Más: <a href="https://www.humanrights.gov" target="_blank" rel="noopener noreferrer">Derechos \
humanos (ejemplo)</a>.</p>`,
      fr: `<p>Terme court avec <strong>texte</strong> et lien.</p>
<p><a href="https://www.un.org/fr/human-rights" target="_blank" rel="noopener noreferrer">Droits \
humains (exemple)</a>.</p>`,
      en: `<p>Brief term with <strong>text</strong> and a link.</p>
<p><a href="https://www.un.org/en/human-rights" target="_blank" rel="noopener noreferrer">Human \
rights (example)</a>.</p>`,
    },
    2: {
      es: `<p>Texto + imagen + enlace en un solo tooltip:</p>
<p><img src="images/image5.jpg" alt="Contexto visual" width="180"></p>
<p>Fuente: <a href="https://www.ohchr.org/es" target="_blank" rel="noopener \
noreferrer">ACNUDH</a>.</p>`,
      fr: `<p>Texte + image + lien :</p>
<p><img src="images/image6.jpg" alt="Visuel" width="180"></p>
<p><a href="https://www.ohchr.org/fr" target="_blank" rel="noopener noreferrer">ONU Droits \
humains</a>.</p>`,
      en: `<p>Text + image + link together:</p>
<p><img src="images/image1.jpg" alt="Visual context" width="180"></p>
<p>Source: <a href="https://www.ohchr.org/en" target="_blank" rel="noopener \
noreferrer">OHCHR</a>.</p>`,
    },
  },
  contextInfo: {
    fr: '<p>Lieu : Tierralta, Córdoba</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : menaces, déplacements forcés</p><p>Acteur armé : groupes armés</p>',
    es: '<p>Lugar: Tierralta, Córdoba</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): amenazas, desplazamiento forzado</p><p>Actor armado: grupos armados</p>',
    en: '<p>Place: Tierralta, Córdoba</p><p>Date: N/A</p><p>Victimizing act(s): threats, forced displacement</p><p>Armed actor: armed groups</p>',
  },
};
