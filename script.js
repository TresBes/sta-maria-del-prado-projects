/* ============================================================
   APP 25/26 · script.js (3 proyectos independientes)
   - Proyecto CITE (todos los campos actuales + Dificultades) · Publica en Blogger
   - Cultura Emprendedora (coordinador, título, tiempo, texto, fotos, vídeos) · Publica en Blogger
   - Aula del Futuro (maestro/s, título, texto, fotos, vídeos) · Publica en Blogger
============================================================ */

/* ============================================================
   LISTAS DE OPCIONES
============================================================ */

// Coordinadores (CITE / Cultura Emprendedora)
const coordinadores = [
  'Javier Blanco Ávila',
  'Susana Bordes Escalera',
  'María Ángeles Castaño Barriga',
  'Sergio Chanclón Parra',
  'Esther María Díaz Sierra',
  'Jorge Fernández Solana',
  'Alba González Rodríguez',
  'Susana Lobato Muñoz',
  'Noelia Molina Rubio',
  'María del Campo Muñoz Collado',
  'Encarnación Ortiz Fernández',
  'Lucía Pajares Moreno',
  'María Asunción Quintana Castro',
  'María Remedios Román Román',
  'María Luisa Santos Martínez',
  'Cosme A. Tomé Fernández',
];

// Maestros (Aula del Futuro)
const maestrosAulaDelFuturo = [
  'Javier Blanco Ávila',
  'María Ángeles Castaño Barriga',
  'Sergio Chanclón Parra',
  'Esther María Díaz Sierra',
  'Jorge Fernández Solana',
  'Alba González Rodríguez',
  'Susana Lobato Muñoz',
  'Noelia Molina Rubio',
  'María del Campo Muñoz Collado',
  'Lucía Pajares Moreno',
  'María Asunción Quintana Castro',
  'María Remedios Román Román',
  'María Luisa Santos Martínez',
  'Cosme A. Tomé Fernández',
  'M. Puerto Vega Díaz'
];

const grupos = [
  'Alumnado de la clase de Infantil 3 años.',
  'Alumnado de la clase de Infantil 4 años.',
  'Alumnado de la clase de Infantil 5 años.',
  'Alumnado de la clase de 1º de Primaria.',
  'Alumnado de la clase de 2º de Primaria.',
  'Alumnado de la clase de 3º de Primaria.',
  'Alumnado de la clase de 4º de Primaria.',
  'Alumnado de la clase de 5º de Primaria.',
  'Alumnado de la clase de 6º de Primaria.'
];

const relProyecto = [
'La actividad se integrará en la revista digital del centro como una noticia que documenta el desarrollo de la experiencia educativa realizada en el marco del proyecto CITE. A través de esta publicación se pretende difundir el trabajo realizado en el aula, visibilizar el proceso de aprendizaje del alumnado y compartir las buenas prácticas desarrolladas dentro del proyecto.',

'El alumnado participa activamente en la elaboración de contenidos que serán publicados en la revista digital del centro dentro del proyecto CITE. Durante el proceso, los estudiantes investigan, seleccionan información relevante y organizan los contenidos para su difusión, desarrollando competencias relacionadas con la comunicación, la creatividad y el uso responsable de herramientas digitales.',

'El alumnado realiza entrevistas y elabora contenidos informativos que formarán parte de la próxima edición de la revista digital del centro. Esta actividad permite trabajar la expresión oral y escrita, la capacidad de síntesis y la organización de la información, al mismo tiempo que se fomenta la participación activa del alumnado en la difusión de las actividades del proyecto CITE.',

'El alumnado utiliza herramientas tecnológicas para buscar, seleccionar y analizar información relevante relacionada con la actividad desarrollada dentro del proyecto CITE. Este proceso favorece el desarrollo de la competencia digital, el pensamiento crítico y la capacidad de gestionar información procedente de distintas fuentes para aplicarla posteriormente en el trabajo realizado en el aula.',

'El alumnado participa como protagonista en la creación de contenidos multimedia que serán incluidos en la próxima edición de la revista digital del centro. A través de la elaboración de fotografías, vídeos o presentaciones digitales, el alumnado documenta el desarrollo de la actividad y contribuye a difundir las experiencias educativas vinculadas al proyecto CITE.'
];

const objetivosCite = [
'Esta actividad se enmarca en el proyecto CITE del centro y tiene como objetivo principal integrar el uso de tecnologías en el aula de forma natural y significativa, fomentando la creatividad, la motivación, la autonomía y la participación activa del alumnado a través de experiencias de aprendizaje contextualizadas y adaptadas a su nivel.',

'Esta actividad se enmarca en el proyecto CITE del centro y tiene como objetivos principales desarrollar la competencia digital del alumnado, favorecer el trabajo cooperativo y mejorar la resolución de problemas, promoviendo un aprendizaje activo, motivador y orientado a la aplicación práctica de los contenidos trabajados en el aula.',

'Esta actividad se enmarca en el proyecto CITE del centro y persigue integrar la innovación tecnológica en el proceso de enseñanza-aprendizaje, favoreciendo la investigación, la creatividad, la comunicación y la aplicación de los conocimientos adquiridos a situaciones reales del entorno educativo.',

'Esta actividad se enmarca en el proyecto CITE del centro y tiene como finalidad desarrollar el pensamiento computacional, la lógica, la autonomía y la capacidad de expresión del alumnado, combinando metodologías activas con el uso de recursos tecnológicos en un entorno de aprendizaje motivador y participativo.'
];

const metodologiasActivasLista = [
  'Aprendizaje basado en proyectos (ABP)',
  'Aprendizaje cooperativo',
  'Aprendizaje basado en problemas',
  'Aprendizaje servicio (ApS)',
  'Gamificación',
  'Clase invertida (Flipped Classroom)',
  'Trabajo por rincones',
  'Trabajo por estaciones',
  'Rutinas de pensamiento',
  'Investigación guiada',
  'Aprendizaje basado en retos',
  'Aprendizaje por descubrimiento',
  'Aprendizaje significativo',
  'Aprendizaje colaborativo',
  'Aprendizaje interdisciplinar',
  'Pensamiento visible',
  'Uso de TIC / tecnología educativa',
  'Storytelling educativo',
  'Aprendizaje experiencial',
  'Diseño y creación de productos digitales'
];

const tiemposPreparacion = [
  '1 hora','2 horas','3 horas','4 horas','5 horas',
  '6 horas','7 horas','8 horas','9 horas','10 horas','Más de 10 horas'
];

const herramientasTec = [
  'Ordenador','Tablet','Pizarra digital','Cámara de Vídeo','Cámara de fotos',
  'Mesa de mezclas','Microfonía','Robot','Gafas realidad virtual'
];

const paginasWeb = [
  'Explorador','Abiex web','Blog del Centro','Librarium','Youtube',
  'R.A.E.','Kahoot','Pixel Art','Genially','Quizziz',
  'Libro digital','Google Bing Imagen Creator IA'
];

const softwareEspecifico = [
  'Word','Procesador de texto','Canva','Audacity','Genially','Quizziz','Kahoot'
];

const elementosMultimediaTec = [
  'Imágenes','Vídeos','Presentaciones','Gifs','Audios','Infografías'
];

const elementosDocu = [
  'Imágenes','Vídeos','Revista Crónica Manzanete','Programa de Radio'
];

const tiempoSesiones = Array.from({ length: 10 }, (_, i) =>
  i === 0 ? '1 sesión' : `${i + 1} sesiones`
);

const tiempoHoras = Array.from({ length: 10 }, (_, i) =>
  `${i + 1} hora${i > 0 ? 's' : ''}`
);

const tiempoMinutos = [5,10,15,20,25,30,35,40,45,50,55].map(n => `${n} minutos`);
const numeroEvidencias = [
  'Evidencia 1',
  'Evidencia 2',
  'Evidencia 3',
  'Evidencia 4',
  'Evidencia 5'
];

const dificultadesPorcentaje = [
'Ninguna',
'El porcentaje de trabajo con el alumnado fue inferior al previsto debido a las limitaciones de tiempo disponibles dentro del horario semanal.',
'Durante el desarrollo de la actividad fue necesario dedicar más tiempo del previsto a la explicación inicial y al acompañamiento del alumnado.',
'La disponibilidad de los recursos tecnológicos del centro condicionó el tiempo efectivo de trabajo con el alumnado.',
'El ritmo de aprendizaje del alumnado y la diversidad de niveles dentro del grupo hicieron necesario dedicar más tiempo al apoyo individualizado.',
'La organización de otras actividades del centro redujo el tiempo disponible para el desarrollo completo de la actividad.',
'Durante el desarrollo de la actividad surgieron pequeños ajustes organizativos y técnicos que requirieron dedicar tiempo adicional.',
'La actividad requirió una fase de preparación previa más amplia de lo previsto.',
'Parte del tiempo se destinó a resolver incidencias técnicas relacionadas con los dispositivos o la conexión a internet.',
'Fue necesario dedicar más tiempo a la organización del grupo y distribución de tareas.',
'El alumnado necesitó más tiempo para familiarizarse con las herramientas utilizadas.',
'La actividad se desarrolló en varias sesiones breves que obligaron a reorganizar el trabajo.',
'Se priorizó el acompañamiento del alumnado para garantizar la comprensión de la actividad.',
'La actividad se adaptó a las características del grupo modificando el ritmo de trabajo previsto.',
'Parte del tiempo se dedicó a tareas organizativas necesarias para el correcto desarrollo.',
];
/* ============================================================
   DIFICULTADES ENCONTRADAS — RESPUESTAS MODELO
============================================================ */

const dificultadesEncontradasModelo = [
'Ninguna.',

'Durante el desarrollo de la actividad fue necesario dedicar más tiempo del previsto a la explicación inicial del funcionamiento de las herramientas utilizadas, ya que parte del alumnado no estaba familiarizado con su uso.',

'El alumnado necesitó un tiempo adicional para familiarizarse con los recursos tecnológicos empleados en la actividad, lo que obligó a adaptar el ritmo de trabajo inicialmente previsto.',

'La diversidad de ritmos de aprendizaje dentro del grupo hizo necesario reforzar las explicaciones y acompañar de forma más individualizada a parte del alumnado, ajustando la planificación inicial.',

'Se produjeron pequeñas incidencias técnicas relacionadas con los dispositivos o la conexión a internet que ralentizaron el desarrollo de la actividad en determinados momentos.',

'Fue necesario reorganizar algunos momentos de la actividad para adaptarla mejor al ritmo de trabajo del alumnado y garantizar la participación de todo el grupo.',

'La actividad requirió realizar ajustes durante su desarrollo para facilitar la comprensión de las tareas y asegurar la implicación activa del alumnado.',

'El tiempo disponible dentro del horario del aula condicionó parcialmente el desarrollo completo de la actividad, siendo necesario priorizar algunos aspectos sobre otros.',

'Parte del tiempo se dedicó a resolver dudas del alumnado relacionadas con el uso de las herramientas digitales empleadas en la actividad.',

'Fue necesario dedicar más tiempo a la organización del trabajo cooperativo entre los grupos, especialmente en las fases iniciales de la actividad.'
];

/* ============================================================
   Google Docs por docente (CITE)
   - Pendientes: Lucía y Jorge
============================================================ */
const DOCS_CITE_POR_DOCENTE = {
  "Javier Blanco Ávila":
    "https://docs.google.com/document/d/1jsRGz27fobXD_QXzheAhsEQIG10x-ZYanL3mZBhbR_I/edit?pli=1&tab=t.0",

  "Susana Bordes Escalera":
    "https://docs.google.com/document/d/1vWlQZ00SAUdRucni9lu8IKpKq4X9EB1MxF3XtWh-98s/edit?pli=1&tab=t.0",

  "María Ángeles Castaño Barriga":
    "https://docs.google.com/document/d/1jsRGz27fobXD_QXzheAhsEQIG10x-ZYanL3mZBhbR_I/edit?pli=1&tab=t.0",

  "Sergio Chanclón Parra":
    "https://docs.google.com/document/d/1IJz1Yz028rkkzx--trX0ftnegiC-Qn0OEG7VJpYYW4g/edit?pli=1&tab=t.0",

  "Jorge Fernández Solana":
  "https://docs.google.com/document/d/1XHn_KBvriw8BdNci4eYvPpM_hG5T-pfDIruWdymvDAU/edit",

  "Lucía Pajares Moreno":
  "https://docs.google.com/document/d/1CFX3k5RWaBVi92RrvsQmLUye17dzbJxAvt46BzPMiPI/edit",
  
  "Alba González Rodríguez":
    "https://docs.google.com/document/d/1pcdoDejTG0MkYoj6gJ-J770RuY8_D2hW0g1kdCQgslE/edit?tab=t.0",

  "Susana Lobato Muñoz":
    "https://docs.google.com/document/d/1q11w-e4Rg4T3slYYqSTWKDY6C-jQ0E8JXVRe6WlOQGE/edit?tab=t.0",

  "Noelia Molina Rubio":
    "https://docs.google.com/document/d/17r-3XhjuCZ0MxEOapjeUyGmI-WpDgFyP4PiiB43NO_4/edit?pli=1&tab=t.0",

  "María del Campo Muñoz Collado":
    "https://docs.google.com/document/d/1WK7CsX3rVvHmg8zre7vzLDk1tzIaSGz_F1_loK-q_88/edit?pli=1&tab=t.0",

  "Encarnación Ortiz Fernández":
    "https://docs.google.com/document/d/1-1F4THTHhd41cFAB-UEc2944Tdi3b4bXxNSzS9vs8F0/edit?pli=1&tab=t.0",

  "María Asunción Quintana Castro":
    "https://docs.google.com/document/d/1lwRIjbAoaxRi8Uv7A7VdQvG1jEcvTHoXQpxZAVvuZRc/edit?pli=1&tab=t.0",

  "María Remedios Román Román":
    "https://docs.google.com/document/d/1LsuoAWL1s1eQ1nJ9ZcVvA0Vk7AVN1ViwDvkvvqBVhBs/edit?usp=sharing",

  "María Luisa Santos Martínez":
    "https://docs.google.com/document/d/1WK7CsX3rVvHmg8zre7vzLDk1tzIaSGz_F1_loK-q_88/edit?pli=1&tab=t.0",

  "Cosme A. Tomé Fernández":
    "https://docs.google.com/document/d/1zi5yumyR63iqF00f5kDh-Rqct7eUqXXPgLAYneDdmSo/edit?tab=t.0",
};

/* ============================================================
   ESTADO
============================================================ */
var PROYECTO_ACTUAL = null; // 'CITE' | 'EMPRENDEDORA' | 'AULA_DEL_FUTURO'


/* ============================================================
   HELPERS (SIN MACHACAR $)
============================================================ */
function jq(sel) {
  return window.jQuery ? window.jQuery(sel) : null;
}

function cargarOpciones(id, lista, placeholder = "Selecciona una opción") {
  const $sel = jq(id);
  if (!$sel || !$sel.length) return;

  $sel.empty();

  const esMultiple = $sel.prop("multiple");

  // En selects simples, mostrar texto visible por defecto
  if (!esMultiple) {
    const opcionPlaceholder = new Option(placeholder, "");
    opcionPlaceholder.selected = true;
    opcionPlaceholder.disabled = false;
    $sel.append(opcionPlaceholder);
  }

  lista.forEach(x => $sel.append(new Option(x, x)));

  // En simples, dejar visible el placeholder
  // En múltiples, dejar vacío
  if (esMultiple) {
    $sel.val(null).trigger("change");
  } else {
    $sel.val("");
  }
}

function safeDestroySelect2(id) {
  const $el = jq(id);
  if (!$el || !$el.length) return;
  if ($el.hasClass('select2-hidden-accessible')) $el.select2('destroy');
}

function initSelect2Multiple(id, lista, placeholder = "Selecciona una opción") {
  const $el = jq(id);
  if (!$el || !$el.length) return;

  safeDestroySelect2(id);

  $el.off();
  $el.empty();
  $el.attr("multiple", "multiple");

  (lista || []).forEach(texto => {
    $el.append(new Option(texto, texto, false, false));
  });

  $el.select2({
    placeholder: placeholder,
    width: "100%",
    closeOnSelect: false,
    allowClear: false,
    dropdownParent: $el.closest(".bloque"),
    minimumResultsForSearch: 0
  });

  $el.val([]).trigger("change");

  setTimeout(() => {
    const $container = $el.next(".select2-container");
    const $search = $container.find(".select2-search__field");
    $search.attr("placeholder", placeholder);
  }, 0);
}

function initSelect2Single(id, placeholder = "Selecciona una opción") {
  const $el = jq(id);
  if (!$el || !$el.length) return;

  safeDestroySelect2(id);

  $el.select2({
    placeholder: placeholder,
    width: "100%",
    allowClear: true,
    dropdownParent: $el.closest('.bloque'),
    dir: "ltr",
    minimumResultsForSearch: Infinity
  });

  // 🔴 CLAVE: limpiar correctamente
  $el.val(null).trigger("change.select2");
}

function setDisplay(id, show) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = show ? "" : "none";
}

function limpiarErroresVisuales() {
  document.querySelectorAll('.bloque').forEach(b => b.classList.remove('error'));
}

/* ============================================================
   LIMPIAR ERROR DE BLOQUE AL EDITAR
============================================================ */

function initLimpiezaErroresDinamica() {
  quitarErrorBloqueAlEditar('#coordinadores, #tituloEvidencia, #numeroEvidencia', 'cite1');
  quitarErrorBloqueAlEditar('#grupos, #objetivosCite, #relProyecto, #descripcion, #metodologiasActivas, #dificultades, #dificultadesEncontradasModelo', 'cite2');
  quitarErrorBloqueAlEditar('#descripcionPreparados, #tiempoPreparacion', 'cite3');
  quitarErrorBloqueAlEditar('#herramientasTec, #paginasWeb, #softwareEspecifico, #elementosMultimediaTec, #otrosTec', 'cite4');
  quitarErrorBloqueAlEditar('#tiempoSesiones, #tiempoHoras, #tiempoMinutos', 'cite5');
  quitarErrorBloqueAlEditar('#dificultadesModelo, #dificultadesPorcentajeTrabajo', 'cite5b');
  quitarErrorBloqueAlEditar('#elementosDocu', 'cite6');
  quitarErrorBloqueAlEditar('#textoCite', 'cite7');

  quitarErrorBloqueAlEditar('#coordinadoresEmp, #tituloEmp', 'emp1');
  quitarErrorBloqueAlEditar('#tiempoSesionesEmp, #tiempoHorasEmp, #tiempoMinutosEmp', 'emp2');
  quitarErrorBloqueAlEditar('#textoEmp', 'emp3');

  quitarErrorBloqueAlEditar('#maestrosAulaDelFuturo, #tituloAulaDelFuturo, #textoAulaDelFuturo', 'aula1');
  quitarErrorBloqueAlCambiarMultimedia('#previewCiteMedia', 'cite6');
quitarErrorBloqueAlCambiarMultimedia('#videosCiteMedia', 'cite6');
}
/* ============================================================
   DROPZONE / IMÁGENES (GENÉRICO)
============================================================ */
function handleFiles(preview, files) {
  [...files].forEach(file => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = e => {
      const wrap = document.createElement("div");
      wrap.className = "img-wrapper";

      const img = document.createElement("img");
      img.src = e.target.result;
      img.className = "vista-img";

      const btn = document.createElement("button");
      btn.className = "delete-btn";
      btn.textContent = "×";
      btn.onclick = () => wrap.remove();

      wrap.appendChild(img);
      wrap.appendChild(btn);
      preview.appendChild(wrap);
      preview.dispatchEvent(new Event("contenidoCambiado", { bubbles: true }));
    };
    reader.readAsDataURL(file);
  });
}

function wireDropzone(zoneId, previewId) {
  const zone = document.getElementById(zoneId);
  const preview = document.getElementById(previewId);
  if (!zone || !preview) return;

  zone.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;

    input.addEventListener("change", (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      handleFiles(preview, ev.target.files);
    });

    input.click();
  });

  zone.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.stopPropagation();
    zone.classList.add("over");
  });

  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
    zone.classList.add("over");
  });

  zone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.stopPropagation();
    zone.classList.remove("over");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    zone.classList.remove("over");
    handleFiles(preview, e.dataTransfer.files);
  });
}


/* ============================================================
   VÍDEOS (GENÉRICO)
============================================================ */

let contenedorVideoActivo = null;

function extraerIdYoutube(url) {
  if (!url) return null;

  const limpia = url.trim();

  return (
    limpia.split("v=")[1]?.split("&")[0] ||
    limpia.split("youtu.be/")[1]?.split("?")[0] ||
    limpia.split("embed/")[1]?.split("?")[0] ||
    null
  );
}

function cerrarModalYoutube() {
  const modal = document.getElementById("modalYoutube");
  const input = document.getElementById("inputYoutubeUrl");

  if (modal) modal.style.display = "none";
  if (input) input.value = "";

  contenedorVideoActivo = null;
}

function abrirModalYoutube(contenedorId) {
  contenedorVideoActivo = contenedorId;

  const modal = document.getElementById("modalYoutube");
  const input = document.getElementById("inputYoutubeUrl");

  if (!modal || !input) return;

  input.value = "";
  modal.style.display = "flex";

  setTimeout(() => input.focus(), 50);
}

function insertarVideoYoutube(contenedorId, url) {
  const id = extraerIdYoutube(url);

  if (!id) {
    mostrarMensaje("❌ URL de YouTube no válida");
    return;
  }

  const wrap = document.createElement("div");
  wrap.className = "video-wrap";

  const iframe = document.createElement("iframe");
  iframe.width = "300";
  iframe.height = "170";
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.allowFullscreen = true;

  const btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.textContent = "×";
  btn.onclick = () => {
    wrap.remove();

    const cont = document.getElementById(contenedorId);
    if (cont) {
      cont.dispatchEvent(new Event("contenidoCambiado", { bubbles: true }));
    }
  };

  wrap.appendChild(iframe);
  wrap.appendChild(btn);

  const cont = document.getElementById(contenedorId);
  if (cont) {
    cont.appendChild(wrap);
    cont.dispatchEvent(new Event("contenidoCambiado", { bubbles: true }));
  }
}

function agregarVideo(contenedorId) {
  abrirModalYoutube(contenedorId);
}


/* ============================================================
   MENSAJE GENÉRICO
============================================================ */
function mostrarMensaje(texto) {
  const aviso = document.createElement("div");
  aviso.style.position = "fixed";
  aviso.style.inset = "0";
  aviso.style.background = "rgba(0,0,0,0.45)";
  aviso.style.display = "flex";
  aviso.style.alignItems = "center";
  aviso.style.justifyContent = "center";
  aviso.style.zIndex = "5000";

  const caja = document.createElement("div");
  caja.style.background = "white";
  caja.style.padding = "30px 40px";
  caja.style.borderRadius = "14px";
  caja.style.fontSize = "20px";
  caja.style.fontWeight = "bold";
  caja.style.color = "#003366";
  caja.style.textAlign = "center";
  caja.style.border = "3px solid #2d6cdf";
  caja.style.boxShadow = "0 6px 25px rgba(0,0,0,0.4)";
  caja.innerHTML = texto;

  aviso.appendChild(caja);
  document.body.appendChild(aviso);

  setTimeout(() => aviso.remove(), 2200);
}

window.agregarVideo = agregarVideo;


/* ============================================================
   CONFIGURACIÓN SELECTS
============================================================ */

const CONFIG_SELECTS = [

  // CITE
  { id:'#coordinadores', lista:coordinadores, tipo:'multiple', ph:'Selecciona coordinador/a' },
  { id:'#grupos', lista:grupos, tipo:'multiple', ph:'Selecciona grupo/s' },
  { id:'#objetivosCite', lista:objetivosCite, tipo:'multiple', ph:'Selecciona objetivo/s' },
  { id:'#relProyecto', lista:relProyecto, tipo:'multiple', ph:'Selecciona una opción' },
  { id:'#metodologiasActivas', lista:metodologiasActivasLista, tipo:'multiple', ph:'Selecciona metodologías' },

  { id:'#herramientasTec', lista:herramientasTec, tipo:'multiple', ph:'Selecciona una opción' },
  { id:'#paginasWeb', lista:paginasWeb, tipo:'multiple', ph:'Selecciona una opción' },
  { id:'#softwareEspecifico', lista:softwareEspecifico, tipo:'multiple', ph:'Selecciona una opción' },
  { id:'#elementosMultimediaTec', lista:elementosMultimediaTec, tipo:'multiple', ph:'Selecciona una opción' },
  { id:'#elementosDocu', lista:elementosDocu, tipo:'multiple', ph:'Selecciona una opción' },

  { id:'#tiempoPreparacion', lista:tiemposPreparacion, tipo:'single', ph:'Selecciona una opción' },
  { id:'#tiempoSesiones', lista:tiempoSesiones, tipo:'single', ph:'Selecciona una opción' },
  { id:'#tiempoHoras', lista:tiempoHoras, tipo:'single', ph:'Selecciona una opción' },
  { id:'#tiempoMinutos', lista:tiempoMinutos, tipo:'single', ph:'Selecciona una opción' },
  { id:'#numeroEvidencia', lista:numeroEvidencias, tipo:'single', ph:'Selecciona una opción' },

  { id:'#dificultadesModelo', lista:dificultadesPorcentaje, tipo:'multiple', ph:'Selecciona una o varias opciones' },
  { id:'#dificultadesEncontradasModelo', lista:dificultadesEncontradasModelo, tipo:'multiple', ph:'Selecciona una o varias opciones' },

  // Cultura Emprendedora
  { id:'#coordinadoresEmp', lista:coordinadores, tipo:'multiple', ph:'Selecciona coordinador/a' },
  { id:'#tiempoSesionesEmp', lista:tiempoSesiones, tipo:'single', ph:'Selecciona una opción' },
  { id:'#tiempoHorasEmp', lista:tiempoHoras, tipo:'single', ph:'Selecciona una opción' },
  { id:'#tiempoMinutosEmp', lista:tiempoMinutos, tipo:'single', ph:'Selecciona una opción' },

  // Aula del Futuro
  { id:'#maestrosAulaDelFuturo', lista:maestrosAulaDelFuturo, tipo:'multiple', ph:'Selecciona maestro/s' }

];

function inicializarSelects() {
  CONFIG_SELECTS.forEach(cfg => {
    console.log("INICIALIZANDO:", cfg.id);

    if (cfg.tipo === 'multiple') {
      const listaFinal = cfg.id === '#metodologiasActivas'
        ? metodologiasActivasLista
        : cfg.lista;

      initSelect2Multiple(cfg.id, listaFinal, cfg.ph);
    } else {
      if (cfg.lista.length > 0) {
        cargarOpciones(cfg.id, cfg.lista, cfg.ph);
      }
      initSelect2Single(cfg.id, cfg.ph);
    }
  });
}

/* ============================================================
   DROPZONES POR PROYECTO (IDS DEL HTML SEPARADO)
============================================================ */
function initDropzones() {
  // CITE
  wireDropzone("dropzonePreparados", "previewPreparados");
  wireDropzone("dropzoneCiteMedia", "previewCiteMedia");

  // Emprendedora
  wireDropzone("dropzoneEmpMedia", "previewEmpMedia");

  // Aula del Futuro
  wireDropzone("dropzoneAulaMedia", "previewAulaMedia");
}

/* ============================================================
   TEXTO AUTOMÁTICO / MANUAL (SOLO CITE)
   - Automático: copia #descripcion -> #textoCite SOLO al pulsar el botón
   - Manual: permite escribir libremente (por defecto, vacío)
============================================================ */
function initToggleTextoCite() {

  const btnAuto = document.getElementById("btnAutoTextoCite");
  const btnManual = document.getElementById("btnManualTextoCite");
  const textoPub = document.getElementById("textoCite");
  const descripcion = document.getElementById("descripcion");

  if (!btnAuto || !btnManual || !textoPub || !descripcion) return;

  function setAuto() {
  btnAuto.classList.add("active");
  btnManual.classList.remove("active");

  textoPub.value = descripcion.value || "";
  textoPub.disabled = true;

  textoPub.dispatchEvent(new Event("input", { bubbles: true }));
  textoPub.dispatchEvent(new Event("change", { bubbles: true }));
}

function setManual() {
  btnManual.classList.add("active");
  btnAuto.classList.remove("active");

  textoPub.disabled = false;
  textoPub.focus();

  textoPub.dispatchEvent(new Event("input", { bubbles: true }));
  textoPub.dispatchEvent(new Event("change", { bubbles: true }));
}

  btnAuto.onclick = setAuto;
  btnManual.onclick = setManual;

  descripcion.addEventListener("input", () => {
    if (btnAuto.classList.contains("active")) {
      textoPub.value = descripcion.value || "";
    }
  });

  setManual();
}

/* ============================================================
   DIFICULTADES ENCONTRADAS — RESPUESTAS MODELO
============================================================ */
function initDificultadesEncontradasModelo() {
  const select = jq('#dificultadesEncontradasModelo');
  const textarea = document.getElementById('dificultades');

  if (!select || !textarea) return;

  select.off('change.dificultadesEncontradas');
  select.on('change.dificultadesEncontradas', function () {
    const val = select.val() || [];

    if (val.length > 0) {
      textarea.value = "";
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

/* ============================================================
   DIFICULTADES % — RESPUESTAS MODELO
============================================================ */
function initDificultadesModelo() {
  const select = jq('#dificultadesModelo');
  const textarea = document.getElementById('dificultadesPorcentajeTrabajo');

  if (!select || !textarea) return;

  select.off('change.dificultadesPorcentaje');
  select.on('change.dificultadesPorcentaje', function () {
    const val = select.val() || [];

    if (val.length > 0) {
      textarea.value = "";
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

function evitarSaltosSelect2(id) {
  const $el = jq(id);
  if (!$el || !$el.length) return;

  let scrollY = 0;

  $el.on("select2:opening", function () {
    scrollY = window.scrollY || window.pageYOffset;
  });

  $el.on("select2:open", function () {
    window.scrollTo(0, scrollY);
  });

  $el.on("select2:select", function () {
    window.scrollTo(0, scrollY);
  });

  $el.on("select2:close", function () {
    window.scrollTo(0, scrollY);
  });
}

/* ============================================================
   VALIDACIÓN (SEGÚN PROYECTO)
============================================================ */
function contarImgs(previewId) {
  return document.querySelectorAll(`#${previewId} .img-wrapper`).length;
}
function contarVids(videosId) {
  return document.querySelectorAll(`#${videosId} .video-wrap`).length;
}
function bloqueCite1Valido() {
  const coord = jq('#coordinadores') ? (jq('#coordinadores').val() || []) : [];
  const titulo = (document.getElementById('tituloEvidencia')?.value || "").trim();
  const numeroEvidencia = jq('#numeroEvidencia') ? (jq('#numeroEvidencia').val() || "") : "";

  return coord.length > 0 && !!titulo && !!numeroEvidencia;
}

function bloqueCite2Valido() {
  const gruposSel = jq('#grupos') ? (jq('#grupos').val() || []) : [];
  const objetivos = jq('#objetivosCite') ? (jq('#objetivosCite').val() || []) : [];
  const relSel = jq('#relProyecto') ? (jq('#relProyecto').val() || []) : [];
  const desc = (document.getElementById('descripcion')?.value || "").trim();
  const metodSel = jq('#metodologiasActivas') ? (jq('#metodologiasActivas').val() || []) : [];
  const difs = (document.getElementById('dificultades')?.value || "").trim();
  const modeloDif = jq('#dificultadesEncontradasModelo') ? (jq('#dificultadesEncontradasModelo').val() || []) : [];

  return (
    gruposSel.length > 0 &&
    objetivos.length > 0 &&
    relSel.length > 0 &&
    !!desc &&
    metodSel.length > 0 &&
    (!!difs || modeloDif.length > 0)
  );
}

function bloqueCite3Valido() {
  return true;
}

function bloqueCite4Valido() {
  const h = jq('#herramientasTec') ? (jq('#herramientasTec').val() || []).length : 0;
  const p = jq('#paginasWeb') ? (jq('#paginasWeb').val() || []).length : 0;
  const s = jq('#softwareEspecifico') ? (jq('#softwareEspecifico').val() || []).length : 0;
  const e = jq('#elementosMultimediaTec') ? (jq('#elementosMultimediaTec').val() || []).length : 0;
  const otros = (document.getElementById('otrosTec')?.value || "").trim();

  return (h + p + s + e) > 0 || !!otros;
}

function bloqueCite5Valido() {
  const sesiones = jq('#tiempoSesiones') ? (jq('#tiempoSesiones').val() || "") : "";
  const horas = jq('#tiempoHoras') ? (jq('#tiempoHoras').val() || "") : "";
  const minutos = jq('#tiempoMinutos') ? (jq('#tiempoMinutos').val() || "") : "";

  return !!sesiones && (!!horas || !!minutos);
}

function bloqueCite5bValido() {
  const difPorcentajeModelo = jq('#dificultadesModelo') ? (jq('#dificultadesModelo').val() || []) : [];
  const difPorcentajeOtros = (document.getElementById('dificultadesPorcentajeTrabajo')?.value || "").trim();

  return difPorcentajeModelo.length > 0 || !!difPorcentajeOtros;
}
function bloqueCite6Valido() {
  const tipoDocu = jq('#elementosDocu') ? (jq('#elementosDocu').val() || []) : [];
  return tipoDocu.length > 0;
}

function bloqueCite7Valido() {
  const textoWP = (document.getElementById('textoCite')?.value || "").trim();
  return !!textoWP;
}

function bloqueEmp1Valido() {
  const coord = jq('#coordinadoresEmp') ? (jq('#coordinadoresEmp').val() || []) : [];
  const titulo = (document.getElementById('tituloEmp')?.value || "").trim();
  return coord.length > 0 && !!titulo;
}

function bloqueEmp2Valido() {
  const sesiones = jq('#tiempoSesionesEmp') ? (jq('#tiempoSesionesEmp').val() || "") : "";
  const horas = jq('#tiempoHorasEmp') ? (jq('#tiempoHorasEmp').val() || "") : "";
  const minutos = jq('#tiempoMinutosEmp') ? (jq('#tiempoMinutosEmp').val() || "") : "";
  return !!sesiones && (!!horas || !!minutos);
}

function bloqueEmp3Valido() {
  const texto = (document.getElementById('textoEmp')?.value || "").trim();
  return !!texto;
}

function bloqueEmp4Valido() {
  return true;
}

function bloqueAula1Valido() {
  const maestros = jq('#maestrosAulaDelFuturo') ? (jq('#maestrosAulaDelFuturo').val() || []) : [];
  const titulo = (document.getElementById('tituloAulaDelFuturo')?.value || "").trim();
  const texto = (document.getElementById('textoAulaDelFuturo')?.value || "").trim();

  return maestros.length > 0 && !!titulo && !!texto;
}

function validarBloquePorId(idBloque) {
  if (idBloque === 'cite1') return bloqueCite1Valido();
  if (idBloque === 'cite2') return bloqueCite2Valido();
  if (idBloque === 'cite3') return bloqueCite3Valido();
  if (idBloque === 'cite4') return bloqueCite4Valido();
  if (idBloque === 'cite5') return bloqueCite5Valido();
  if (idBloque === 'cite5b') return bloqueCite5bValido();
  if (idBloque === 'cite6') return bloqueCite6Valido();
  if (idBloque === 'cite7') return bloqueCite7Valido();

  if (idBloque === 'emp1') return bloqueEmp1Valido();
  if (idBloque === 'emp2') return bloqueEmp2Valido();
  if (idBloque === 'emp3') return bloqueEmp3Valido();
  if (idBloque === 'emp4') return bloqueEmp4Valido();

  if (idBloque === 'aula1') return bloqueAula1Valido();

  return false;
}

function quitarErrorBloqueAlEditar(selectorCampo, idBloque) {
  const campos = document.querySelectorAll(selectorCampo);
  const bloque = document.getElementById(idBloque);

  if (!campos.length || !bloque) return;

  const revisar = () => {
    if (validarBloquePorId(idBloque)) {
      bloque.classList.remove("error");
    }
  };

  campos.forEach(campo => {
    campo.addEventListener("input", revisar);
    campo.addEventListener("change", revisar);

    if (window.jQuery && window.jQuery(campo).hasClass("select2-hidden-accessible")) {
      window.jQuery(campo).on("select2:select select2:unselect", revisar);
    }
  });
}
function quitarErrorBloqueAlCambiarMultimedia(selectorContenedor, idBloque) {
  const contenedor = document.querySelector(selectorContenedor);
  const bloque = document.getElementById(idBloque);

  if (!contenedor || !bloque) return;

  const revisar = () => {
    if (validarBloquePorId(idBloque)) {
      bloque.classList.remove("error");
    }
  };

  const observer = new MutationObserver(revisar);

  observer.observe(contenedor, {
    childList: true,
    subtree: true
  });

  contenedor.addEventListener("contenidoCambiado", revisar);
}

function validarAntesDePublicar() {
  const errores = [];
  limpiarErroresVisuales();

  if (PROYECTO_ACTUAL === "AULA_DEL_FUTURO") {
    const maestros = jq('#maestrosAulaDelFuturo') ? (jq('#maestrosAulaDelFuturo').val() || []) : [];
    const titulo = (document.getElementById('tituloAulaDelFuturo')?.value || "").trim();
    const texto = (document.getElementById('textoAulaDelFuturo')?.value || "").trim();

    if (maestros.length === 0) errores.push("• Aula del Futuro: falta maestro/s.");
    if (!titulo) errores.push("• Aula del Futuro: falta título.");
    if (!texto) errores.push("• Aula del Futuro: falta texto.");

    if (errores.length) document.getElementById('aula1')?.classList.add('error');
    return errores;
  }

if (PROYECTO_ACTUAL === "EMPRENDEDORA") {
  const coord = jq('#coordinadoresEmp') ? (jq('#coordinadoresEmp').val() || []) : [];
  const titulo = (document.getElementById('tituloEmp')?.value || "").trim();
  const texto = (document.getElementById('textoEmp')?.value || "").trim();
  const sesiones = jq('#tiempoSesionesEmp') ? (jq('#tiempoSesionesEmp').val() || "") : "";
  const horas = jq('#tiempoHorasEmp') ? (jq('#tiempoHorasEmp').val() || "") : "";
  const minutos = jq('#tiempoMinutosEmp') ? (jq('#tiempoMinutosEmp').val() || "") : "";

  if (coord.length === 0) errores.push("• Cultura Emprendedora: falta coordinador/a.");
  if (!titulo) errores.push("• Cultura Emprendedora: falta título.");
  if (!sesiones) errores.push("• Cultura Emprendedora: faltan sesiones.");
  if (!horas && !minutos) errores.push("• Cultura Emprendedora: falta tiempo (horas o minutos).");
  if (!texto) errores.push("• Cultura Emprendedora: falta texto.");

  if (errores.length) {
    document.getElementById('emp1')?.classList.add('error');
    document.getElementById('emp2')?.classList.add('error');
    document.getElementById('emp3')?.classList.add('error');
  }
  return errores;
}

  if (PROYECTO_ACTUAL === "CITE") {
  const coord = jq('#coordinadores') ? (jq('#coordinadores').val() || []) : [];
  const titulo = (document.getElementById('tituloEvidencia')?.value || "").trim();
  const objetivos = jq('#objetivosCite') ? (jq('#objetivosCite').val() || []) : [];
  const numeroEvidencia = jq('#numeroEvidencia') ? (jq('#numeroEvidencia').val() || "") : "";

  const gruposSel = jq('#grupos') ? (jq('#grupos').val() || []) : [];
  const relSel = jq('#relProyecto') ? (jq('#relProyecto').val() || []) : [];
  const metodSel = jq('#metodologiasActivas') ? (jq('#metodologiasActivas').val() || []) : [];
  const desc = (document.getElementById('descripcion')?.value || "").trim();
  const difs = (document.getElementById('dificultades')?.value || "").trim();
  const modeloDif = jq('#dificultadesEncontradasModelo') ? (jq('#dificultadesEncontradasModelo').val() || []) : [];

  const h = jq('#herramientasTec') ? (jq('#herramientasTec').val() || []).length : 0;
  const p = jq('#paginasWeb') ? (jq('#paginasWeb').val() || []).length : 0;
  const s = jq('#softwareEspecifico') ? (jq('#softwareEspecifico').val() || []).length : 0;
  const e = jq('#elementosMultimediaTec') ? (jq('#elementosMultimediaTec').val() || []).length : 0;
  const otros = (document.getElementById('otrosTec')?.value || "").trim();

  const sesiones = jq('#tiempoSesiones') ? (jq('#tiempoSesiones').val() || "") : "";
  const horas = jq('#tiempoHoras') ? (jq('#tiempoHoras').val() || "") : "";
  const minutos = jq('#tiempoMinutos') ? (jq('#tiempoMinutos').val() || "") : "";

  const difPorcentajeModelo = jq('#dificultadesModelo') ? (jq('#dificultadesModelo').val() || []) : [];
  const difPorcentajeOtros = (document.getElementById('dificultadesPorcentajeTrabajo')?.value || "").trim();
  const difPorcentaje = difPorcentajeModelo.length > 0 || !!difPorcentajeOtros;

  const tipoDocu = jq('#elementosDocu') ? (jq('#elementosDocu').val() || []) : [];

  const textoWP = (document.getElementById('textoCite')?.value || "").trim();


    if (coord.length === 0) {
      errores.push("• CITE: falta coordinador/a.");
      document.getElementById('cite1')?.classList.add('error');
    }

    if (!titulo) {
      errores.push("• CITE: falta título.");
      document.getElementById('cite1')?.classList.add('error');
    }

    if (!numeroEvidencia) {
      errores.push("• CITE: falta número de evidencia.");
      document.getElementById('cite1')?.classList.add('error');
    }

    if (gruposSel.length === 0) {
      errores.push("• CITE: falta grupo/s.");
      document.getElementById('cite2')?.classList.add('error');
    }

    if (objetivos.length === 0) {
      errores.push("• CITE: falta objetivo principal.");
      document.getElementById('cite2')?.classList.add('error');
    }

    if (relSel.length === 0) {
      errores.push("• CITE: falta relación con el proyecto.");
      document.getElementById('cite2')?.classList.add('error');
    }

    if (!desc) {
      errores.push("• CITE: falta descripción.");
      document.getElementById('cite2')?.classList.add('error');
    }

    if (metodSel.length === 0) {
      errores.push("• CITE: faltan metodologías activas.");
      document.getElementById('cite2')?.classList.add('error');
    }

    if (!difs && modeloDif.length === 0) {
  errores.push("• CITE: falta 'Dificultades encontradas'.");
  document.getElementById('cite2')?.classList.add('error');
}

    if ((h + p + s + e) === 0 && !otros) {
      errores.push("• CITE: falta indicar tecnología.");
      document.getElementById('cite4')?.classList.add('error');
    }

    if (!sesiones) {
      errores.push("• CITE: faltan sesiones.");
      document.getElementById('cite5')?.classList.add('error');
    }

    if (!horas && !minutos) {
      errores.push("• CITE: falta tiempo (horas o minutos).");
      document.getElementById('cite5')?.classList.add('error');
    }

    if (!difPorcentaje) {
      errores.push("• CITE: falta explicar las dificultades para alcanzar el % de trabajo con el alumnado.");
      document.getElementById('cite5b')?.classList.add('error');
    }

    if (!textoWP) {
      errores.push("• CITE: falta texto para Blogger.");
      document.getElementById('cite7')?.classList.add('error');
    }

    return errores;
  }

  errores.push("• Selecciona un proyecto.");
  return errores;
}



/* ============================================================
   MODAL ERRORES
============================================================ */
function mostrarModalErrores(lista) {
  const modal = document.getElementById("modalErrores");
  const ul = document.getElementById("listaErrores");
  if (!modal || !ul) return;

  ul.innerHTML = "";
  lista.forEach(err => {
    const li = document.createElement("li");
    li.textContent = err;
    ul.appendChild(li);
  });

  modal.style.display = "block";
}

const btnCerrarModal = document.getElementById("cerrarModal");
if (btnCerrarModal) {
  btnCerrarModal.onclick = () => {
    const modal = document.getElementById("modalErrores");
    if (modal) modal.style.display = "none";
  };
}


/* ============================================================
   OVERLAY PUBLICANDO
============================================================ */
function mostrarPantallaPublicando() {
  const overlay = document.getElementById("overlayPublicando");
  const mensaje = overlay ? overlay.querySelector(".mensajePublicando") : null;

  if (mensaje) {
    mensaje.innerHTML = `
      Publicando en Blogger...
      <br>
      <small>Por favor, espera</small>
    `;
  }

  if (overlay) overlay.style.display = "flex";
}
function ocultarPantallaPublicando() {
  const overlay = document.getElementById("overlayPublicando");
  if (overlay) overlay.style.display = "none";
}


/* ============================================================
   LIMPIAR FICHA COMPLETA
============================================================ */
function limpiarFormulario() {
  document.querySelectorAll("input[type='text'], textarea").forEach(el => (el.value = ""));
  document.querySelectorAll("select").forEach(sel => {
    if (window.jQuery) {
      window.jQuery(sel).val(null).trigger("change");
    }
  });
  document.querySelectorAll(".preview").forEach(div => (div.innerHTML = ""));
  document.querySelectorAll(".video-container").forEach(div => (div.innerHTML = ""));

  limpiarErroresVisuales();

  setTimeout(() => {
    actualizarTodosLosBloquesVisualmente();
    actualizarEstadoBotonPublicar();
  }, 50);
}

const btnLimpiar = document.getElementById("btnLimpiar");
if (btnLimpiar) {
  btnLimpiar.onclick = () => {
    if (!confirm("¿Seguro que quieres borrar toda la ficha?")) return;
    limpiarFormulario();
    alert("✅ Ficha limpiada correctamente");
  };
}


/* ============================================================
   SELECCIÓN DE PROYECTO (MUESTRA/OCULTA CONTENEDORES)
============================================================ */
function configurarInterfazPorProyecto() {
  setDisplay("proyectoCITE", PROYECTO_ACTUAL === "CITE");
  setDisplay("proyectoEmprendedora", PROYECTO_ACTUAL === "EMPRENDEDORA");
  setDisplay("proyectoAulaDelFuturo", PROYECTO_ACTUAL === "AULA_DEL_FUTURO");

  const titulo = document.getElementById("tituloProyecto");
  if (titulo) {
    if (PROYECTO_ACTUAL === "CITE") titulo.textContent = "Proyecto CITE · Curso 25/26";
    if (PROYECTO_ACTUAL === "EMPRENDEDORA") titulo.textContent = "Cultura Emprendedora · Curso 25/26";
    if (PROYECTO_ACTUAL === "AULA_DEL_FUTURO") titulo.textContent = "Aula del Futuro · Curso 25/26";
  }

  if (window.jQuery) {
    setTimeout(() => {
      window.jQuery('select').each(function () {
        const $el = window.jQuery(this);
        if ($el.hasClass('select2-hidden-accessible')) {
          $el.trigger('change.select2');
        }
      });
    }, 0);
  }
}

function elegirProyecto(tipo) {
  document.body.classList.remove("selector-activo");
  PROYECTO_ACTUAL = tipo;
  localStorage.setItem("proyectoActual", tipo);

  const pantalla = document.getElementById("pantallaProyecto");
  if (pantalla) pantalla.style.display = "none";

  document.documentElement.setAttribute("dir", "ltr");
  document.body.setAttribute("dir", "ltr");

  configurarInterfazPorProyecto();

  if (window.jQuery) {
    inicializarSelects();
    initDificultadesModelo();
    initDificultadesEncontradasModelo();
    evitarSaltosSelect2('#dificultadesModelo');
    evitarSaltosSelect2('#dificultadesEncontradasModelo');
    initLimpiezaErroresDinamica();
    activarValidacionVisualBloques();
  }
}

window.elegirProyecto = elegirProyecto;

window.addEventListener("load", () => {
  const pantalla = document.getElementById("pantallaProyecto");
  if (!pantalla) return;

  PROYECTO_ACTUAL = null;
  localStorage.removeItem("proyectoActual");

  document.body.classList.add("selector-activo");
  pantalla.style.display = "flex";

  initToggleTextoCite();
});


/* ============================================================
   BOTÓN PUBLICAR (BLOGGER)
============================================================ */
window.addEventListener("load", () => {
  const btnConectarBlogger = document.getElementById("btnConectarBlogger");

if (btnConectarBlogger) {
  btnConectarBlogger.addEventListener("click", () => {
      if (typeof iniciarOAuth === "function") {
        iniciarOAuth();
      } else {
        alert("No se pudo iniciar conexión con Blogger.");
      }
    });
  }
});

const btnPublicarBlogger = document.getElementById("btnPublicarBlogger");

if (btnPublicarBlogger) {
  btnPublicarBlogger.addEventListener("click", () => {
    const btn = document.getElementById("btnPublicarBlogger");
    if (btn) btn.disabled = true;

    const errores = validarAntesDePublicar();
    if (errores.length) {
      if (btn) btn.disabled = false;
      return mostrarModalErrores(errores);
    }

    if (typeof publicarEnBlogger !== "function") {
      if (btn) btn.disabled = false;
      alert("No se encontró publicarEnBlogger(payload) en blogger.js");
      return;
    }

    let payload = { proyecto: PROYECTO_ACTUAL };

    if (PROYECTO_ACTUAL === "AULA_DEL_FUTURO") {
      payload.maestros = jq('#maestrosAulaDelFuturo') ? (jq('#maestrosAulaDelFuturo').val() || []) : [];
      payload.titulo = document.getElementById('tituloAulaDelFuturo')?.value?.trim() || "";
      payload.texto  = document.getElementById('textoAulaDelFuturo')?.value?.trim() || "";
      payload.imagenes = [...document.querySelectorAll('#previewAulaMedia img')].map(i => i.src);
      payload.videos   = [...document.querySelectorAll('#videosAulaMedia iframe')].map(f => f.src);
    }

    if (PROYECTO_ACTUAL === "EMPRENDEDORA") {
      payload.coordinadores = jq('#coordinadoresEmp') ? (jq('#coordinadoresEmp').val() || []) : [];
      payload.titulo = document.getElementById('tituloEmp')?.value?.trim() || "";
      payload.tiempo = {
        sesiones: jq('#tiempoSesionesEmp') ? (jq('#tiempoSesionesEmp').val() || "") : "",
        horas: jq('#tiempoHorasEmp') ? (jq('#tiempoHorasEmp').val() || "") : "",
        minutos: jq('#tiempoMinutosEmp') ? (jq('#tiempoMinutosEmp').val() || "") : ""
      };
      payload.texto = document.getElementById('textoEmp')?.value?.trim() || "";
      payload.imagenes = [...document.querySelectorAll('#previewEmpMedia img')].map(i => i.src);
      payload.videos   = [...document.querySelectorAll('#videosEmpMedia iframe')].map(f => f.src);
    }

    if (PROYECTO_ACTUAL === "CITE") {
      payload.coordinadores = jq('#coordinadores') ? (jq('#coordinadores').val() || []) : [];
      payload.titulo = document.getElementById('tituloEvidencia')?.value?.trim() || "";
      payload.objetivos = jq('#objetivosCite') ? (jq('#objetivosCite').val() || []) : [];
      payload.objetivosTexto = payload.objetivos.join(" ");
      payload.numeroEvidencia = jq('#numeroEvidencia') ? (jq('#numeroEvidencia').val() || "") : "";
      payload.grupos = jq('#grupos') ? (jq('#grupos').val() || []) : [];
      payload.relacion = jq('#relProyecto') ? (jq('#relProyecto').val() || []) : [];
      payload.descripcion = document.getElementById('descripcion')?.value?.trim() || "";
      payload.metodologias = jq('#metodologiasActivas') ? (jq('#metodologiasActivas').val() || []) : [];
      payload.metodologiasTexto = payload.metodologias.join(", ");

      const dificultadesModeloSeleccionada = jq('#dificultadesEncontradasModelo')
  ? (jq('#dificultadesEncontradasModelo').val() || [])
  : [];

payload.dificultades =
  document.getElementById('dificultades')?.value?.trim() ||
  dificultadesModeloSeleccionada.join(" ") ||
  "";
      const difPorcentajeModelo = jq('#dificultadesModelo') ? (jq('#dificultadesModelo').val() || []) : [];
      const difPorcentajeOtros = (document.getElementById('dificultadesPorcentajeTrabajo')?.value || "").trim(); 
      payload.dificultadesPorcentajeTrabajo = difPorcentajeModelo.join(" ") || difPorcentajeOtros || "";

      payload.preparacion = {
        descripcion: document.getElementById('descripcionPreparados')?.value?.trim() || "",
        tiempo: jq('#tiempoPreparacion') ? (jq('#tiempoPreparacion').val() || "") : "",
        imagenes: [...document.querySelectorAll('#previewPreparados img')].map(i => i.src),
        videos: [...document.querySelectorAll('#videosPrep iframe')].map(f => f.src)
      };

      payload.tecnologia = {
        herramientas: jq('#herramientasTec') ? (jq('#herramientasTec').val() || []) : [],
        paginasWeb: jq('#paginasWeb') ? (jq('#paginasWeb').val() || []) : [],
        software: jq('#softwareEspecifico') ? (jq('#softwareEspecifico').val() || []) : [],
        multimedia: jq('#elementosMultimediaTec') ? (jq('#elementosMultimediaTec').val() || []) : [],
        otros: document.getElementById('otrosTec')?.value?.trim() || ""
      };

      payload.tiempo = {
        sesiones: jq('#tiempoSesiones') ? (jq('#tiempoSesiones').val() || "") : "",
        horas: jq('#tiempoHoras') ? (jq('#tiempoHoras').val() || "") : "",
        minutos: jq('#tiempoMinutos') ? (jq('#tiempoMinutos').val() || "") : ""
      };

      payload.multimedia = {
        tipos: jq('#elementosDocu') ? (jq('#elementosDocu').val() || []) : [],
        imagenes: [...document.querySelectorAll('#previewCiteMedia img')].map(i => i.src),
        videos: [...document.querySelectorAll('#videosCiteMedia iframe')].map(f => f.src)
      };

      payload.texto = document.getElementById('textoCite')?.value?.trim() || "";
      payload._docentePrincipal = payload.coordinadores[0] || null;

      const partesTecnologia = [];

      if (payload.tecnologia.herramientas.length) {
        partesTecnologia.push(payload.tecnologia.herramientas.join(", "));
      }

      if (payload.tecnologia.paginasWeb.length) {
        partesTecnologia.push(payload.tecnologia.paginasWeb.join(", "));
      }

      if (payload.tecnologia.software.length) {
        partesTecnologia.push(payload.tecnologia.software.join(", "));
      }

      if (payload.tecnologia.multimedia.length) {
        partesTecnologia.push(payload.tecnologia.multimedia.join(", "));
      }

      if (payload.tecnologia.otros) {
        partesTecnologia.push(payload.tecnologia.otros);
      }

      const tecnologiaTexto = partesTecnologia.length
        ? "\n\nAdemás, los elementos tecnológicos específicos usados en la actividad fueron: " + partesTecnologia.join(", ") + "."
        : "";

      const docuTexto = payload.multimedia.tipos.length
        ? "\n\nLa actividad ha sido documentada mediante: " + payload.multimedia.tipos.join(", ") + "."
        : "";

      payload.ficha = {
        nombreEvidencia: payload.titulo,
        objetivos: payload.objetivosTexto,
        grupos: payload.grupos.join(" "),
        descripcionActividad: payload.descripcion + docuTexto,
        metodologiasActivas: payload.metodologiasTexto,
        relacionProyecto: payload.relacion.join(" ") + tecnologiaTexto,
        dificultadesEncontradas: payload.dificultades,
        trabajoPreparacionDocente:
          payload.preparacion.descripcion +
          (payload.preparacion.tiempo
            ? "\n\nTiempo dedicado a la preparación: " + payload.preparacion.tiempo + "."
            : ""),
        horasTrabajoAula: [
          payload.tiempo.sesiones,
          payload.tiempo.horas,
          payload.tiempo.minutos
        ].filter(Boolean).join(" · "),
        dificultadesPorcentajeTrabajo: payload.dificultadesPorcentajeTrabajo,
        evidenciasMedia: {
          imagenesPreparacion: payload.preparacion.imagenes || [],
          videosPreparacion: payload.preparacion.videos || [],
          imagenesActividad: payload.multimedia.imagenes || [],
          videosActividad: payload.multimedia.videos || []
        }
      };
    }

    mostrarPantallaPublicando();

    Promise.resolve(publicarEnBlogger(payload))
      .then((resultado) => {

        if (!resultado || resultado.ok === false) {
          console.warn("Publicación no confirmada, no se abre Google Docs.");
          return;
        }

        if (PROYECTO_ACTUAL === "CITE" && payload.ficha && payload._docentePrincipal) {
          const urlDoc = DOCS_CITE_POR_DOCENTE[payload._docentePrincipal];

          fetch("https://script.google.com/macros/s/AKfycbzKlwGIRdkq7GcaAKnA-xNZu9Zss-DxblFpKpo6nfGjWiuI92NIbChazVXvYs_h2fqmZA/exec", {
            method: "POST",
            body: JSON.stringify({
              docUrl: urlDoc,
              numeroEvidencia: payload.numeroEvidencia,
              ficha: payload.ficha
            })
          })
          .then(r => r.json())
          .then(d => console.log("Ficha enviada:", d))
          .catch(err => console.error("Error enviando ficha:", err));
        }

  if (PROYECTO_ACTUAL === "CITE") {
  alert("Entrando en apertura de ficha");

  const docente = payload._docentePrincipal;

  if (!docente) {
    alert("No hay coordinador seleccionado.");
    return;
  }

  const urlBase = DOCS_CITE_POR_DOCENTE[docente];

  if (urlBase) {
    let tab = "t.0";

    if (payload.numeroEvidencia === "Evidencia 1") tab = "t.0";
    if (payload.numeroEvidencia === "Evidencia 2") tab = "t.caovabjwnqm1";
    if (payload.numeroEvidencia === "Evidencia 3") tab = "t.9yezcjbdksur";
    if (payload.numeroEvidencia === "Evidencia 4") tab = "t.n9o5wj2harv9";
    if (payload.numeroEvidencia === "Evidencia 5") tab = "t.m1tbmg66kdno";

    const urlLimpia = urlBase.split("?")[0];
const urlFinal = `${urlLimpia}?tab=${tab}`;

const nuevaVentana = window.open(urlFinal, "_blank", "noopener,noreferrer");

if (!nuevaVentana) {
  alert("La ficha no se ha abierto porque el navegador ha bloqueado la ventana emergente.\n\nURL:\n" + urlFinal);
}

  } else {
    alert("Este docente aún no tiene Google Docs asignado.");
  }
}

      })
      .catch((err) => {
        console.error(err);
        alert("Error al publicar en Blogger.");
      })
      .finally(() => {
        ocultarPantallaPublicando();
        if (btn) btn.disabled = false;
      });

  });
}


/* ============================================================
   INICIALIZACIÓN GLOBAL
============================================================ */
window.addEventListener("load", () => {

  if (window.jQuery) {
    initDropzones();
  }

  activarAutoAlturaTextareas();
  initModalYoutube();

});

/* ============================================================
   TEXTAREA AUTOALTURA
============================================================ */
function activarAutoAlturaTextareas() {
  const areas = document.querySelectorAll("textarea");

  areas.forEach(area => {
    const ajustar = () => {
      area.style.height = "auto";
      area.style.height = Math.max(area.scrollHeight, 110) + "px";
    };

    area.addEventListener("input", ajustar);
    ajustar();
  });
}
document.addEventListener("dragover", function(e) {
  e.preventDefault();
});

document.addEventListener("drop", function(e) {
  e.preventDefault();
});

/* ============================================================
   VALIDACIÓN VISUAL DE BLOQUES (USANDO LA VALIDACIÓN REAL)
============================================================ */

function actualizarEstadoVisualBloque(idBloque) {
  const bloque = document.getElementById(idBloque);
  if (!bloque) return;

  if (validarBloquePorId(idBloque)) {
    bloque.classList.remove("pendiente");
    bloque.classList.add("completo");
  } else {
    bloque.classList.add("pendiente");
    bloque.classList.remove("completo");
  }

  actualizarEstadoBotonPublicar();
}

function actualizarTodosLosBloquesVisualmente() {
  const ids = [
    'cite1', 'cite2', 'cite3', 'cite4', 'cite5', 'cite5b', 'cite6', 'cite7',
    'emp1', 'emp2', 'emp3', 'emp4',
    'aula1'
  ];

  ids.forEach(actualizarEstadoVisualBloque);
}

function activarValidacionVisualBloques() {
  const ids = [
    'cite1', 'cite2', 'cite3', 'cite4', 'cite5', 'cite5b', 'cite6', 'cite7',
    'emp1', 'emp2', 'emp3', 'emp4',
    'aula1'
  ];

  ids.forEach(idBloque => {
    const bloque = document.getElementById(idBloque);
    if (!bloque) return;

    bloque.classList.add("pendiente");

    const campos = bloque.querySelectorAll("input, textarea, select");

    campos.forEach(campo => {
      campo.addEventListener("input", () => actualizarEstadoVisualBloque(idBloque));
      campo.addEventListener("change", () => actualizarEstadoVisualBloque(idBloque));

      if (window.jQuery && window.jQuery(campo).hasClass("select2-hidden-accessible")) {
        window.jQuery(campo).on("select2:select select2:unselect", function () {
          actualizarEstadoVisualBloque(idBloque);
        });
      }
    });
  });

  // CITE multimedia
  const previewCite = document.getElementById("previewCiteMedia");
  const videosCite = document.getElementById("videosCiteMedia");

  if (previewCite) {
    const obs1 = new MutationObserver(() => actualizarEstadoVisualBloque("cite6"));
    obs1.observe(previewCite, { childList: true, subtree: true });
    previewCite.addEventListener("contenidoCambiado", () => actualizarEstadoVisualBloque("cite6"));
  }

  if (videosCite) {
    const obs2 = new MutationObserver(() => actualizarEstadoVisualBloque("cite6"));
    obs2.observe(videosCite, { childList: true, subtree: true });
    videosCite.addEventListener("contenidoCambiado", () => actualizarEstadoVisualBloque("cite6"));
  }

  // Emprendedora multimedia
  const previewEmp = document.getElementById("previewEmpMedia");
  const videosEmp = document.getElementById("videosEmpMedia");

  if (previewEmp) {
    const obs3 = new MutationObserver(() => actualizarEstadoVisualBloque("emp4"));
    obs3.observe(previewEmp, { childList: true, subtree: true });
    previewEmp.addEventListener("contenidoCambiado", () => actualizarEstadoVisualBloque("emp4"));
  }

  if (videosEmp) {
    const obs4 = new MutationObserver(() => actualizarEstadoVisualBloque("emp4"));
    obs4.observe(videosEmp, { childList: true, subtree: true });
    videosEmp.addEventListener("contenidoCambiado", () => actualizarEstadoVisualBloque("emp4"));
  }

  // Aula del Futuro multimedia
  const previewAula = document.getElementById("previewAulaMedia");
  const videosAula = document.getElementById("videosAulaMedia");

  if (previewAula) {
    const obs5 = new MutationObserver(() => actualizarEstadoVisualBloque("aula1"));
    obs5.observe(previewAula, { childList: true, subtree: true });
    previewAula.addEventListener("contenidoCambiado", () => actualizarEstadoVisualBloque("aula1"));
  }

  if (videosAula) {
    const obs6 = new MutationObserver(() => actualizarEstadoVisualBloque("aula1"));
    obs6.observe(videosAula, { childList: true, subtree: true });
    videosAula.addEventListener("contenidoCambiado", () => actualizarEstadoVisualBloque("aula1"));
  }

  actualizarTodosLosBloquesVisualmente();
  actualizarEstadoBotonPublicar();
}

/* ============================================================
   BOTÓN PUBLICAR SOLO SI TODO ESTÁ VALIDADO
============================================================ */
function todoValido() {

  if (PROYECTO_ACTUAL === "CITE") {
    return (
      bloqueCite1Valido() &&
      bloqueCite2Valido() &&
      bloqueCite3Valido() &&
      bloqueCite4Valido() &&
      bloqueCite5Valido() &&
      bloqueCite5bValido() &&
      bloqueCite6Valido() &&
      bloqueCite7Valido()
    );
  }

  if (PROYECTO_ACTUAL === "EMPRENDEDORA") {
    return (
      bloqueEmp1Valido() &&
      bloqueEmp2Valido() &&
      bloqueEmp3Valido() &&
      bloqueEmp4Valido()
    );
  }

  if (PROYECTO_ACTUAL === "AULA_DEL_FUTURO") {
    return bloqueAula1Valido();
  }

  return false;
}

/* ============================================================
   INICIALIZAR MODAL YOUTUBE
============================================================ */
function initModalYoutube() {
  const modal = document.getElementById("modalYoutube");
  const input = document.getElementById("inputYoutubeUrl");
  const btnAceptar = document.getElementById("aceptarYoutube");
  const btnCancelar = document.getElementById("cancelarYoutube");

  if (!modal || !input || !btnAceptar || !btnCancelar) return;

  btnCancelar.addEventListener("click", cerrarModalYoutube);

  btnAceptar.addEventListener("click", () => {
    if (!contenedorVideoActivo) return;

    insertarVideoYoutube(contenedorVideoActivo, input.value);
    cerrarModalYoutube();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnAceptar.click();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      cerrarModalYoutube();
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      cerrarModalYoutube();
    }
  });
}

function actualizarEstadoBotonPublicar() {
  const btn = document.getElementById("btnPublicarBlogger");
  if (!btn) return;

  if (todoValido()) {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
  } else {
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
  }
}
