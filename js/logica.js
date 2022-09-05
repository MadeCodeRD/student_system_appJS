//Obtener los campos del formulario desde HTML
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const matricula = document.getElementById('matricula');
const nota = document.getElementById('nota');

//clase para la creacion de cada estudiante
class Estudiantes {
  constructor(nombre, apellido, matricula, nota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.nota = nota;
  }
}

//eventos

let estudiantesArr =
  localStorage.getItem('estudiantes') === null
    ? []
    : JSON.parse(localStorage.getItem('estudiantes'));
const submit = document.getElementById('submitBtn');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    nombre.value !== '' &&
    apellido.value !== '' &&
    matricula.value !== '' &&
    nombre.value
  ) {
    if (!(Number(nota.value) > 100 || Number(nota.value) < 0)) {
      estudiantesArr.push(
        new Estudiantes(
          nombre.value,
          apellido.value,
          matricula.value,
          Number(nota.value)
        )
      );
      localStorage.setItem('estudiantes', JSON.stringify(estudiantesArr));
      limpiarForm();
    } else {
      alert('Nota min=1 y Max=100');
      nota.value = '';
    }
  }
});

//funciones
const limpiarForm = () => {
  nombre.value = '';
  apellido.value = '';
  matricula.value = '';
  nota.value = '';
};
