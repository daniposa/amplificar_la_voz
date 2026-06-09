import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T3_03: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 37.43, y: 15 },
  title: {
    es: 'Beatriz',
    fr: 'Beatriz',
    en: 'Beatriz',
  },
  rawText: {
    es: `<p>«Con lo que pasó, ella no quiso estar más conmigo. Nos separamos. Yo le dije que nos fuéramos a un tratamiento psicológico, pero ella dijo que no quería. Yo sí fui al tratamiento; hasta me revisó el médico, porque uno no sabe qué enfermedades tienen. Me contagiaron una enfermedad venérea. Estuve en tratamiento y ya me curé, pero de la enfermedad que me quedó en el alma nunca. Esa no se cura. Muchas secuelas... me dio sífilis, me dio gonorrea, se me infectó un ovario; no pude tener más familia. Fue un tratamiento largo. Me iban a operar de la matriz, porque también me quedó muy lastimada. Fueron unas bestias; los otros no fueron tan bestias. Había una mujer gay, entre estos de la AUC, que le introducía un palo a uno. ¡Una mujer! Una mujer en ese grupo».</p><p><i>Mujer lesbiana, afrocolombiana</i></p>`,
    fr: `<p>« Après ce qui s’est passé, elle n’a pas voulu qu’on continue ensemble. Nous nous sommes quittées. Je lui ai proposé de consulter ensemble un psychologue, mais elle a dit qu’elle ne voulait pas. C’est moi qui en ai consulté un. Et je me suis aussi faite examiner par un médecin parce qu’on ne savait pas s’ils portaient des maladies. Au final, j’ai été infectée par une maladie vénérienne. J’ai été traitée et j’ai déjà guéri physiquement mais mon âme reste malade. Et ça, ça ne se soigne jamais. Je suis restée avec pas mal de séquelles... j’ai eu la syphilis, la gonorrhée et mon ovaire a été infecté donc je n’ai plus pu avoir d’autres enfants. Ça a été un long traitement. J’allais être opérée de l’utérus puisqu’il a été particulièrement touché. Ils ont vraiment été sauvages, les autres n’ont été pas si brutal. Il y avait une femme homo dans le groupe des <b>{1}AUC{/1}</b> qui a empalé quelqu’un. Une femme ! Une femme dans ce groupe ! ».</p><p><i>Femme lesbienne, afro-colombienne</i></p>`,
    en: `<p>“After what happened, she didn’t want to be with me anymore. We broke up. I suggested we could go to therapy, but she refused. I did go. I even had a doctor check me up because you never know what kinds of disease those men may have. Well, they gave me a venereal disease. I got treatment for it, and I’m already cured although from the sickness of my soul, I’ll never be. That sickness will never go away. I still have some side effects… I had syphilis, I had gonorrhea, one of my ovaries got infected so I could no longer get pregnant. It was a long treatment. I was going to have my uterus removed because it was badly hurt. These men were brutal; the other ones weren’t such beasts. Among these <b>{1}AUC{/1}</b> men, there was a gay woman that raped you with a stick. A woman! A woman from that group.”</p><p><i>Lesbian woman, Afro-Colombian</i></p>`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T3-03.</p>`,
      fr: `<p><strong>AUC</strong></p>
      <p>Les Forces unies d'autodéfense de Colombie (Autodefensas Unidas de Colombia) étaient une coalition de groupes paramilitaires d'extrême droite créée en 1997 (Insight Crime).</p>`,
      en: `<p><strong>AUC</strong></p>
      <p>The United Self-Defense Forces of Colombia (Autodefensas Unidas de Colombia) was a coalition of far-right paramilitary groups settled in 1997 (Insight Crime).</p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: N/A</p><p>Año: 2013</p><p>Hecho(s) victimizante(s): violencia sexual</p><p>Actor armado: paramilitares (AUC)</p>`,
    fr: `<p>Lieu : N/A</p><p>Date : 2013</p><p>Fait(s) victimisant(s) : violence sexuelle</p><p>Acteur armé : paramilitaires (AUC)</p>`,
    en: `<p>Place: N/A</p><p>Date: 2013</p><p>Victimizing act(s): sexual violence</p><p>Armed actor: paramilitary group (AUC)</p>`,
  },
};
