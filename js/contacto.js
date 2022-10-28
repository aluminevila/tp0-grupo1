function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;
    
    return validarNombre(nombre) && validarCorreo(correo) && validarTelefono(telefono) && validarMensaje(mensaje)
}

function validarNombre(nombre) {
    if(nombre.length == 0) {
        alert('Debe escribirse un nombre');
        return false
    }
    return true
}

function validarCorreo(correo) {
    var expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!expresionRegular.test(correo)) {
        alert('La dirección de correo no es válida')
        return false
    }
    return true
}

function validarTelefono(telefono) {
    var expresionRegular = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    if (!expresionRegular.test(telefono)) {
        alert('El teléfono no es válido')
        return false
    }
    return true
}

function validarMensaje(mensaje) {
    if(mensaje.length == 0) {
        alert('Debe escribirse un mensaje');
        return false
    }
    return true
}




async function enviarFormulario(event) {
    if (validarFormulario(event)) {
        await handleSubmit(event);
    }
}





const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    if (validarFormulario()) {
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
    
}

