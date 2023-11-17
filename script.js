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

        setTimeout(()=>{
            tituloForm.textContent = 'FORMULARIO';
        }, 2000)
        return;
    }

}