/* =====================================================================
   BLOGGER.JS — PUBLICACIÓN + ETIQUETAS AUTOMÁTICAS + FICHA FINAL HTML
===================================================================== */

let accessToken = null;

let bloggerConectado = false;

function actualizarBotonConexion() {
  const btn = document.getElementById("btnConectarBlogger");
  if (!btn) return;

  if (bloggerConectado) {
    btn.style.display = "none";
  } else {
    btn.style.display = "";
  }
}

const ETIQUETAS_CITE_DOCENTE = {
  "Javier Blanco Ávila": "25-26JavierBCITE",
  "Susana Bordes Escalera": "25-26SusanaBCITE",
  "María Ángeles Castaño Barriga": "25-26AngelesCCITE",
  "Sergio Chanclón Parra": "25-26SergioCCITE",
  "Esther María Díaz Sierra": "25-26EstherDCITE",
  "Jorge Fernández Solana": "25-26JorgeFCITE",
  "Alba González Rodríguez": "25-26AlbaGCITE",
  "Susana Lobato Muñoz": "25-26SusanaLCITE",
  "Noelia Molina Rubio": "25-26NoeliaMCITE",
  "María del Campo Muñoz Collado": "25-26MaríaMuñozCITE",
  "Encarnación Ortiz Fernández": "25-26EncarnaOCITE",
  "Lucía Pajares Moreno": "25-26LuciaPCITE",
  "María Asunción Quintana Castro": "25-26AsunciónQCITE",
  "María Remedios Román Román": "25-26MaríaRománCITE",
  "María Luisa Santos Martínez": "25-26LuisiSCITE",
  "Cosme A. Tomé Fernández": "25-26CosmeTCITE"
};

/* Logos:
   Asegúrate de que estos archivos o URLs apunten a imágenes accesibles
   (pueden ser rutas absolutas a imágenes subidas a Blogger, Drive, etc.).
*/
/* ============================================================
   LOGOS (URLs públicas en Blogger)
============================================================ */
const URL_LOGO_CITE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOrYOnxSw3qSwogcnVY01xHd5uwAHmgEceeUb7vaifucU1-c0JVfc3U1a7ps20VvmQiJWjBrfQZikiYZ4nM5tX6bqBc5BVspgdzr9m6E6vRH1hbQbZyBl2-mWg2tCX8kJu1Q0e9t_SB61OPaCZ0s-OemyIi1THlp1qLFpO0JEi6Os73XXpIst7Hfx0WxQ/s401/logo_cite_pastel.png";

const URL_LOGO_CIGUENA = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1a1RhDrYraCilvmYPepcayISSRDjlPtKWpd2d3SoteGvzG8UWwS-DkEDpn42-3vbmfKSzfbB9crpeh-OZGl0vdCpH6OUssw_4ZwFnBwz-ITePHoFUY9txY7-mjycuJzICp0Iw1UK-VrGZerFMKrtazVXCME-vfcUbLGC1g69hBYqfJMehoycrb-sEFVU/s1094/logo_ciguena.png";

const URL_LOGO_INNOVATED = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh31o2P2cq-0q8ZfFPrSdk_Cgr8iPhjP8FyRAdANQIlYadn4dVypI_uPfi0-qnBNQBHEQs7RnAR71Arjv-HDCZkJEj6yLNMb7vTh2wS8g01M9se2CFoRT0rh3UjSfBe5oJWEm9Nka_MKbSfqFMNNocPcQjHgMYbKUkugAvVnGzSfL5upEasiFscPTp2Umc/s466/logo_innovated.png";

/* Carga del script de Google Identity para OAuth */
(function cargarGSIScript() {
  const s = document.createElement("script");
  s.src = "https://accounts.google.com/gsi/client";
  s.async = true;
  document.head.appendChild(s);
})();

/* ============================================================
   LOGIN OAuth Google
============================================================ */

function iniciarOAuth() {

  if (!window.google || !google.accounts || !google.accounts.oauth2) {
    alert("Todavía se está cargando el servicio de Google. Espera un momento y vuelve a intentarlo.");
    return;
  }

  // Pantalla semitransparente "Conectando con Blogger..."
  mostrarPantallaConectando();

  google.accounts.oauth2.initTokenClient({
    client_id: "433763355837-h1fi3pqlbt2hgbngv05vmo5b3nodmdin.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/blogger",
    callback: (tokenResponse) => {

      accessToken = tokenResponse.access_token;
      bloggerConectado = true;

      const btn = document.getElementById("btnConectarBlogger");
      if (btn) {
        btn.style.display = "none";
      }

      // Ocultar pantalla "Conectando..."
      ocultarPantallaConectando();

      // Mensaje visual de éxito
      const ok = document.createElement("div");
      ok.style.position = "fixed";
      ok.style.inset = "0";
      ok.style.background = "rgba(0,0,0,0.45)";
      ok.style.display = "flex";
      ok.style.alignItems = "center";
      ok.style.justifyContent = "center";
      ok.style.zIndex = "3600";

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
      caja.innerHTML = "✅ Conectado correctamente con Blogger";

      ok.appendChild(caja);
      document.body.appendChild(ok);

      setTimeout(() => ok.remove(), 2500);
    }
  }).requestAccessToken();

}

/* ============================================================
   ETIQUETAS AUTOMÁTICAS (CITE / CULTURA EMPRENDEDORA)
============================================================ */
function generarEtiquetas() {

  // ===== FORZAR PROYECTO DESDE LOCALSTORAGE SI NO EXISTE =====
  let guardado = localStorage.getItem("proyectoActual");

  if (!window.PROYECTO_ACTUAL && guardado) {
    window.PROYECTO_ACTUAL = guardado;
  }

  if (window.PROYECTO_ACTUAL) {
    window.PROYECTO_ACTUAL = window.PROYECTO_ACTUAL.trim().toUpperCase();
  }

  console.log("PROYECTO_ACTUAL REAL =", window.PROYECTO_ACTUAL);

  const seleccion = $("#coordinadores").val() || [];
  let etiquetas = [];

  // ===== ETIQUETA GENERAL DEL PROYECTO =====
  if (window.PROYECTO_ACTUAL === "CITE") {
    etiquetas.push("25-26CITEColaborativo");
  }

  if (window.PROYECTO_ACTUAL === "EMPRENDEDORA") {
    etiquetas.push("25-26CulturaEmprendedora");
  }

  // ===== ETIQUETAS POR DOCENTE =====
  seleccion.forEach((nombre) => {

    const proyecto = window.PROYECTO_ACTUAL === "EMPRENDEDORA"
      ? "CEmprendedora"
      : "CITE";

    // === EXCEPCIONES OFICIALES ===

    if (nombre === "María Asunción Quintana Castro")
      return etiquetas.push(`25-26AsunciónQ${proyecto}`);

    if (nombre === "María del Campo Muñoz Collado")
      return etiquetas.push(`25-26MaríaM${proyecto}`);

    if (nombre === "María Remedios Román Román")
      return etiquetas.push(`25-26MaríaR${proyecto}`);

    if (nombre === "María Luisa Santos Martínez")
      return etiquetas.push(`25-26LuisiS${proyecto}`);

    if (nombre === "Cosme A. Tomé Fernández")
      return etiquetas.push(`25-26CosmeT${proyecto}`);

    if (nombre === "M. Puerto Vega Díaz")
      return etiquetas.push(`25-26PuertoV${proyecto}`);

    if (nombre === "María Ángeles Castaño Barriga")
      return etiquetas.push(`25-26MaríaC${proyecto}`);

    // === REGLA GENERAL ===
    const limpio = nombre.replace(/\./g, "").trim();
    const partes = limpio.split(" ");

    const nombreBase = partes[0];
    const inicialApellido = partes[1]?.charAt(0) || "";

    etiquetas.push(`25-26${nombreBase}${inicialApellido}${proyecto}`);

  });

  // ===== ELIMINAR DUPLICADOS =====
  etiquetas = [...new Set(etiquetas)];

  console.log("ETIQUETAS FINALES:", etiquetas);

  return etiquetas;
}

/* ============================================================
   ESCAPADOR
============================================================ */
function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

function joinValoresSelect(id) {
  const vals = $(id).val() || [];
  return esc(vals.join(", "));
}

function valorSelectTexto(id) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el || !el.value) return "";
  const opt = el.options[el.selectedIndex];
  return esc(opt ? opt.text : el.value);
}

/* ============================================================
   FICHA FINAL HTML (para incluir al final del post)
============================================================ */
function generarFichaHTML() {

  // Crea una fila solo si hay contenido
  function fila(label, valor) {
    if (!valor || valor.trim() === "") return "";
    return `
<tr>
  <td style="width:160px;white-space:nowrap;border:1px solid #aac;padding:6px;font-weight:bold;">${label}:</td>
  <td style="border:1px solid #aac;padding:6px;">${valor}</td>
</tr>`;
  }

  // Crea un bloque SIN la palabra "BLOQUE" y con títulos completos
function bloque(titulo, contenido) {
  if (!contenido.trim()) return "";

  const titulos = {
    "BLOQUE 1": "Datos iniciales",
    "BLOQUE 2": "Descripción de la actividad",
    "BLOQUE 3": "Elementos preparados previos al trabajo con el alumnado",
    "BLOQUE 4": "Elementos tecnológicos específicos usados",
    "BLOQUE 5": "Tiempo dedicado",
    "BLOQUE 6": "Elementos multimedia que documentan la actividad"
  };

  let limpio = titulo;

  Object.keys(titulos).forEach(k => {
    if (titulo.startsWith(k)) limpio = titulos[k];
  });

  return `
    <tr>
      <th colspan="2" style="background:#2d6cdf;color:#fff;padding:6px;">
        ${limpio}
      </th>
    </tr>
    ${contenido}
  `;
}

const coords = joinValoresSelect("#coordinadores");
const titulo = esc($("#tituloEvidencia").val().trim());
const grupos = joinValoresSelect("#grupos");
const objetivos = joinValoresSelect("#objetivosCite");
const relP = joinValoresSelect("#relProyecto");
const como = esc($("#descripcion").val().trim());
const metodologias = joinValoresSelect("#metodologiasActivas");

const descPrev = esc($("#descripcionPreparados").val().trim());
const tiempoPrev = valorSelectTexto("#tiempoPreparacion");

const herr = joinValoresSelect("#herramientasTec");
const pags = joinValoresSelect("#paginasWeb");
const soft = joinValoresSelect("#softwareEspecifico");
const mult = joinValoresSelect("#elementosMultimediaTec");
const otros = esc($("#otrosTec").val().trim());

const sesiones = valorSelectTexto("#tiempoSesiones");
const horas = valorSelectTexto("#tiempoHoras");
const minutos = valorSelectTexto("#tiempoMinutos");
const tiempoEjec = horas && minutos ? `${horas} / ${minutos}` : (horas || minutos);

const tipo = joinValoresSelect("#elementosDocu");

  // Construcción de bloques con filas solo si hay datos
  const bloque1 = bloque("BLOQUE 1. Datos iniciales",
    fila("Coordinadores", coords) +
    fila("Título", titulo)
  );

  const bloque2 = bloque("BLOQUE 2. Descripción",
  fila("Grupos", grupos) +
  fila("Objetivo", objetivos) +
  fila("Relación", relP) +
  fila("Desarrollo", como) +
  fila("Metodologías activas", metodologias)
);

  const bloque3 = bloque("BLOQUE 3. Preparación",
    fila("Descripción", descPrev) +
    fila("Tiempo", tiempoPrev)
  );

  const bloque4 = bloque("BLOQUE 4. Tecnología",
    fila("Herramientas", herr) +
    fila("Webs", pags) +
    fila("Software", soft) +
    fila("Multimedia", mult) +
    fila("Otros", otros)
  );

  const bloque5 = bloque("BLOQUE 5. Tiempo",
    fila("Ejecución", tiempoEjec) +
    fila("Sesiones", sesiones)
  );

  const bloque6 = bloque("BLOQUE 6. Multimedia",
    fila("Tipo", tipo)
  );

  return `
  <div style="margin-top:40px;border:2px solid #2d6cdf;border-radius:10px;padding:16px;background:#ffffff;font-family:Arial, sans-serif;">

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
      <img src="${URL_LOGO_CITE}" alt="Logo CITE" style="height:60px;object-fit:contain;" />
      <div style="text-align:center;font-weight:bold;color:#003366;font-size:14px;">
        <div>CEIP Santa María del Prado</div>
        <div>Proyecto CITE Colaborativo · Curso 25/26</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <img src="${URL_LOGO_INNOVATED}" alt="Innovated" style="height:40px;object-fit:contain;" />
        <img src="${URL_LOGO_CIGUENA}" alt="Cigüeña" style="height:70px;object-fit:contain;" />
      </div>
    </div>

    <h2 style="text-align:center;color:#003366;margin-top:0;">Ficha de la actividad CITE 25/26</h2>

    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      ${bloque1}
      ${bloque2}
      ${bloque3}
      ${bloque4}
      ${bloque5}
      ${bloque6}
    </table>
  </div>
  `;
}

/* ============================================================
   CUERPO HTML COMPLETO PARA BLOGGER
============================================================ */
function generarHTMLparaBlogger(payload) {
  const titulo = esc(payload.titulo || "");
  const texto = esc(payload.texto || "");

  let imagenesHTML = "";
  let videosHTML = "";

  if (payload.proyecto === "CITE") {
    (payload.preparacion?.imagenes || []).forEach(src => {
      imagenesHTML += `
      <p style="text-align:center;">
        <img src="${src}" style="max-width:100%;border-radius:8px;margin:8px 0;" />
      </p>`;
    });

    (payload.multimedia?.imagenes || []).forEach(src => {
      imagenesHTML += `
      <p style="text-align:center;">
        <img src="${src}" style="max-width:100%;border-radius:8px;margin:8px 0;" />
      </p>`;
    });

    (payload.preparacion?.videos || []).forEach(src => {
      videosHTML += `
      <p style="text-align:center;margin:12px 0;">
        <iframe width="300" height="170" src="${src}" allowfullscreen></iframe>
      </p>`;
    });

    (payload.multimedia?.videos || []).forEach(src => {
      videosHTML += `
      <p style="text-align:center;margin:12px 0;">
        <iframe width="300" height="170" src="${src}" allowfullscreen></iframe>
      </p>`;
    });

    return `
    <div style="font-family:Arial, sans-serif;">
      <h2 style="text-align:center;font-weight:bold;">${titulo}</h2>
      <div style="text-align:justify;margin-bottom:16px;">${texto}</div>
      ${imagenesHTML}
      ${videosHTML}
    </div>
    `;
  }

  if (payload.proyecto === "EMPRENDEDORA") {
    (payload.imagenes || []).forEach(src => {
      imagenesHTML += `
      <p style="text-align:center;">
        <img src="${src}" style="max-width:100%;border-radius:8px;margin:8px 0;" />
      </p>`;
    });

    (payload.videos || []).forEach(src => {
      videosHTML += `
      <p style="text-align:center;margin:12px 0;">
        <iframe width="300" height="170" src="${src}" allowfullscreen></iframe>
      </p>`;
    });

    return `
    <div style="font-family:Arial, sans-serif;">
      <h2 style="text-align:center;font-weight:bold;">${titulo}</h2>
      <div style="text-align:justify;margin-bottom:16px;">${texto}</div>
      ${imagenesHTML}
      ${videosHTML}
    </div>
    `;
  }

  if (payload.proyecto === "AULA_DEL_FUTURO") {
    (payload.imagenes || []).forEach(src => {
      imagenesHTML += `
      <p style="text-align:center;">
        <img src="${src}" style="max-width:100%;border-radius:8px;margin:8px 0;" />
      </p>`;
    });

    (payload.videos || []).forEach(src => {
      videosHTML += `
      <p style="text-align:center;margin:12px 0;">
        <iframe width="300" height="170" src="${src}" allowfullscreen></iframe>
      </p>`;
    });

    return `
    <div style="font-family:Arial, sans-serif;">
      <h2 style="text-align:center;font-weight:bold;">${titulo}</h2>
      <div style="text-align:justify;margin-bottom:16px;">${texto}</div>
      ${imagenesHTML}
      ${videosHTML}
    </div>
    `;
  }

  return "";
}

/* ============================================================
   PANTALLA SEMITRANSPARENTE (CONECTANDO / PUBLICANDO)
============================================================ */

function mostrarPantallaPublicando() {
  let overlay = document.getElementById("overlayPublicando");
  let mensaje = overlay ? overlay.querySelector(".mensajePublicando") : null;

  // Si no existe, la crea automáticamente
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlayPublicando";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "3000";

    mensaje = document.createElement("div");
    mensaje.className = "mensajePublicando";

    mensaje.style.background = "white";
    mensaje.style.padding = "30px 40px";
    mensaje.style.borderRadius = "14px";
    mensaje.style.fontSize = "20px";
    mensaje.style.fontWeight = "bold";
    mensaje.style.color = "#003366";
    mensaje.style.textAlign = "center";
    mensaje.style.border = "3px solid #2d6cdf";
    mensaje.style.boxShadow = "0 6px 25px rgba(0,0,0,0.4)";

    overlay.appendChild(mensaje);
    document.body.appendChild(overlay);
  }

  if (mensaje) {
    mensaje.innerHTML = `
      Publicando en Blogger...
      <br>
      <small>Por favor, espera</small>
    `;
  }

  overlay.style.display = "flex";
}

function ocultarPantallaPublicando() {
  const overlay = document.getElementById("overlayPublicando");
  if (overlay) overlay.style.display = "none";
}

/* ------------------------------------------------------------
   MISMA CAPA PARA "CONECTANDO CON BLOGGER"
------------------------------------------------------------ */

function mostrarPantallaConectando() {
  let overlay = document.getElementById("overlayPublicando");
  let mensaje = overlay ? overlay.querySelector(".mensajePublicando") : null;

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "overlayPublicando";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.55)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "3000";

    mensaje = document.createElement("div");
    mensaje.className = "mensajePublicando";

    mensaje.style.background = "white";
    mensaje.style.padding = "30px 40px";
    mensaje.style.borderRadius = "14px";
    mensaje.style.fontSize = "20px";
    mensaje.style.fontWeight = "bold";
    mensaje.style.color = "#003366";
    mensaje.style.textAlign = "center";
    mensaje.style.border = "3px solid #2d6cdf";
    mensaje.style.boxShadow = "0 6px 25px rgba(0,0,0,0.4)";

    overlay.appendChild(mensaje);
    document.body.appendChild(overlay);
  }

  if (mensaje) {
    mensaje.innerHTML = `
      Conectando con Blogger...
      <br>
      <small>Por favor, espera</small>
    `;
  }

  overlay.style.display = "flex";
}

function ocultarPantallaConectando() {
  ocultarPantallaPublicando();
}

/* ============================================================
   PUBLICAR EN BLOGGER
============================================================ */
async function publicarEnBlogger(payload) {

  if (!accessToken) {
    const aviso = document.createElement("div");
    aviso.style.position = "fixed";
    aviso.style.inset = "0";
    aviso.style.background = "rgba(0,0,0,0.45)";
    aviso.style.display = "flex";
    aviso.style.alignItems = "center";
    aviso.style.justifyContent = "center";
    aviso.style.zIndex = "4000";

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
    caja.innerHTML = "⚠️ Debes conectarte con Blogger antes de publicar";

    aviso.appendChild(caja);
    document.body.appendChild(aviso);

    setTimeout(() => aviso.remove(), 2500);

    throw new Error("Sin conexión con Blogger");
  }

  if (typeof mostrarPantallaPublicando === "function") {
    mostrarPantallaPublicando();
  }

  const contenido = generarHTMLparaBlogger(payload);

  let labels = [];

if (payload.proyecto === "CITE") {
  labels.push("25-26CITEColaborativo");

  (payload.coordinadores || []).forEach(nombre => {
    if (ETIQUETAS_CITE_DOCENTE[nombre]) {
      labels.push(ETIQUETAS_CITE_DOCENTE[nombre]);
    }
  });
}

if (payload.proyecto === "EMPRENDEDORA") {
  labels.push("25-26CulturaEmprendedora");

  (payload.coordinadores || []).forEach(nombre => {
    const etiquetaBase = ETIQUETAS_CITE_DOCENTE[nombre];
    if (etiquetaBase) {
      labels.push(etiquetaBase.replace("CITE", "CEmprendedora"));
    }
  });
}

if (payload.proyecto === "AULA_DEL_FUTURO") {
  labels.push("25-26AulaDelFuturo");

  (payload.maestros || []).forEach(nombre => {
    const etiquetaBase = ETIQUETAS_CITE_DOCENTE[nombre];
    if (etiquetaBase) {
      labels.push(etiquetaBase.replace("CITE", "AulaFuturo"));
    }
  });
}

labels = [...new Set(labels)];

const entrada = {
  kind: "blogger#post",
  blog: { id: "6687362939356673323" },
  title: payload.titulo || "",
  labels: labels,
  content: contenido,
};

  try {
    const res = await fetch(
      "https://www.googleapis.com/blogger/v3/blogs/6687362939356673323/posts/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entrada),
      }
    );

    if (!res.ok) {
      const txt = await res.text();
      console.error("Blogger API error:", txt);
      throw new Error("Error en la publicación");
    }

    const data = await res.json();

    if (typeof ocultarPantallaPublicando === "function") {
      ocultarPantallaPublicando();
    }

    window.open(data.url, "_blank");

    const exito = document.createElement("div");
    exito.style.position = "fixed";
    exito.style.inset = "0";
    exito.style.background = "rgba(0,0,0,0.45)";
    exito.style.display = "flex";
    exito.style.alignItems = "center";
    exito.style.justifyContent = "center";
    exito.style.zIndex = "4000";

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
    caja.innerHTML = `
      ✅ Publicado correctamente en Blogger<br><br>
      <button id="cerrarExito"
              style="
                margin-top:10px;
                padding:10px 22px;
                border:none;
                border-radius:6px;
                background:#2d6cdf;
                color:white;
                font-size:16px;
                cursor:pointer;
              ">
        Aceptar
      </button>
    `;

    exito.appendChild(caja);
    document.body.appendChild(exito);

    document.getElementById("cerrarExito").onclick = () => {
      exito.remove();
    };

    return { ok: true, url: data.url };

  } catch (e) {

    if (typeof ocultarPantallaPublicando === "function") {
      ocultarPantallaPublicando();
    }

    const error = document.createElement("div");
    error.style.position = "fixed";
    error.style.inset = "0";
    error.style.background = "rgba(0,0,0,0.45)";
    error.style.display = "flex";
    error.style.alignItems = "center";
    error.style.justifyContent = "center";
    error.style.zIndex = "4000";

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
    caja.innerHTML = "❌ Error al publicar en Blogger";

    error.appendChild(caja);
    document.body.appendChild(error);

    setTimeout(() => error.remove(), 2500);

    throw e;
  }
}

/* ============================================================
   VALIDACIÓN SEGÚN PROYECTO
============================================================ */
function validarFormulario() {

  let errores = [];

  // Comunes a ambos proyectos
  if (!$("#coordinadores").val() || $("#coordinadores").val().length === 0) {
    errores.push("Debes seleccionar al menos un coordinador.");
  }

  if ($("#tituloEvidencia").val().trim() === "") {
    errores.push("Debes escribir un título.");
  }

  if ($("#textoBlogger").val().trim() === "") {
    errores.push("Debes escribir el texto para la publicación.");
  }

  // Exclusivo Proyecto CITE
  if (window.PROYECTO_ACTUAL === "CITE") {

    if (!$("#grupos").val() || $("#grupos").val().length === 0) {
      errores.push("Debes indicar los grupos implicados.");
    }

    if (!$("#relProyecto").val() || $("#relProyecto").val().length === 0) {
      errores.push("Debes indicar la relación con el proyecto.");
    }

    if ($("#descripcion").val().trim() === "") {
      errores.push("Debes describir cómo se ha llevado a cabo la actividad.");
    }

  }

  // Mostrar errores
  if (errores.length > 0) {
    mostrarErrores(errores);
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarBotonConexion();
});
