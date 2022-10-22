const inputNombre = document.getElementById('nombre_evento');
const inputFecha = document.getElementById('fecha_evento');
const inputAsistencia = document.getElementById('asistencia_evento');
const inputBuscar = document.getElementById('buscar_evento');
const formBuscar = document.getElementById('form');
const listaCoindicencias = document.getElementById('coincidencias');
const tablaBody = document.getElementById('tbody');

const obtenerEvento = async (termino = 'a') => {

  const resp = await fetch(`https://api-auto-eq2.herokuapp.com/api/buscar/${termino}`);
  const { results_eventos, results_asistentes } = await resp.json();

  inputNombre.value = results_eventos[0].evento.nombre;
  inputFecha.value = results_eventos[0].evento.fecha;
  inputAsistencia.value = results_eventos[0].evento.asistencia;

  let htmlLi = ''
  results_eventos.map(({ evento }) => {

    htmlLi +=
      `
      <li class="list-group-item">${evento.nombre}</li>
    `
  });

  listaCoindicencias.innerHTML = htmlLi;

  let htmlTr = '';
  let index = 0;

  results_asistentes.map(({ asistente }) => {

    const horaIngreso = new Date(asistente.registro);

    htmlTr +=
      `
      <tr class="text-center">
        <td>${++index}</td>
        <td>${asistente.matricula}</td>
        <td>${asistente.nombre}</td>
        <td>${horaIngreso.toLocaleTimeString()}</td>
      </tr>
    `;
  });

  tablaBody.innerHTML = htmlTr;

}

formBuscar.addEventListener('submit', (e) => {

  // TODO: Efecto loading

  e.preventDefault();

  obtenerEvento(inputBuscar.value)
});