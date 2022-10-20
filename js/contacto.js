/* --- validación del formulario ---*/
function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        alert('Debe escribirse un nombre');
        return;
    }
    var correo = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(document.getElementById('correo').value);
    if (correo == false) {
        alert('La dirección de correo no es válida')
        return
    }
    var telefono = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(document.getElementById('telefono').value);
    if (telefono == false) {
        alert('El teléfono no es válido')
        return
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
        alert('Debe escribirse un mensaje');
        return;
    }
    this.submit();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

/*--- api formspree ---*/

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    var status = document.getElementById("my-form-status");
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        status.innerHTML = "Gracias por contactarnos!";
        this.reset()
        
    }
}
