/* ============================================================
   HUB 2.º DS · A — Lógica del portal
   ============================================================ */
(function () {
  'use strict';

  var MODULOS = window.MODULOS || [];
  var LS_TEMA = 'hub2:tema';
  var LS_REPASADOS = 'hub2:repasados';

  var $ = function (sel, raiz) { return (raiz || document).querySelector(sel); };
  var $$ = function (sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function norm(s) {
    return String(s == null ? '' : s)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function leer(clave, porDefecto) {
    try {
      var v = localStorage.getItem(clave);
      return v ? JSON.parse(v) : porDefecto;
    } catch (e) { return porDefecto; }
  }
  function guardar(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) {}
  }

  var estado = {
    area: 'Todas',
    q: '',
    repasados: new Set(leer(LS_REPASADOS, [])),
    quiz: {},           // id -> { respuestas: {indicePregunta: opcion}, aciertos }
    focoPrevio: null
  };

  /* ---------------- tema ---------------- */
  function aplicarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    var b = $('#tema');
    if (b) {
      b.setAttribute('aria-pressed', tema === 'light' ? 'true' : 'false');
      b.setAttribute('aria-label', tema === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
      b.textContent = tema === 'light' ? '☀' : '☾';
    }
  }
  function iniciarTema() {
    var guardado = leer(LS_TEMA, null);
    var prefiereClaro = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    aplicarTema(guardado || (prefiereClaro ? 'light' : 'dark'));
    $('#tema').addEventListener('click', function () {
      var actual = document.documentElement.getAttribute('data-theme');
      var nuevo = actual === 'light' ? 'dark' : 'light';
      aplicarTema(nuevo);
      guardar(LS_TEMA, nuevo);
    });
  }

  /* ---------------- progreso ---------------- */
  function totalRepasados() {
    return MODULOS.filter(function (m) { return estado.repasados.has(m.id); }).length;
  }
  function pintarProgreso() {
    var total = MODULOS.length;
    var hechos = totalRepasados();
    var pct = total ? Math.round((hechos / total) * 100) : 0;
    $('#barraFill').style.width = pct + '%';
    $('#progresoTxt').textContent = hechos + ' de ' + total + ' módulos repasados (' + pct + '%)';
  }
  function alternarRepasado(id) {
    if (estado.repasados.has(id)) estado.repasados.delete(id);
    else estado.repasados.add(id);
    guardar(LS_REPASADOS, Array.from(estado.repasados));
    pintarProgreso();
    pintarGrid();
    var boton = $('#btnRepasado');
    if (boton) {
      var hecho = estado.repasados.has(id);
      boton.classList.toggle('hecho', hecho);
      boton.textContent = hecho ? '✓ Ya lo repasé' : 'Marcar como repasado';
    }
  }

  /* ---------------- filtros ---------------- */
  function areas() {
    var vistos = [];
    MODULOS.forEach(function (m) {
      if (m.area && vistos.indexOf(m.area) === -1) vistos.push(m.area);
    });
    return vistos;
  }
  function pintarChips() {
    var cont = $('#chips');
    var lista = ['Todas'].concat(areas());
    cont.innerHTML = lista.map(function (a) {
      return '<button type="button" class="chip" data-area="' + esc(a) + '" aria-pressed="' +
        (estado.area === a ? 'true' : 'false') + '">' + esc(a) + '</button>';
    }).join('');
  }
  function coincide(m) {
    if (estado.area !== 'Todas' && m.area !== estado.area) return false;
    var q = norm(estado.q).trim();
    if (!q) return true;
    var texto = norm([m.nombre, m.resumen, m.docente, m.area, m.periodo, m.nota]
      .concat(m.herramientas || [], m.programas || [], m.instrumentos || [])
      .concat((m.actividades || []).map(function (a) { return a.nombre; }))
      .join(' '));
    return texto.indexOf(q) !== -1;
  }

  /* ---------------- tarjetas ---------------- */
  function pintarGrid() {
    var grid = $('#grid');
    var lista = MODULOS.filter(coincide);
    $('#resumen').textContent = lista.length + ' de ' + MODULOS.length + ' módulos';
    $('#vacio').hidden = lista.length !== 0;

    grid.innerHTML = lista.map(function (m) {
      var hecho = estado.repasados.has(m.id);
      return '' +
        '<article class="card' + (hecho ? ' repasado' : '') + '">' +
          '<div class="card-top">' +
            '<span class="area">' + esc(m.area || 'Módulo') + '</span>' +
            (m.periodo ? '<span class="periodo">' + esc(m.periodo) + '</span>' : '') +
          '</div>' +
          '<h3>' + esc(m.nombre) + '</h3>' +
          '<p>' + esc(m.resumen) + '</p>' +
          '<div class="pie">' +
            '<span>' + esc(m.docente || '') + '</span>' +
            (hecho ? '<span class="ok">✓ repasado</span>' : '') +
          '</div>' +
          '<button type="button" class="btn" data-abrir="' + esc(m.id) + '">Ver ficha</button>' +
        '</article>';
    }).join('');
  }

  /* ---------------- ficha ---------------- */
  function caja(titulo, items) {
    if (!items || !items.length) return '';
    return '<div class="caja"><h4>' + esc(titulo) + '</h4><ul>' +
      items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') +
      '</ul></div>';
  }
  function enlaces(titulo, items) {
    if (!items || !items.length) return '';
    return '<div class="caja"><h4>' + esc(titulo) + '</h4><div class="enlaces">' +
      items.map(function (r) {
        return '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.nombre) + '</a>';
      }).join('') +
      '</div></div>';
  }

  function pintarQuiz(m) {
    var q = estado.quiz[m.id] || { respuestas: {}, aciertos: 0 };
    estado.quiz[m.id] = q;
    var html = '<div class="quiz" data-quiz="' + esc(m.id) + '">';
    (m.quiz || []).forEach(function (preg, i) {
      var elegida = q.respuestas[i];
      html += '<div class="preg" data-preg="' + i + '"><p>' + (i + 1) + '. ' + esc(preg.p) + '</p><div class="opciones">';
      preg.opciones.forEach(function (op, j) {
        var clase = 'opcion';
        var deshabilitado = '';
        if (elegida !== undefined) {
          deshabilitado = ' disabled';
          if (j === preg.correcta) clase += ' correcta';
          else if (j === elegida) clase += ' incorrecta';
        }
        html += '<button type="button" class="' + clase + '" data-op="' + j + '"' + deshabilitado + '>' + esc(op) + '</button>';
      });
      html += '</div>';
      if (elegida !== undefined) {
        html += '<p class="explica"><b>' + (elegida === preg.correcta ? 'Correcto. ' : 'No exactamente. ') + '</b>' + esc(preg.explica) + '</p>';
      }
      html += '</div>';
    });
    var total = (m.quiz || []).length;
    html += '<p class="marcador">Aciertos: <b>' + q.aciertos + ' de ' + total + '</b>' +
      (q.aciertos === total && total ? ' · ¡Módulo dominado!' : '') + '</p>';
    html += '</div>';
    return html;
  }

  function actividades(m) {
    if (!m.actividades || !m.actividades.length) return '';
    return '<div class="d-sec"><h3>Actividades del módulo</h3><ul class="acts">' +
      m.actividades.map(function (a) {
        return '<li class="act">' +
          '<span class="act-n">' + esc(a.nombre) + '</span>' +
          '<span class="act-f">' + esc(a.fecha || '') + '</span>' +
          '<span class="act-nota">' + esc(a.nota || '') + '</span>' +
          '</li>';
      }).join('') +
      '</ul></div>';
  }

  function pintarDetalle(m) {
    var hecho = estado.repasados.has(m.id);
    var html = '' +
      '<span class="d-tag">' + esc(m.area || 'Módulo') + '</span>' +
      '<h2 id="dTitulo">' + esc(m.nombre) + '</h2>' +
      '<p class="d-doc">' + esc(m.docente || '') + '</p>' +
      (m.periodo || m.nota
        ? '<p class="d-meta">' +
            (m.periodo ? '<span>' + esc(m.periodo) + '</span>' : '') +
            (m.nota ? '<span>' + esc(m.nota) + '</span>' : '') +
          '</p>'
        : '') +
      '<p class="d-resumen">' + esc(m.resumen) + '</p>' +

      '<div class="d-sec">' +
        '<h3>Lo que aprendiste</h3>' +
        '<div class="caja"><ul>' + (m.aprendizajes || []).map(function (a) {
          return '<li>' + esc(a) + '</li>';
        }).join('') + '</ul></div>' +
      '</div>' +

      actividades(m) +

      '<div class="d-sec dos">' +
        caja('Instrumentos', m.instrumentos) +
        caja('Programas', m.programas) +
        caja('Herramientas', m.herramientas) +
        enlaces('Recursos', m.recursos) +
      '</div>' +

      '<div class="d-sec">' + enlaces('Evidencias', m.evidencias) + '</div>' +

      '<div class="d-sec">' +
        '<h3>Quiz de repaso</h3>' +
        pintarQuiz(m) +
      '</div>' +

      '<div class="d-pie">' +
        '<button type="button" id="btnRepasado" class="btn' + (hecho ? ' hecho' : '') + '" data-repasado="' + esc(m.id) + '">' +
          (hecho ? '✓ Ya lo repasé' : 'Marcar como repasado') +
        '</button>' +
        '<button type="button" class="btn ghost" data-cerrar="1">Cerrar</button>' +
      '</div>';

    $('#detalleContenido').innerHTML = html;
  }

  function abrirDetalle(id) {
    var m = MODULOS.filter(function (x) { return x.id === id; })[0];
    if (!m) return;
    estado.focoPrevio = document.activeElement;
    pintarDetalle(m);
    var d = $('#detalle');
    d.hidden = false;
    document.body.style.overflow = 'hidden';
    if (location.hash !== '#modulo=' + id) history.replaceState(null, '', '#modulo=' + id);
    $('#cerrar').focus();
  }

  function cerrarDetalle() {
    $('#detalle').hidden = true;
    document.body.style.overflow = '';
    if (location.hash.indexOf('#modulo=') === 0) history.replaceState(null, '', location.pathname + location.search);
    if (estado.focoPrevio && estado.focoPrevio.focus) estado.focoPrevio.focus();
  }

  /* ---------------- eventos ---------------- */
  function iniciarEventos() {
    $('#chips').addEventListener('click', function (e) {
      var b = e.target.closest('[data-area]');
      if (!b) return;
      estado.area = b.getAttribute('data-area');
      pintarChips();
      pintarGrid();
    });

    var q = $('#q');
    q.addEventListener('input', function () {
      estado.q = q.value;
      pintarGrid();
    });

    $('#grid').addEventListener('click', function (e) {
      var b = e.target.closest('[data-abrir]');
      if (b) abrirDetalle(b.getAttribute('data-abrir'));
    });

    $('#cerrar').addEventListener('click', cerrarDetalle);

    $('#detalle').addEventListener('click', function (e) {
      if (e.target === this) cerrarDetalle();
      if (e.target.closest('[data-cerrar]')) cerrarDetalle();

      var rep = e.target.closest('[data-repasado]');
      if (rep) alternarRepasado(rep.getAttribute('data-repasado'));

      var op = e.target.closest('[data-op]');
      if (op && !op.disabled) {
        var quizEl = op.closest('[data-quiz]');
        var pregEl = op.closest('[data-preg]');
        var id = quizEl.getAttribute('data-quiz');
        var iPreg = parseInt(pregEl.getAttribute('data-preg'), 10);
        var iOp = parseInt(op.getAttribute('data-op'), 10);
        var m = MODULOS.filter(function (x) { return x.id === id; })[0];
        var qz = estado.quiz[id];
        if (!m || !qz || qz.respuestas[iPreg] !== undefined) return;
        qz.respuestas[iPreg] = iOp;
        if (iOp === m.quiz[iPreg].correcta) qz.aciertos++;
        pintarDetalle(m);
        $('#cerrar').focus();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('#detalle').hidden) cerrarDetalle();
      if (e.key === '/' && document.activeElement !== $('#q')) {
        e.preventDefault();
        $('#q').focus();
      }
    });

    window.addEventListener('hashchange', function () {
      var m = location.hash.match(/^#modulo=(.+)$/);
      if (m) abrirDetalle(decodeURIComponent(m[1]));
      else if (!$('#detalle').hidden) cerrarDetalle();
    });
  }

  /* ---------------- arranque ---------------- */
  function iniciar() {
    if (!MODULOS.length) {
      $('#grid').innerHTML = '<p class="vacio">Todavía no hay módulos en <code>data/modulos.js</code>.</p>';
      $('#resumen').textContent = '';
      $('#vacio').hidden = true;
      $('#avisoDemo').hidden = true;
      iniciarTema();
      return;
    }

    $('#avisoDemo').hidden = !MODULOS.some(function (m) { return m.demo; });
    iniciarTema();
    pintarChips();
    pintarGrid();
    pintarProgreso();
    iniciarEventos();

    var m = location.hash.match(/^#modulo=(.+)$/);
    if (m) abrirDetalle(decodeURIComponent(m[1]));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
