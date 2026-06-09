/**
 * Content for the /comments page ("Comentarios de la traducción").
 *
 * Stored as an HTML fragment, like the chronicles content. The same safe tag
 * set is supported and sanitized at render time: `<p>`, `<br>`, `<strong>`,
 * `<em>`, `<a href="https://…" target="_blank" rel="noopener noreferrer">`,
 * `<img src="images/…" alt="…" width="…">`, etc. Edit this freely as HTML.
 */
export const COMMENTS_CONTENT = `
  <h2>Introducción</h2>
  <p>
    El conflicto armado interno colombiano se enmarca en una lucha insurgente y contrainsurgente que ha durado más de 50 años e involucrado diversos actores: grupos guerrilleros (FARC-EP, ELN, EPL, M-19, etc.), grupos paramilitares (AUC, ACMM, etc.), la participación por acción y por omisión del Estado y sus aparatos represivos (fuerzas policiales, militares, judiciales, etc.) y otros actores políticos y económicos. Con más de nueve millones de víctimas, los distintos hechos victimizantes incluyen homicidios, desapariciones forzadas, violencias sexuales, desplazamientos forzados, amenazas, ataques indiscriminados, secuestros, torturas, reclutamientos forzados, despojos de tierras, entre otros. Según los datos recolectados por la Comisión de la Verdad [CEV] (2022a), el 80% de las víctimas fueron civiles y el hecho victimizante de mayor dimensión fue el desplazamiento forzado con 7&nbsp;752&nbsp;964 víctimas.</p> 

<p>A pesar de contar con antecedentes de violencia política estrechamente conectados con la violencia posterior, la Comisión toma el año 1958, con la creación del Frente Nacional, como hito inicial del conflicto armado y el 2016, con la firma del Acuerdo de Paz, como hito final. La década de 1995 al 2004 fue el periodo con más víctimas, aproximadamente el 45% de las víctimas totales.</p>
<p> <b>Figura 1.</b><br>
Línea de tiempo del conflicto armado colombiano a partir de la periodización de la Comisión de la Verdad<br>
<img 
      src="images/comentarios/linea_tiempo.avif"
      alt="Linea"
      width="300"
    ><br>
    <small><i>Nota</i>. Fuente https://www.comisiondelaverdad.co/hasta-la-guerra-tiene-limites (CEV, 2022b).</small></p>
    <p>Diferenciada pero latente, la violencia del conflicto se presentó en todo el territorio nacional colombiano, rural y urbano, e incluso cuenta con una dimensión internacional. Pueblos, montañas, ciudades, ríos, cañones, selvas, páramos, desiertos, barrios y veredas han sido escenarios del horror, pero también de la esperanza. La Comisión distingue entre 11 regiones: Amazonía; Antioquia, sur de Córdoba y Bajo Atrato Chocoano; Caribe; Centro; Eje Cafetero; Frontera Nororiental; Magdalena Medio; Nariño y Sur del Cauca; Orinoquía; Pacífico; y Valle y Norte del Cauca. Antioquia es el departamento con mayor número total de víctimas con un 18,64&nbsp;% para 2025 (Unidad para las Víctimas, 2025).</p>
    <p><b>Figura 2.</b><br>
    Mapa de Colombia a partir de la regionalización de la CEV<br>
    <img 
      src="images/comentarios/mapa.avif"
      alt="Mapa"
      width="300"
    ><br>
    <small><i>Nota</i>. Fuente https://web.comisiondelaverdad.co/actualidad/noticias/comision-de-la-verdad-inicia-el-despliegue-exploratorio-en-macroregiones (CEV, 2022c).</small></p>
    <p>No solo se vivieron dinámicas territoriales diversas, sino que también los impactos fueron diferenciados según poblaciones específicas: campesinos, mujeres, poblaciones étnicas, población LGBTIQ+, sectores políticos, estudiantes, funcionarios públicos, empresarios, personas con discapacidades y un largo etcétera. En relación con todos estos enfoques diferenciales, se tiene que la población víctima del conflicto armado es la población más empobrecida del país: para el 2024 el 44,6&nbsp;%, el 18,1&nbsp;% y el 18,4&nbsp;% de las víctimas se encontraban en situación de pobreza monetaria, extrema y multidimensional, respectivamente (DANE, 2026).
  </p>
  <h3>Paisajes de traducción</h3>
  <p>
    Para ilustrar la diversidad cultural, incluimos imágenes representativas:
    <br>
    <img 
      src="images/paisajes/paisaje_que_paso.avif"
      alt="Paisaje ¿Qué pasó?"
      width="300"
    >
    <br>
    <img
      src="images/paisajes/paisaje_por_que_paso.avif"
      alt="Paisaje ¿Por qué pasó?"
      width="300"
    >
  </p>
  <h3>Cuestiones de lenguaje</h3>
  <ul>
    <li>
      <strong>Inclusividad:</strong>
      Se empleó lenguaje inclusivo (“les”, “lxs”) en español, adaptando el espíritu inclusivo a francés e inglés.
    </li>
    <li>
      <strong>Referencias locales:</strong>
      Algunas expresiones y referencias propias de Colombia fueron adaptadas o explicadas para el público internacional.
    </li>
    <li>
      <strong>Tono original:</strong>
      Mantuvimos los giros personales y el carácter testimonial aun cuando chocaban con normas gramaticales.
    </li>
  </ul>
  <h3>Agradecimientos</h3>
  <p>
    Agradecemos la revisión editorial de <em>Ana Rodríguez</em> y la colaboración de la comunidad.
    <br>
    <img
      src="images/fondos/fondo_ingles.avif"
      alt="Fondo del proyecto"
      width="300"
    >
    <br>
    Más información en
    <a href="https://espanol.example.org/proyecto" target="_blank" rel="noopener noreferrer">
      la página del proyecto
    </a>.
  </p>
`;
