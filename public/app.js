console.log('Hola Mundo! Front');

const inputNombre = document.getElementById('nombre_evento');
const inputFecha = document.getElementById('fecha_evento');
const inputAsistencia = document.getElementById('asistencia_evento');

const obtenerEvento = async () => {

  const res = await fetch('http://localhost:8080/api/eventos');
  const { eventos } = await res.json();

  inputNombre.value = eventos[0].evento.nombre;
  inputFecha.value = eventos[0].evento.fecha;
  inputAsistencia.value = eventos[0].evento.asistencia;
}

obtenerEvento();