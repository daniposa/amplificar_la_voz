import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_40: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 30.260, y: 45 },
  title: {
    es: 'Julieta',
    fr: 'Julieta',
    en: 'Julieta',
  },
  rawText: {
    es: `<p>«Cuando le preguntan a uno: “¿Por qué usted, usted, ¡mujer!, por qué...?”, ya ahí empezamos. Bueno, ¿por qué no le preguntan eso a los camaradas, por ejemplo? Por qué a los hombres no se les cuestiona o no se les pregunta por lo masculino y lo insurgente, o sea, qué significa ser hombre en la insurgencia, o por lo menos yo no lo he visto [...]».</p><p class="identificador"><i>Mujeres excombatientes del EPL</i></p>`,
    fr: `<p>« Quand on nous demande : “mais pourquoi vous, vous, une femme ! Pourquoi ?” On se dit que c’est toujours la même question ; et pourquoi on ne pose pas cette même question aux camarades hommes ? Pourquoi on ne met pas en question leur masculinité et leur insurrection, c’est que, on ne leur demande pas sur leur rôle en tant qu’homme dans l'insurrection, je n’ai jamais vu ça. »</p><p class="identificador"><i>Femmes ex-combattantes du <b>{1}EPL{/1}</b></i></p>`,
    en: `<p>“When you got asked: ‘Why are you here?!..  you, a woman!, why...?’. That’s when everything begins.  Well, so why aren’t the male comrades asked about that too, for example? Why are men never questioned or asked about what it means to be a man or to be insurgent... I mean, what does it mean to be a man in the insurgency, or at least I have never seen that happen [...].”</p><p class="identificador"><i><b>{1}EPL{/1}</b> former female combatant</i></p>`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica.</p>`,
      fr: `<p><strong>EPL</strong></p>
      <p>L'EPL (Ejército Popular de Liberación) est un groupe armé colombien issu d'un mouvement de guérilla marxiste en 1967, mais qui survit aujourd'hui principalement comme une faction dissidente qui ne s'est pas démobilisée en 1991 et qui opère désormais comme une organisation criminelle impliquée dans des activités telles que le trafic de drogue et l'extorsion, en particulier dans la région du Catatumbo.</p>
      <p><a href="https://web.archive.org/web/20260113213105/https://insightcrime.org/colombia-organized-crime-news/epl/" target="_blank" rel="noopener noreferrer">InSight Crime</a></p>`,
      en: `<p><strong>EPL</strong></p>
      <p>The EPL (Ejército Popular de Liberación) is a Colombian armed group that originated as a Marxist guerrilla movement in 1967, but today survives mainly as a dissident faction that did not demobilize in 1991 and now operates as a criminal organization involved in activities such as drug trafficking and extortion, particularly in the Catatumbo region.</p>
      <p><a href="https://web.archive.org/web/20260113213105/https://insightcrime.org/colombia-organized-crime-news/epl/" target="_blank" rel="noopener noreferrer">InSight Crime</a></p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: N/A</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): violencia de género</p><p>Actor armado: N/A</p>`,
    fr: `<p>Lieu : N/A</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : violence sexiste</p><p>Acteur armé : N/A</p>`,
    en: `<p>Place: N/A</p><p>Date: N/A</p><p>Victimizing act(s): gender-based violence</p><p>Armed actor: N/A</p>`,
  },
};
