// Variables para traer los elementos a editar 
const estudiantesArr = JSON.parse(localStorage.getItem('estudiantes'));
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const matricula = document.getElementById('matricula');
const nota = document.getElementById('nota');

// separar la ultima parte de la url
const index = window.location.search;
const indexToUpdate = index.split('=')[1];

// Evento que trae las informaciones del estudiante a editar
window.addEventListener('load', () => {
  nombre.value = estudiantesArr[indexToUpdate].nombre;
  apellido.value = estudiantesArr[indexToUpdate].apellido;
  matricula.value = estudiantesArr[indexToUpdate].matricula;
  nota.value = estudiantesArr[indexToUpdate].nota;
});

const submit = document.getElementById('submitBtn');

// realizar el cambio de las informaciones
submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    nombre.value !== '' &&
    apellido.value !== '' &&
    matricula.value !== '' &&
    nombre.value
  ) {
    if (!(Number(nota.value) > 100 || Number(nota.value) < 0)) {
      estudiantesArr[indexToUpdate].nombre = nombre.value;
      estudiantesArr[indexToUpdate].apellido = apellido.value;
      estudiantesArr[indexToUpdate].matricula = matricula.value;
      estudiantesArr[indexToUpdate].nota = Number(nota.value);

      localStorage.setItem('estudiantes', JSON.stringify(estudiantesArr));
      limpiarForm();
    } else {
      alert('Nota min=1 y Max=100');
      nota.value = '';
    }
  }
});

// Limpiar formulario
const limpiarForm = () => {
  nombre.value = '';
  apellido.value = '';
  matricula.value = '';
  nota.value = '';
};
