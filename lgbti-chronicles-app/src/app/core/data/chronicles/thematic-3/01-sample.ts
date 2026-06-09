import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T3_01: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 33.867, y: 73.136 },
  title: {
    es: 'Leticia',
    fr: 'Leticia',
    en: 'Leticia',
  },
  rawText: {
    es: `<p>«Mi compañera a veces está por ahí, así... Cuando ya veo es que está llorando. Yo le digo: “Ay, ¿usted por qué llora?”. Dice: “No, es que yo allá en mi tierra... y por culpa de unos cuantos, irse y dejar todo botado. Dejar todo lo de uno”. Allá hacía trabajo de campo, acá no. Entonces, la situación le cambia a uno de la noche a la mañana, tanto psicológica como físicamente. Uno llega de un conflicto armado a un municipio y cambia de vida, a la fuerza. Tus raíces, tus costumbres, lo que te gustaba hacer... Por lo menos, en Corinto, se hacen las kermeses, pero acá no se hace nada de eso. Como son bastantes fincas, en una vereda se reúnen todas las familias de todas las fincas y hacen fiestas, hacen asados. Acá no. Acá la gente es muy desunida. En Corinto decían: “Vea, vamos a sembrar tales cosas, en tal parte, en tal finca”, y todo el mundo pegaba p’allá».</p><p><i>Mujer lesbiana, indígena, lideresa</i></p>`,
    fr: `<p>« De temps en temps ma compagne est triste, et quand je me rends compte qu’elle pleure je lui demande “qu’est ce qui t’arrives pourquoi tu pleures ?”. Elle me répond “Non c’est que moi sur ma terre... et on doit s’en aller à cause de certains, abandonner son ancien vie”. Là-bas elle travaillait au champ, ici non. Ducoup la situation change du jour au lendemain, autant psychologiquement que physiquement. Après avoir vécu un conflit armé et être arrivé dans une nouvelle ville, la vie change forcément. Tes origines, tes traditions, tout ce que tu aimais faire… Au moins, à Corinto, on faisait des <b><i>{1}kermesses{/1}</i></b>, mais ici on ne fait rien de tout ça. Comme il y a pas mal de <b><i>{2}fincas{/2}</i></b>, presque toutes les familles se réunissent dans un même <b><i>{3}vereda{/3}</i></b> et on fait des fêtes, on fait des barbecues. Ça n'arrive pas ici. Ici c’est chacun pour soi. À Corinto on dit : “Allez, allons semer telles choses, à tel endroit, dans telle <i>finca</i>” et tout le monde y va ».</p><p><i>Femme lesbienne, autochtone, leader</i></p>`,
    en: `<p>“My partner sometimes hangs around, and then, all of a sudden, she starts crying. I ask her, ‘hey, why are you crying?’ She says: ‘I miss my hometown and it is not fair to have to walk away, drop everything and leave it all behind, everything you own, because of other people...’ Back there, she used to work the fields, here she doesn’t. So, the whole situation changes overnight, both psychologically and physically. When you move to a new town because of the armed conflict, life changes by force and so do your roots, your traditions, what you used to enjoy… At least, in Corinto, we used to organize the <b><i>{1}kermesses{/1}</i></b>, but there’s nothing like that here. As there are a lot of <b><i>{2}fincas{/2}</i></b>, all families gather together in the same <b><i>{3}vereda{/3}</i></b> and have parties and barbeques. Here people don’t. People don’t have a sense of community here. In Corinto someone would say, ‘Hey, let’s go plant these things there, in that <i>finca</i>’ and everybody would go.”</p><p><i>Lesbian woman, indigenous, leader</i></p>`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica T3-01.</p>`,
      fr: `<p><strong><i>Kermesses</i></strong></p>
      <p>Une <i>kermesse</i> est une fête populaire et communautaire qui se déroule généralement en plein air. En Colombie, ils ne sont pas nécessairement liés à des contextes scolaires ou religieux.</p>`,
      en: `<p><strong><i>Kermesses</i></strong></p>
      <p>A <i>kermesse</i> is a popular and community festivity normally held outdoors. In Colombia they are not necessarily related to school contexts.</p>`,
    },
    2: {
      es: `<p>Nota de ejemplo para la crónica T3-01.</p>`,
      fr: `<p><strong><i>Finca</i></strong></p>
<p><img src="images/flotantes/finca.avif" alt="Une <i>finca</i> en Antioquia" width="220"></p>
<p><small>Une <i>finca</i> en Antioquia</small></p>
<p>En Colombie, le terme « finca » est habituellement utilisé pour désigner une maison, quel qu’en soit la taille, située dans une zone rurale. Une <i>finca</i> peut désigner aussi bien une petite maison de campagne comme une grande maison avec ses propres terres agricoles. Ces terres agricoles peuvent être des grandes étendues utilisées générer des bénéfices importants, ou elles peuvent être des petits potagers. Cela peut aussi être des terrains vagues, n’ayant pas d’utilité particulière mise à part d’être un lieu où l’on peut passer le temps hors de la ville.</p>`,
      en: `<p><strong><i>Finca</i></strong></p>
<p><img src="images/flotantes/finca.avif" alt="A <i>finca</i> in Antioquia" width="220"></p>
<p><small>A <i>finca</i> in Antioquia</small></p>
<p>In Colombia, “finca” is a term commonly used to refer to a house, regardless of its size, located in a rural area. A <i>finca</i> can range from a small country house to a large house with its own plantation. These agricultural plantations can be large expanses of land intended to produce a significant profit, or they can be small vegetable gardens. They may also be empty plots of land that serve no particular purpose, except to provide a place to spend time outside of any city or village.</p>`,
    },
    3: {
      es: `<p>Nota de ejemplo para la crónica T3-01.</p>`,
      fr: `<p><strong><i>Vereda</i></strong></p>
<p><img src="images/flotantes/vereda.avif" alt="Une <i>finca</i> en Antioquia" width="220"></p>
<p><small><i>Vereda</i> de Punta Larga à Popayán, dans le Cauca</small></p>
<p>Selon le DANE (Département administratif national des statistiques), une <i>vereda</i> est une « division territoriale administrative dans les zones rurales des municipalités, établie par un accord municipal ».</p>
<p>Au-delà de sa définition administrative, une <i>vereda</i> représente également un espace de vie communautaire rural très soudé. Comme les maisons et les <i>fincas</i> sont relativement proches les unes des autres, les habitants ont tendance à développer de bonnes relations avec le voisinage par le biais d'interactions quotidiennes.
</p>
<p><a href="https://web.archive.org/web/20260601215302/https://conceptos.dane.gov.co/conceptos/conceptos/6002/ficha/" target="_blank" rel="noopener noreferrer">DANE</a></p>`,
      en: `<p><strong><i>Vereda</i></strong></p>
<p><img src="images/flotantes/vereda.avif" alt="Une <i>finca</i> en Antioquia" width="220"></p>
<p><small><i>Vereda</i> of Punta Larga in Popayán, Cauca</small></p>
<p>According to the DANE (National Administrative Department of Statistics), a <i>vereda</i> is an “Administrative territorial division in rural areas of municipalities, established by municipal agreement.”</p>
<p>Beyond its administrative definition, a <i>vereda</i> also represents a space of close-knit rural community life. Because homes and <i>fincas</i> are located in relative proximity, residents tend to develop strong neighborly relationships through daily interactions.
</p>
<p><a href="https://web.archive.org/web/20260601215302/https://conceptos.dane.gov.co/conceptos/conceptos/6002/ficha/" target="_blank" rel="noopener noreferrer">DANE</a></p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: Corinto, Cauca</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): desplazamiento forzado</p><p>Actor armado: N/A</p>`,
    fr: `<p>Lieu : Corinto, Cauca</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : déplacement forcé</p><p>Acteur armé : N/A</p>`,
    en: `<p>Place: Corinto, Cauca</p><p>Date: N/A</p><p>Victimizing act(s): forced displacement</p><p>Armed actor: N/A</p>`,
  },
};
