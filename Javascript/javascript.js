const formulario = document.getElementById('formulario-pedido');

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telf').value.trim();
    const producto = document.getElementById('producto').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();


    if (nombre==='' || telefono==='' || producto==='' || comentarios==='' || cantidad===''){
        Swal.fire({
            title: "Tienes campos sin completar",
            text: "Todos los campos son obligatorios",
            icon: "warning",
            confirmButtonColor: "#a17cc0",
            background: "linear-gradient(to bottom, #f9f7f2, #dce8dc)"
        });
        return;
    };

    /*Validar telefono*/
    if(!/^\d{7,}$/.test(telefono)){
        Swal.fire({
            title: "El teléfono es inválido",
            text: "Debe contener más de 7 caracteres",
            icon: "error",
            confirmButtonColor: "#a17cc0",
            background: "linear-gradient(to bottom, #f9f7f2, #dce8dc)"
        });
        return;
    };

    Swal.fire({
        title: "Su pedido ha sido enviado",
        icon: "success",
        confirmButtonColor: "#a17cc0",
        background: "linear-gradient(to bottom, #f9f7f2, #dce8dc)"
    })
    formulario.reset();


});
