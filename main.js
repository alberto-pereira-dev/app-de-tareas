const btnAgregar = document.querySelector('.boton');
const tareaInput = document.querySelector('.input');
const containerTareas = document.querySelector('.container__tareas');

function agregarTarea(event) {
  if (tareaInput.value.trim() === '') {
    alert('Por favor añada una tarea');
    tareaInput.value = '';
  } else {
    containerTareas.insertAdjacentHTML('beforeend', `<div class="tarea__show">
      <div class="container__inputs">
      <div class="delete"></div>
      <input class="checkbox" type="checkbox">
      </div>
      <label data-label="v1">${tareaInput.value.trim()}</label>
      </div>`);

    tareaInput.value = '';
  }
}

function eliminarTarea(event) {
  const tarea = event.target.classList.contains('delete');

  if (tarea) {
    event.target.closest('.tarea__show').remove();
  }
}

function tachar(event) {
  if (event.target.classList.contains('checkbox')) {
    const checkbox = event.target;
    const container = checkbox.closest('.tarea__show'); 
    const label = container.querySelector('label'); 
    
    if (label) {
      if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = '#fff5' ;
        
      } else {
        label.style.textDecoration = 'none';
        label.style.color = 'inherit';
        
        
      }
    }
  }
}

btnAgregar.addEventListener('click', agregarTarea);
containerTareas.addEventListener('dblclick', eliminarTarea);
containerTareas.addEventListener('click', tachar);