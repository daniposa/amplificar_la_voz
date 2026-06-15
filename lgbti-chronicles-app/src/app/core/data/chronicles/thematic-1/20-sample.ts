import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_20: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 84.791, y: 68.981 },
  title: {
    es: 'Ximena',
    fr: 'Ximena',
    en: 'Ximena',
  },
  rawText: {
    es: `<p>«Por allá mataron a muchas peladas que fueron novias de muchachos ahí. Y una cosa es que sean novios y otra que sean combatientes. Por ejemplo, en la comuna 13 hubo una vez una bulla de unas muchachas que se robaron y las encontraron en las areneras sin un seno, empaladas. Eran las novias de un guerrillero, las esposas o las madres con sus bebés. Eso en la comuna 13 se vio mucho. A uno le daba mucho miedo andar al pie de la policía cuando había paramilitares, porque fácilmente se robaban a la gente».</p><p class="identificador"><i>Mujer, mestiza, urbana</i></p>
`,
    fr: `<p>« Là-bas ils ont tué beaucoup de filles qui sortaient avec des garçons de la zone. C’est une chose d’être un petit copain mais c’en est un autre d’être un combattant. Disons que, dans les quartiers de la <b>{1}Comuna 13{/1}</b>, ça a fait beaucoup de bruit quand ils ont enlevé des filles qui ont été trouvées plus tard dans les <b><i>{2}areneras{/2}</i></b>, empalées, avec un sein manquant. Elles étaient les copines d'un guérillero, des épouses, ou des mères avec leurs enfants. C’était habituel dans la Comuna 13. Il devenait très effrayant de passer près de la police quand il y avait des paramilitaires autour, parce que c’était très facile pour eux d’enlever des gens. »</p><p class="identificador"><i>Femme, métisse, citadine</i></p>
`,
    en: `<p>“A lot of young women were killed just because they were dating some guys over there. It is one thing to be someone’s girlfriend, and a very different one to be a guerrilla member. For example, in <b>{1}Comuna 13{/1}</b> hoods, there was once a racket about some girls that had been snatched and were found impaled on the <b><i>{2}areneras{/2}</i></b>, missing one of their breasts. They were guerrilla members’ girlfriends, wives, or mothers with their children. This was a very common sight in Comuna 13. It was very scary to be near the police when the paramilitaries were around, because they would easily snatch people away.”</p><p class="identificador"><i>Woman, mestiza, urbanite</i></p>
`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T1-20.</p>`,
      fr: `<p><strong>Comuna 13</strong></p>
      <p>Un quartier de Medellín qui a historiquement subi un abandon et une violence systémiques, notamment des interventions militaires comme l'Operación Orión, où la communauté s'est retrouvée prise entre guérillas urbaines, groupes paramilitaires et forces de l'État.</p>`,
      en: `<p><strong>Comuna 13</strong></p>
      <p>A district in Medellín that has historically faced systemic abandonment and violence, especially on military interventions like Operación Orión, where the community was caught between urban guerrillas, paramilitary groups, and state forces.</p>`,
    },
    2: {
      es: `<p>Nota de ejemplo para la crónica T1-20.</p>`,
      fr: `<p><strong><i>Areneras</i></strong></p>
      <p>Il s'agit de carrières de sable situées dans la Comuna 13. Comme La Escombrera, ce site était utilisé par des groupes armés illégaux pour enterrer les corps de leurs victimes. C'est un lieu de deuil permanent pour les familles qui cherchent la vérité sur les personnes disparues.</p>`,
      en: `<p><strong><i>Areneras</i></strong></p>
      <p>They are sand quarries located in Comuna 13. Similar to La Escombrera, this site was used by illegal armed groups to bury the bodies of their victims. It is a place of ongoing mourning for families that seek the truth about the disappeared persons.</p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar:  Comuna 13, Medellín</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): desaparición forzada, homicidio, tortura</p><p>Actor armado: guerrilla, grupos paramilitares</p>`,
    fr: `<p>Lieu :  Comuna 13, Medellín</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : disparition forcée, homicide, torture</p><p>Acteur armé : guérilla, groupes paramilitaires</p>`,
    en: `<p>Place:  Comuna 13, Medellín</p><p>Date: N/A</p><p>Victimizing act(s): forced disappearance, homicide, torture</p><p>Armed actor: guerrilla groups, paramilitary groups</p>`,
  },
};
