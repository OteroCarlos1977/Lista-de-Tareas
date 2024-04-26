function agregarTarea() {

    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if (nuevaTareaTexto === "") {
        alert("Por Favor, ingrese una Tarea");
        return;
    }

    // Nuevo elemento
    let nuevaTarea = document.createElement("li")

    nuevaTarea.textContent = nuevaTareaTexto + "";

    //Boton eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {nuevaTarea.remove();}

    //Agrega boton eliminar a la tarea
    nuevaTarea.appendChild(botonEliminar);

    //Agregar una tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar cuadro de texto de la tarea
    document.getElementById("nuevaTarea").value = "";

}