
const inputNombre = document.getElementById('nombre_evento');
const inputFecha = document.getElementById('fecha_evento');
const inputAsistencia = document.getElementById('asistencia_evento');
const inputBuscar = document.getElementById('buscar_evento');
const formBuscar = document.getElementById('form');
const tablaBody = document.getElementById('tbody');

const obtenerEvento = async (termino = 'a') => {

  const resp = await fetch(`http://localhost:8080/api/buscar/${termino}`);
  const { results_eventos, results_asistentes } = await resp.json();

  inputNombre.value = results_eventos[0].evento.nombre;
  inputFecha.value = results_eventos[0].evento.fecha;
  inputAsistencia.value = results_eventos[0].evento.asistencia;

  let html = '';
  let index = 0;

  results_asistentes.map(({ asistente }) => {

    const horaIngreso = new Date(asistente.registro);

    html +=
      `
      <tr class="text-center">
        <td>${++index}</td>
        <th>${asistente.nombre}</th>
        <td>${asistente.matricula}</td>
        <td>${horaIngreso.toLocaleTimeString()}</td>
      </tr>
    `;
  });

  tablaBody.innerHTML = html;

}

formBuscar.addEventListener('submit', (e) => {

  // TODO: Efecto loading

  e.preventDefault();

  obtenerEvento(inputBuscar.value)
});