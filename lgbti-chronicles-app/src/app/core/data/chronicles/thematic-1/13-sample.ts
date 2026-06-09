import type { LocalizedModalContent } from '../../../models/content.model';

export const CHRONICLE_T1_13: LocalizedModalContent = {
  // Hotspot button position over the image (x, y as % of the image, to its center).
  hotspot: { x: 84.583, y: 75.185 },
  title: {
    es: 'Yurik',
    fr: 'Yurik',
    en: 'Yurik',
  },
  rawText: {
    es: `<p>«Llevó a la víctima de ocho años a un campamento de las FARC en el Sur de Bolívar [en 1990] [...]. Estando en el campamento, fue recibido por varios miembros de las FARC-EP, quedando asignado al cuidado del encargado de administrar la economía general (“el encargado”), así que la víctima de reclutamiento forzado debía dormir con él en el almacén de alimentos. Un día cualquiera, el encargado comenzó a mostrarle cómo dos muñecos tenían relaciones sexuales. Luego sacó una pistola y lo violó. Él no podía decirle a nadie y las violaciones continuaron por aproximadamente dos meses. Un día, una guerrillera notó que él sangraba en sus genitales, así que le dijo que durante la noche dejara abierta la puerta del lugar donde dormía. La víctima obedeció y esa noche la guerrillera pasó y vio cómo abusaban de él. Inmediatamente comenzó a golpear al agresor y eso llamó la atención de los demás en el campamento. Iban a matarlo, pero al final decidieron expulsarlo. Además, prohibieron que se hablara del tema».</p><p><i>Hombre</i></p>
`,
    fr: `<p>« On a emmené la victime âgée de 8 ans dans un camp des <b>{1}FARC{/1}</b> situé dans le sud de Bolívar [en 1990] [...]. À son arrivée, il a été accueilli par plusieurs membres des FARC-EP et on a confié la garde de l’enfant a l’homme responsable de la gestion des finances (“el encargado”). Ainsi, la victime du recrutement forcé devait dormir avec cet homme dans l’entrepôt alimentaire. Un jour, l’homme a montré à la victime comment deux poupées s’engageaient dans des actes sexuels ; ensuite, il l’a menacé avec un pistolet et l’a violé. La victime ne pouvait en parler à personne et les viols ont continué pendant environ deux mois. Un jour, une guérillera a remarqué que la victime saignait des parties génitales et lui a demandé de laisser la porte, de là où il dormait, ouverte pendant la nuit. La victime a obéi, cette même nuit, la guérillera est passée et a vu comment l'homme abusait de lui. La guérillera s’est rapidement mise à frapper l’agresseur, ce qui a attiré l’attention de tous les autres membres du camp. Ils allaient tuer l'homme, mais ils ont finalement décidé de simplement le chasser. De plus, on a interdit de parler de ce sujet. »</p><p><i>Homme</i></p>
`,
    en: `<p>“[In 1990], he took the 8-year-old victim to a <b>{1}FARC{/1}</b> camp located in the south of Bolívar... Upon arriving, he was received by several members of the FARC-EP group and assigned to the care of the individual responsible for general economy management: ‘el encargado.’ So, the victim of forced recruitment was forced to sleep in the food warehouse with the man.  One day, the man showed the victim two dolls having sex. Then, he pulled out a gun and raped him. He couldn’t tell anyone about it, and the man kept raping him for about two months. One day, a female guerrilla member noticed that the victim was bleeding from his genitals, so she asked him to leave the door to his room open during the night. The victim did so, and that same night the female guerrilla passed by and saw the man abusing him. Quickly, she began hitting the aggressor, which drew everyone’s attention at the camp. They were going to kill the man, but they ended up just kicking him out and forbidding everyone to talk about the subject.”</p><p><i>Man</i></p>
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
    es: `<p>Lugar: sur de Bolívar</p><p>Año: 1990 </p><p>Hecho(s) victimizante(s): violencia sexual, reclutamiento forzado, abuso físico, intento de homicidio</p><p>Actor armado: FARC-EP</p>`,
    fr: `<p>Lieu : sud du département de Bolivar</p><p>Date : 1990</p><p>Fait(s) victimisant(s) : violence sexuelle, recrutement forcé, abus physiques, tentative d'homicide</p><p>Acteur armé : FARC-EP</p>`,
    en: `<p>Place: south of the department of Bolívar</p><p>Date: 1990</p><p>Victimizing act(s): sexual violence, forced recruitment, physical abuse, attempted murder</p><p>Armed actor: FARC-EP</p>`,
  },
};
