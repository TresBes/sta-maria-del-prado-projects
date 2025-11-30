/* ============================================================
   LISTAS DE OPCIONES
============================================================ */
const coordinadores = [
  'Aurora Becerra Cayetano','Javier Blanco Ávila','Susana Bordes Escalera','María Ángeles Castaño Barriga',
  'Sergio Chanclón Parra','Esther María Díaz Sierra','Jorge Fernández Solana','Alba González Rodríguez',
  'Susana Lobato Muñoz','Noelia Molina Rubio','María del Campo Muñoz Collado','Encarnación Ortiz Fernández',
  'Lucía Pajares Moreno','María Asunción Quintana Castro','María Remedios Román Román','María Luisa Santos Martínez',
  'Cosme A. Tomé Fernández','M. Puerto Vega Díaz'
];

const grupos = [
  'Infantil 3 años','Infantil 4 años','Infantil 5 años',
  '1º de Primaria','2º de Primaria','3º de Primaria',
  '4º de Primaria','5º de Primaria','6º de Primaria'
];

const relProyecto = [
  'La actividad aparecerá en la revista como noticia de lo que se ha hecho.',
  'Nuestro alumnado elabora el contenido para la revista.',
  'Nuestro alumnado realiza la entrevista que se publicará en el próximo número.',
  'Nuestro alumnado emplea las tecnologías para buscar información relativa a la actividad.',
  'Nuestro alumnado protagoniza contenido multimedia que aparecerá en el próximo número.'
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

/* ============================================================
   CARGA DE OPCIONES
============================================================ */
function cargarOpciones(id, lista) {
  lista.forEach(x => $(id).append(new Option(x, x)));
}

cargarOpciones('#coordinadores', coordinadores);
cargarOpciones('#grupos', grupos);
cargarOpciones('#relProyecto', relProyecto);
cargarOpciones('#tiempoPreparacion', tiemposPreparacion);
cargarOpciones('#herramientasTec', herramientasTec);
cargarOpciones('#paginasWeb', paginasWeb);
cargarOpciones('#softwareEspecifico', softwareEspecifico);
cargarOpciones('#elementosMultimediaTec', elementosMultimediaTec);
cargarOpciones('#elementosDocu', elementosDocu);
cargarOpciones('#tiempoSesiones', tiempoSesiones);
cargarOpciones('#tiempoHoras', tiempoHoras);
cargarOpciones('#tiempoMinutos', tiempoMinutos);

/* ============================================================
   INICIALIZAR SELECT2 (DESPUÉS DE CARGAR OPCIONES)
============================================================ */
$(function () {
  const ids = [
    '#coordinadores','#grupos','#relProyecto','#tiempoPreparacion',
    '#herramientasTec','#paginasWeb','#softwareEspecifico',
    '#elementosMultimediaTec','#elementosDocu',
    '#tiempoSesiones','#tiempoHoras','#tiempoMinutos'
  ];

  ids.forEach(id => {
    $(id).select2({
      placeholder: "Selecciona una opción",
      width: "100%"
    });
  });
});

/* ============================================================
   DROPZONE / IMÁGENES
============================================================ */
function wireDropzone(zoneId, previewId) {
  const zone = document.getElementById(zoneId);
  const preview = document.getElementById(previewId);
  if (!zone || !preview) return;

  zone.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.onchange = e => handleFiles(preview, e.target.files);
    input.click();
  });

  zone.addEventListener("dragover", e => {
    e.preventDefault();
    zone.classList.add("over");
  });

  zone.addEventListener("dragleave", () => zone.classList.remove("over"));

  zone.addEventListener("drop", e => {
    e.preventDefault();
    zone.classList.remove("over");
    handleFiles(preview, e.dataTransfer.files);
  });
}

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
    };
    reader.readAsDataURL(file);
  });
}

wireDropzone("dropzonePreparados", "previewPreparados");
wireDropzone("dropzonePub", "previewPub");

/* ============================================================
   VÍDEOS
============================================================ */
function agregarVideo(contenedorId) {
  const url = prompt("Introduce la URL de YouTube:");
  if (!url) return;

  const id = url.split("v=")[1]?.split("&")[0];
  if (!id) return alert("URL no válida");

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
  btn.onclick = () => wrap.remove();

  wrap.appendChild(iframe);
  wrap.appendChild(btn);

  const cont = document.getElementById(contenedorId);
  if (cont) cont.appendChild(wrap);
}

window.agregarVideo = agregarVideo;

/* ============================================================
   TEXTO AUTOMÁTICO / MANUAL
============================================================ */
const btnAutoTexto   = document.getElementById("btnAutoTexto");
const btnManualTexto = document.getElementById("btnManualTexto");
const textareaBlogger = document.getElementById("textoBlogger");
const descripcion = document.getElementById("descripcion");

btnAutoTexto.onclick = () => {
  btnAutoTexto.classList.add("active");
  btnManualTexto.classList.remove("active");

  textareaBlogger.value = descripcion.value;
  textareaBlogger.disabled = true;

  const bloques = document.querySelectorAll('.bloque');
  const b7 = bloques[6];
  if (textareaBlogger.value.trim()) b7.classList.remove('error');
};

btnManualTexto.onclick = () => {
  btnManualTexto.classList.add("active");
  btnAutoTexto.classList.remove("active");

  textareaBlogger.disabled = false;
  textareaBlogger.value = "";

  const bloques = document.querySelectorAll('.bloque');
  const b7 = bloques[6];
  b7.classList.remove('error');
};

textareaBlogger.addEventListener('keyup', () => {
  const bloques = document.querySelectorAll('.bloque');
  const b7 = bloques[6];

  if (textareaBlogger.value.trim()) {
    b7.classList.remove('error');
  }
});

/* ============================================================
   VALIDACIÓN SEGÚN PROYECTO
============================================================ */
function validarAntesDePublicar() {
  let errores = [];

  document.querySelectorAll('.bloque').forEach(b => b.classList.remove('error'));

  const bloques = document.querySelectorAll('.bloque');
  const b1 = bloques[0];
  const b2 = bloques[1];
  const b4 = bloques[3];
  const b5 = bloques[4];
  const b6 = bloques[5];
  const b7 = bloques[6];

  /* =====================================================
   VALIDACIÓN CULTURA EMPRENDEDORA (SIMPLE)
===================================================== */
if (PROYECTO_ACTUAL === "EMPRENDEDORA") {

  if ($('#coordinadores').val().length === 0) {
    errores.push("• Debes seleccionar tu nombre.");
    b1.classList.add("error");
  }

  if (!$('#tituloEvidencia').val().trim()) {
    errores.push("• Falta el título.");
    b1.classList.add("error");
  }

  if (!$('#textoBlogger').val().trim()) {
    errores.push("• Falta el texto de la publicación.");
    b7.classList.add("error");
  }

  const hayFotos  = document.querySelectorAll('#previewPub .img-wrapper').length > 0;
  const hayVideos = document.querySelectorAll('#videosPub .video-wrap').length > 0;

  // ✅ VALIDACIÓN CORRECTA: IMÁGENES O VÍDEOS
  if (!hayFotos && !hayVideos) {
    errores.push("• Debes añadir una imagen o un vídeo.");
    b6.classList.add("error");
  }

  return errores;
}

  /* =====================================================
     VALIDACIÓN CITE (COMPLETA)
  ====================================================== */

  let errB1 = false;
  if ($('#coordinadores').val().length === 0) {
    errores.push("• Bloque 1: Falta seleccionar coordinador.");
    errB1 = true;
  }
  if (!$('#tituloEvidencia').val().trim()) {
    errores.push("• Bloque 1: Falta el título.");
    errB1 = true;
  }
  if (errB1) b1.classList.add('error');

  let errB2 = false;
  if ($('#grupos').val().length === 0) {
    errores.push("• Bloque 2: Falta grupo.");
    errB2 = true;
  }
  if ($('#relProyecto').val().length === 0) {
    errores.push("• Bloque 2: Falta relación con el proyecto.");
    errB2 = true;
  }
  if (!$('#descripcion').val().trim()) {
    errores.push("• Bloque 2: Falta descripción.");
    errB2 = true;
  }
  if (errB2) b2.classList.add('error');

  let errB4 = false;
  const h = $('#herramientasTec').val().length;
  const p = $('#paginasWeb').val().length;
  const s = $('#softwareEspecifico').val().length;
  const e = $('#elementosMultimediaTec').val().length;
  const otros = $('#otrosTec').val().trim();

  if ((h + p + s + e) === 0 && otros === "") {
    errores.push("• Bloque 4: Falta indicar tecnología.");
    errB4 = true;
  }
  if (errB4) b4.classList.add('error');

  let errB5 = false;
  const sesiones = $('#tiempoSesiones').val();
  const horas = $('#tiempoHoras').val();
  const minutos = $('#tiempoMinutos').val();

  if (!sesiones) {
    errores.push("• Bloque 5: Faltan sesiones.");
    errB5 = true;
  }
  if (!horas && !minutos) {
    errores.push("• Bloque 5: Falta tiempo.");
    errB5 = true;
  }
  if (errB5) b5.classList.add('error');

  let errB6 = false;
  const tipoDocu = $('#elementosDocu').val() || [];
  const hayTipo = tipoDocu.length > 0;
  const hayFotos2  = document.querySelectorAll('#previewPub .img-wrapper').length > 0;
  const hayVideos2 = document.querySelectorAll('#videosPub .video-wrap').length > 0;

  if (!hayTipo) {
    errores.push("• Bloque 6: Falta indicar tipo de material.");
    errB6 = true;
  }
  if (hayTipo && !hayFotos2 && !hayVideos2) {
    errores.push("• Bloque 6: Falta imagen o vídeo.");
    errB6 = true;
  }
  if (errB6) b6.classList.add('error');

  if (!$('#textoBlogger').val().trim()) {
    errores.push("• Falta texto Blogger.");
    b7.classList.add("error");
  }

  return errores;
}

/* ============================================================
   MODAL ERRORES
============================================================ */
function mostrarModalErrores(lista) {
  const modal = document.getElementById("modalErrores");
  const ul = document.getElementById("listaErrores");
  ul.innerHTML = "";

  lista.forEach(err => {
    const li = document.createElement("li");
    li.textContent = err;
    ul.appendChild(li);
  });

  modal.style.display = "block";
}

document.getElementById("cerrarModal").onclick = () => {
  document.getElementById("modalErrores").style.display = "none";
};

/* ============================================================
   BOTONES BLOGGER
============================================================ */
document.getElementById("btnConectarBlogger").onclick = () => {
  iniciarOAuth();
};

document.getElementById("btnPublicarBlogger").onclick = () => {
  const errores = validarAntesDePublicar();
  if (errores.length > 0) {
    mostrarModalErrores(errores);
    return;
  }
  publicarEnBlogger();
};

/* ============================================================
   LIMPIAR COLOR ROJO CUANDO SE CORRIGE UN BLOQUE
============================================================ */
function limpiarErroresEnCambio() {

  $('#coordinadores, #tituloEvidencia').on('change keyup', () => {
    const bloques = document.querySelectorAll('.bloque');
    const b1 = bloques[0];

    if ($('#coordinadores').val().length && $('#tituloEvidencia').val().trim()) {
      b1.classList.remove('error');
    }
  });

  $('#grupos, #relProyecto, #descripcion').on('change keyup', () => {
    const bloques = document.querySelectorAll('.bloque');
    const b2 = bloques[1];

    if (
      $('#grupos').val().length &&
      $('#relProyecto').val().length &&
      $('#descripcion').val().trim()
    ) {
      b2.classList.remove('error');
    }
  });

  $('#herramientasTec, #paginasWeb, #softwareEspecifico, #elementosMultimediaTec, #otrosTec')
    .on('change keyup', () => {

    const bloques = document.querySelectorAll('.bloque');
    const b4 = bloques[3];

    const h = $('#herramientasTec').val().length;
    const p = $('#paginasWeb').val().length;
    const s = $('#softwareEspecifico').val().length;
    const e = $('#elementosMultimediaTec').val().length;
    const otros = $('#otrosTec').val().trim();

    if ((h + p + s + e) > 0 || otros !== "") {
      b4.classList.remove('error');
    }
  });

  $('#tiempoSesiones, #tiempoHoras, #tiempoMinutos').on('change', () => {

    const bloques = document.querySelectorAll('.bloque');
    const b5 = bloques[4];

    const s = $('#tiempoSesiones').val();
    const h = $('#tiempoHoras').val();
    const m = $('#tiempoMinutos').val();

    if (s && (h || m)) {
      b5.classList.remove('error');
    }
  });

  function comprobarBloque6() {

    const bloques = document.querySelectorAll('.bloque');
    const b6 = bloques[5];

    const hayTipo = $('#elementosDocu').val().length > 0;
    const hayFotos = document.querySelectorAll('#previewPub .img-wrapper').length > 0;
    const hayVideos = document.querySelectorAll('#videosPub .video-wrap').length > 0;

    if (hayTipo && (hayFotos || hayVideos)) {
      b6.classList.remove('error');
    }
  }

  $('#elementosDocu').on('change', comprobarBloque6);

  const observerB6 = new MutationObserver(comprobarBloque6);
  observerB6.observe(document.getElementById('previewPub'), { childList: true });
  observerB6.observe(document.getElementById('videosPub'), { childList: true });
}

limpiarErroresEnCambio();

/* ============================================================
   LIMPIAR ERROR BLOQUE 6 EN CULTURA EMPRENDEDORA AL AÑADIR MEDIA
============================================================ */
function comprobarBloque6Emprendedora() {

  if (PROYECTO_ACTUAL !== "EMPRENDEDORA") return;

  const bloques = document.querySelectorAll('.bloque');
  const b6 = bloques[5];

  const hayFotos  = document.querySelectorAll('#previewPub .img-wrapper').length > 0;
  const hayVideos = document.querySelectorAll('#videosPub .video-wrap').length > 0;

  if (hayFotos || hayVideos) {
    b6.classList.remove("error");
  }
}

// OBSERVADOR AUTOMÁTICO (detecta cuando añades fotos/vídeos)
const observerEmprendedora = new MutationObserver(comprobarBloque6Emprendedora);

observerEmprendedora.observe(document.getElementById("previewPub"), { childList: true });
observerEmprendedora.observe(document.getElementById("videosPub"), { childList: true });
/* ============================================================
   PANTALLA SEMITRANSPARENTE "PUBLICANDO..."
============================================================ */
function mostrarPantallaPublicando() {
  const overlay = document.getElementById("overlayPublicando");
  if (overlay) overlay.style.display = "flex";
}

function ocultarPantallaPublicando() {
  const overlay = document.getElementById("overlayPublicando");
  if (overlay) overlay.style.display = "none";
}

/* ============================================================
   PANTALLA SEMITRANSPARENTE "CONECTANDO CON BLOGGER..."
============================================================ */
function mostrarPantallaConectando() {
  let overlay = document.getElementById("overlayConectando");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlayConectando";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "3500";

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
    caja.innerHTML = "🔐 Conectando con Blogger...";

    overlay.appendChild(caja);
    document.body.appendChild(overlay);
  }

  overlay.style.display = "flex";
}

function ocultarPantallaConectando() {
  const overlay = document.getElementById("overlayConectando");
  if (overlay) overlay.style.display = "none";
}

/* ============================================================
   LIMPIAR FICHA COMPLETA
============================================================ */
document.getElementById("btnLimpiar").onclick = () => {

  if (!confirm("¿Seguro que quieres borrar toda la ficha?")) return;

  document.querySelectorAll("input[type='text'], textarea").forEach(el => {
    el.value = "";
  });

  document.querySelectorAll("select").forEach(sel => {
    $(sel).val(null).trigger("change");
  });

  document.querySelectorAll(".preview").forEach(div => div.innerHTML = "");
  document.querySelectorAll(".video-container").forEach(div => div.innerHTML = "");

  document.querySelectorAll(".bloque").forEach(b => b.classList.remove("error"));

  document.getElementById("btnAutoTexto").classList.add("active");
  document.getElementById("btnManualTexto").classList.remove("active");
  document.getElementById("textoBlogger").disabled = true;

  alert("✅ Ficha limpiada correctamente");
};

/* ============================================================
   SELECCIÓN DE PROYECTO ACTIVO
============================================================ */
let PROYECTO_ACTUAL = null;

function elegirProyecto(tipo) {
  PROYECTO_ACTUAL = tipo;
  localStorage.setItem("proyectoActual", tipo);

  document.getElementById("pantallaProyecto").style.display = "none";
  configurarInterfazPorProyecto();
}

/* ============================================================
   CONFIGURACIÓN DE INTERFAZ SEGÚN PROYECTO
============================================================ */
function configurarInterfazPorProyecto() {

  const bloques = document.querySelectorAll(".bloque");

  const bloque2 = bloques[1]; // Descripción
  const bloque3 = bloques[2]; // Preparación
  const bloque4 = bloques[3]; // Tecnología
  const bloque5 = bloques[4]; // Tiempo
  const bloque6 = bloques[5]; // Multimedia
  const bloque7 = bloques[6]; // Texto Blogger

  const toggleTexto = document.querySelector(".toggle-group");
  const textarea = document.getElementById("textoBlogger");

  const filaTipo = document.querySelector("#elementosDocu")?.closest(".fila");
  const h3Bloque1 = bloques[0]?.querySelector("h3");

  /* ==========================
     CULTURA EMPRENDEDORA
  ========================== */
  if (PROYECTO_ACTUAL === "EMPRENDEDORA") {

    if (bloque2) bloque2.style.display = "none";
    if (bloque3) bloque3.style.display = "none";
    if (bloque4) bloque4.style.display = "none";
    if (bloque5) bloque5.style.display = "none";

    if (h3Bloque1) h3Bloque1.textContent = "EVIDENCIAS CULTURA EMPRENDEDORA";

    if (bloque6) {
      bloque6.style.display = "";
      bloque6.querySelector("h3").textContent = "PUBLICACIÓN DE IMÁGENES Y VÍDEOS";
    }

    // Ocultar "Tipo de elementos" (select, fila y contenedor Select2)
    if (filaTipo) filaTipo.style.display = "none";

    const selectTipo = document.getElementById("elementosDocu");
    if (selectTipo) selectTipo.style.display = "none";

    const select2Box = document.getElementById("select2-elementosDocu-container")?.closest(".select2-container");
    if (select2Box) select2Box.style.display = "none";

    if (bloque7) {
      bloque7.style.display = "";
      const h3b7 = bloque7.querySelector("h3");
      if (h3b7) h3b7.textContent = "TEXTO PARA LA PUBLICACIÓN";
    }

    if (toggleTexto) toggleTexto.style.display = "none";
    if (textarea) textarea.disabled = false;

    const titulo = document.getElementById("tituloProyecto");
    if (titulo) titulo.textContent = "Cultura Emprendedora · Curso 25/26";
  }

  /* ==================
        C I T E
  ================== */
  if (PROYECTO_ACTUAL === "CITE") {

    if (bloque2) bloque2.style.display = "";
    if (bloque3) bloque3.style.display = "";
    if (bloque4) bloque4.style.display = "";
    if (bloque5) bloque5.style.display = "";

    if (h3Bloque1) h3Bloque1.textContent = "BLOQUE 1 · Evidencias CITE";

    if (bloque6) {
      bloque6.style.display = "";
      bloque6.querySelector("h3").textContent =
        "BLOQUE 6 · Elementos multimedia que documentan la actividad";
    }

    // Restaurar "Tipo de elementos"
    if (filaTipo) filaTipo.style.display = "";

    const selectTipo = document.getElementById("elementosDocu");
    if (selectTipo) selectTipo.style.display = "";

    const select2Box = document.getElementById("select2-elementosDocu-container")?.closest(".select2-container");
    if (select2Box) select2Box.style.display = "";

    if (bloque7) bloque7.style.display = "";

    if (toggleTexto) toggleTexto.style.display = "flex";

    document.getElementById("btnAutoTexto").classList.add("active");
    document.getElementById("btnManualTexto").classList.remove("active");
    if (textarea) textarea.disabled = true;

    const titulo = document.getElementById("tituloProyecto");
    if (titulo) titulo.textContent = "Proyecto CITE Colaborativo Curso 25/26";
  }
}

/* ============================================================
   CONTROL DE PANTALLA DE SELECCIÓN DE PROYECTO (FORMA FINAL)
============================================================ */
window.addEventListener("load", () => {

  const pantalla = document.getElementById("pantallaProyecto");
  if (!pantalla) return;

  PROYECTO_ACTUAL = null;
  localStorage.removeItem("proyectoActual");

  pantalla.style.display = "flex";
});


/* ============================================================
   ELIMINAR TEXTO "Tipo de elementos" EN CULTURA EMPRENDEDORA
============================================================ */
function ocultarTextoTipoElementosSiEmprendedora() {

  if (PROYECTO_ACTUAL !== "EMPRENDEDORA") return;

  // Elimina cualquier texto "Tipo de elementos:"
  document.querySelectorAll("label, span, div, p").forEach(el => {
    if (el.textContent.trim() === "Tipo de elementos:") {
      el.style.display = "none";
    }
  });
}


/* ============================================================
   EJECUTAR LIMPIEZA AL CAMBIAR PROYECTO
============================================================ */
const _configurarOriginal = configurarInterfazPorProyecto;

configurarInterfazPorProyecto = function () {
  _configurarOriginal();
  ocultarTextoTipoElementosSiEmprendedora();
};