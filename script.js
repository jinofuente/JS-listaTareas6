// variables
const formulario = document.getElementById("formulario");
const tituloForm = document.getElementById("tituloFormulario");
//eventos

(()=>{ /*esto es para que todo los eventos que ejecutemos
 se mantengan en este archivo y no puedan ser llamados por otro
 archivos o consola*/

    formulario.addEventListener("submit", validarFormulario);
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
    console.log(objTarea);

}