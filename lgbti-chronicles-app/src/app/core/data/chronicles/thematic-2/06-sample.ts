import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T2_06: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 70, y: 55 },
  title: {
    es: 'Violeta',
    fr: 'Violeta',
    en: 'Violeta',
  },
  rawText: {
    es: `<p>«Me desaparecieron a mi hijo porque él no se quería meter en el cuento [...] le insistieron tanto que un día llegaron y le dijeron que les hiciera una carrera y a mi hijo nunca más lo vi. Él era motorratón. Para mí es muy fuerte porque el negro nunca va a salir de ser esclavo, nunca lo van a dejar surgir y lo más triste, que nos ponen a matarnos negros contra negros, como animales sin corazón, sin alma».</p><p><i>Red Mariposas de Alas Nuevas Construyendo Futuro, «Las espinas del racismo»</i></p>`,
    fr: `<p>« Ils ont fait disparaître mon fils, mon propre fils., mon fils bien-aimé… Il ne voulait pas s’impliquer avec eux [...] ils ont tellement insisté qu’un jour, ils lui ont demandé de leur rendre service avec sa moto, et je ne l’ai plus jamais revu. Il faisait le taxi avec sa moto. Pour moi, c’est quelque chose de très dur, parce que les Noirs ne pourront jamais sortir de l’esclavage, on ne les laisse jamais aller de l’avant, et ce qui est encore plus triste, c’est qu’on nous a mis à nous tuer entre nous, à tuer les nôtres, comme des animaux, sans cœur, sans âme. »</p><p><i><b>{1}Red Mariposas de Alas Nuevas Construyendo Futuro{/1}</b>, « les épines du racisme »</i></p>`,
    en: `<p>“My beloved son was disappeared because he didn’t want to be involved in those things [...] They kept going about it for a long time, until one day they asked him to take them somewhere and I never saw my son again. He drove a motorcycle-taxi. It was hard for me because I realized black people will never leave slavery behind, they will never let us advance, and the hardest part is that they make us kill each other, black people against black people, just like heartless and soulless animals.”</p><p><i><b>{1}Red Mariposas de Alas Nuevas Construyendo Futuro{/1}</b>, «The thorns of racism»</i></p>`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T3-32.</p>`,
      fr: `<p><strong>Red  Mariposas de Alas Nuevas</strong></p>
      <p>Le Red Mariposas de Alas Nuevas Construyendo Futuro est un groupe de femmes qui défendent les droits et la vie à Buenaventura. Elles apportent leur soutien à d'autres femmes ayant subi des violences.</p>
      <p><a href="https://web.archive.org/web/20260519094617/https://redmariposasakina.org/" target="_blank" rel="noopener noreferrer">Site officiel</a></p>`,
      en: `<p><strong>Red  Mariposas de Alas Nuevas</strong></p>
      <p>The Red Mariposas de Alas Nuevas Construyendo Futuro is a group of women who defend rights and life in Buenaventura. They support other women who have experienced situations of violence.</p>
      <p><a href="https://web.archive.org/web/20260519094617/https://redmariposasakina.org/" target="_blank" rel="noopener noreferrer">Official website</a></p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: N/A</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): desaparición forzosa, racismo</p><p>Actor armado: N/A</p>`,
    fr: `<p>Lieu : N/A</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : disparition forcée, racisme</p><p>Acteur armé : N/A</p>`,
    en: `<p>Place: N/A</p><p>Date: N/A</p><p>Victimizing act(s): forced dissapearing, racism</p><p>Armed actor: N/A</p>`,
  },
};
