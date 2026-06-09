/**
 * Content for the /comments page ("Comentarios de la traducción").
 *
 * Stored as an HTML fragment, like the chronicles content. The same safe tag
 * set is supported and sanitized at render time: `<p>`, `<br>`, `<strong>`,
 * `<em>`, `<a href="https://…" target="_blank" rel="noopener noreferrer">`,
 * `<img src="images/…" alt="…" width="…">`, etc. Edit this freely as HTML.
 */
export const COMMENTS_CONTENT = `
  <h2>Sobre la traducción</h2>
  <p>
    El proceso de traducción de estas crónicas trajo muchos aprendizajes y retos. 
    Nuestro objetivo principal fue mantener la voz auténtica de les narradores en cada idioma.
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
