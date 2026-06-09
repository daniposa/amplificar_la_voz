import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T3_16: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 24.86, y: 43 },
  title: {
    es: 'Yamila',
    fr: 'Yamila',
    en: 'Yamila',
  },
  rawText: {
    es: `<p>«A muchas mujeres trans que vivían de lo que tiene que ver con el estilismo, esos grupos armados, además de amenazarlas, de ejercer presión y violencia psicológica y física, las extorsionaban. Se cobraba mucho. La gente piensa que el tema de la vacuna se presentaba solo en territorios y no era así. Muchos de estos grupos de las AUC o de las guerrillas que tenían presencia en alguna parte de las localidades también cobraban impuesto».</p><p><i>Mujer trans</i></p>`,
    fr: `<p>« Ces groupes armés non seulement menaçaient et faisaient pression sur les femmes trans qui travaillaient dans la cosmétique. Mais ils exerçaient également de la violence psychologique et physique ainsi que de l’extorsion. Ils les faisaient payer beaucoup. Les gens pensent que tout le truc d'extorsion c’était seulement en campagne mais non. Beaucoup de ces groupes de <b>{1}AUC{/1}</b> ou de la guérilla qui étaient dans les banlieues des villes encaissaient aussi des “<b>{2}taxes{/2}</b>” ».</p><p><i>Femme trans</i></p>`,
    en: `<p>“Those trans women who made a living working as stylists were threatened, psychologically and physically abused, and extorted by armed groups. And they charged a lot. They used to present that extortion as protection fees. People think that this only happened in rural areas but that’s not true. Many <b>{1}AUC{/1}</b> or guerrilla groups that had units in some parts of the city, also used to charge people with ‘<b>{2}taxes{/2}</b>.’”</p><p><i>Trans woman</i></p>`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T3-16.</p>`,
      fr: `<p><strong>AUC</strong></p>
      <p>Les Forces unies d'autodéfense de Colombie (Autodefensas Unidas de Colombia) étaient une coalition de groupes paramilitaires d'extrême droite créée en 1997 (Insight Crime).</p>`,
      en: `<p><strong>AUC</strong></p>
      <p>The United Self-Defense Forces of Colombia (Autodefensas Unidas de Colombia) was a coalition of far-right paramilitary groups settled in 1997 (Insight Crime).</p>`,
    },
    2: {
      es: `<p>Nota de ejemplo para la crónica T3-16.</p>`,
      fr: `<p><strong><i>Vacunas</i></strong></p>
      <p>Ces « taxes » sont appelées <i>Vacunas</i>, il s’agit d’extorsions faites par les groupes armés et présentées comme des frais de protection dans les zones rurales et les quartiers.<p>`,
      en: `<p><strong><i>Vacunas</i></strong></p>
      <p>Those “taxes” are called <i>vacunas</i>, they are extortions made by the armed groups and presented as protection fees in both rural areas and neighborhoods.<p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: Bogotá</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): amenazas, extorsión</p><p>Actor armado: AUC, guerrillas</p>`,
    fr: `<p>Lieu : Bogotá</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : menaces, extorsion</p><p>Acteur armé : paramilitaires (AUC) et guérilla</p>`,
    en: `<p>Place: Bogotá</p><p>Date: N/A</p><p>Victimizing act(s): threats, extorsion</p><p>Armed actor: AUC, guerrilla </p>`,
  },
};
