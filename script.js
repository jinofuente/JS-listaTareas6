// variables
const formulario = document.getElementById("formulario");
const tituloForm = document.getElementById("tituloFormulario");
const task = document.getElementById("tareas");
let tareas = [];
//eventos

(()=>{ /*esto es para que todo los eventos que ejecutemos
 se mantengan en este archivo y no puedan ser llamados por otro
 archivos o consola*/

    formulario.addEventListener("submit", validarFormulario);
    task.addEventListener("click", eliminarTarea);
})();



//funciones
function validarFormulario(e){
    e.preventDefault(); // prevenir el efecto por defecto que tienen los formularios
    
    //validar los datos del input
    const tarea = document.getElementById("tarea").value;
    if (!tarea.trim()){  //o tambien puede ser tarea.value == 0
        tituloForm.textContent = 'FORMULARIO VACIO';

        //tiempo de retorno del formulario 
        setTimeout(()=>{
            tituloForm.textContent = 'FORMULARIO';
        }, 2000)
        return;
    }

    //crear un obj
    const objTarea = {
        id: Date.now(), // vamos agregar un metodo que genera una fecha de cuantos milsegundos        
        tarea: tarea,
        estado: false
    }
    tareas = [...tareas, objTarea]; //spritoperator tienes q buscar
    formulario.reset(); //para eliminar el del input lo q introducimos
    
    //agregamos al HTML
    mostrarHtml();

}

function mostrarHtml(){

    task.innerHTML = ''; // para que no cargue varias tareas
    
    //es para agregar sin tareas cumpliendo la condicion
    if(tareas.length < 1){
        const mensaje = document.createElement("h5");
        mensaje.textContent = "~SIN TAREAS~";
        return;
    }


    tareas.forEach((item)=>{
        const itemTarea = document.createElement("div");
        itemTarea.classList.add("item-tarea");
        itemTarea.innerHTML = ` <p>${item.tarea}</p>
            <div class="botones">
            <button class="eliminar" data-id="${item.id}">x</button>
            <button class="completada" data-id="${item.id}">?</button>
            </div>
             `;
             task.appendChild(itemTarea);

    })
}

//ELIMINAR TAREA
function eliminarTarea(e){
    if(e.target.classList.contains("eliminar")){
        const tareaID = Number(e.target.getAttribute("data-id"));
        //eliminando tarea
        const newTask = tareas.filter((item)=> item.id !== tareaID);
        tareas = newTask;
        mostrarHtml();
    }
}