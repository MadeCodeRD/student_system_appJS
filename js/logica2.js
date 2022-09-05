//seleccionar los datos del local storage
const EstudiantesArr = JSON.parse(localStorage.getItem('estudiantes'));
const clearBtn = document.querySelector('.clear');

// Mostrar los datos del local storage en la tabla
window.addEventListener('DOMContentLoaded', () => {
  const promedio = document.getElementById('promedio');
  const tbody = document.querySelector('tbody');

  if (EstudiantesArr !== null) {
    for (let i = 0; i < EstudiantesArr.length; i++) {
      const editar = document.createElement('button');
      const eliminar = document.createElement('button');

      editar.textContent = 'Editar';
      eliminar.textContent = 'Eliminar';

      editar.dataset.id = i;
      eliminar.dataset.id = i;

      const row = document.createElement('tr');
      row.innerHTML = `<td>${EstudiantesArr[i].nombre}</td>
                           <td>${EstudiantesArr[i].apellido}</td>
                           <td>${EstudiantesArr[i].matricula}</td>
                           <td>${EstudiantesArr[i].nota}</td>
                           <td><a href="editar.html?id=${i}">${editar.outerHTML}</a></td>
                           <td><button onClick='eliminar(${i})'>Eliminar</button></td>`;

      tbody.appendChild(row);
    }

    if (EstudiantesArr.length > 0) {
      promedio.innerHTML = `Promedio: ${Math.round(resultado(EstudiantesArr))}`;
    }
  }
});

// funcion para retornar el promedio de las notas
const resultado = (EstudiantesArr) => {
  const cantidadDeNotas = EstudiantesArr.length;
  let sum = 0;
  for (let i = 0; i < EstudiantesArr.length; i++) {
    sum += Number(EstudiantesArr[i].nota);
  }

  return sum / cantidadDeNotas;
};

//Esta funcion nos ayuda a eliminar un estudiante en especifico dentro del local storage
const eliminar = (id) => {
  EstudiantesArr.splice(id, 1);
  localStorage.setItem('estudiantes', JSON.stringify(EstudiantesArr));
  location.reload();
};

// eliminar todos los registros
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
