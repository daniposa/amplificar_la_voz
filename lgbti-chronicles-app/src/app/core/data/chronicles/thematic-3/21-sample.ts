import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T3_21: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 6.093, y: 45.535 },
  title: {
    es: 'Ruby',
    fr: 'Ruby',
    en: 'Ruby',
  },
  rawText: {
    es: `<p>«Empezamos haciendo la sanación del río, lo hicimos en La Balsa, donde montamos en las canoas. Le echamos flores al río, leímos varias poesías alusivas al río y alabaos. Empezamos por reconocer que el río no tenía la culpa, porque [...] los paramilitares hacían lo que te digo, y lo hacían porque tenían sus ventajas en el río. Abrían a la gente porque sabían que así se hundían, los pescados se los comían más rápido y no tenían que alzar el cuerpo, quedaba solo la huesamenta».</p><p><i>Mujer, afrocolombiana, lideresa</i></p>`,
    fr: `<p>« Nous avons commencé par faire les rituels de guérison de la rivière à La Balsa, où nous sommes montés sur les canoës : nous avons fait les éloges de la rivière, lu quelques poèmes en son honneur et chanté des <b><i>{1}alabaos{/1}</i></b> pour ceux qui sont morts. D’abord nous avons reconnu que la rivière n’était pas coupable de notre douleur. Puisque c’était les paramilitaires qui tuaient les personnes et les jetaient dans la rivière car ils y trouvaient leur compte : les paramilitaires ouvraient les corps en sachant qu’ainsi ils couleraient mieux, les poissons les dévoreraient plus vite et les autorités ne pourraient pas les identifier. Il ne resterait que les os. »</p><p><i>Femme afro-colombienne, leader</i></p>`,
    en: `<p>“In La Balsa, we started doing healing rituals with the river. We got into canoes, then we threw off flowers to the river, read some poems about the river, and sang <b><i>{1}alabaos{/1}</i></b> for those who we lost. We started recognizing that what paramilitaries used to do wasn’t the river’s fault. They used to do it because the river gave them some advantages. They cut the bodies open because they knew that way they could sink into the water, and fish could eat them faster. That way, the body wouldn’t resurface because only bones remained.”</p><p><i>Woman, Afro-colombian, leader</i></p>`,
  },
  tooltips: {
    1: {
      es: `<p>Nota de ejemplo para la crónica.</p>`,
      fr: `<p><strong><i>Alabaos</i></strong></p>
      <p>Déclarés Patrimoine Immatériel de la Nation depuis 2014, les <i>alabaos</i> sont des chansons qui rassemblent un grand nombre de personnes lors du décès d'un proche. Selon l'âge du défunt, les chants racontent des histoires narrées par une voix principale, suivies des réponses d'un chœur de femmes.</p>
      <p><a href="https://web.archive.org/web/20251015144635/https://centrodememoriahistorica.gov.co/alabaos-cantos-de-resistencia-y-memoria/" target="_blank" rel="noopener noreferrer">Centro Nacional de Memoria Histórica</a></p>`,
      en: `<p><strong><i>Alabaos</i></strong></p>
      <p>Declared Intangible Heritage of the Nation since 2014, <i>alabaos</i> are songs that bring together a large number of people around the death of a loved one. Depending on the age of the deceased, the songs tell stories narrated by a lead voice with a responding women’s choir.</p>
      <p><a href="https://web.archive.org/web/20251015144635/https://centrodememoriahistorica.gov.co/alabaos-cantos-de-resistencia-y-memoria/" target="_blank" rel="noopener noreferrer">Centro Nacional de Memoria Histórica</a></p>`,
    },
  },
  contextInfo: {
    es: `<p>Lugar: Riosucio, Chocó</p><p>Año: N/A</p><p>Hecho(s) victimizante(s): desaparición forzada, asesinato</p><p>Actor armado: paramilitares</p>`,
    fr: `<p>Lieu : Riosucio, Chocó</p><p>Date : N/A</p><p>Fait(s) victimisant(s) : disparition forcée, assassinat</p><p>Acteur armé : paramilitaires</p>`,
    en: `<p>Place: Riosucio, Chocó</p><p>Date: N/A</p><p>Victimizing act(s): forced disappearance, murder</p><p>Armed actor: paramilitay group</p>`,
  },
};
