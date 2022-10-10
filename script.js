

function enviarFormulario() {
    //alert("Mensaje enviado con exito");

    let formulario = document.formulario;

    if(formulario.nombre.value === ""){
        document.getElementById("error").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo nombre es obligatorio</div>';
        formulario.nombre.focus();
        return false;
    } else {
        document.getElementById("error").innerHTML = "";
    }
    if(formulario.apellido.value === ""){
        document.getElementById("error").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo apellido es obligatorio</div>';
        formulario.apellido.focus();
        return false;
    }
    if(formulario.email.value === ""){
        document.getElementById("error").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo email es obligatorio</div>';
        formulario.email.focus();
        return false;
    }
    if(formulario.ciudad.value === ""){
        document.getElementById("error").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo ciudad es obligatorio</div>';
        formulario.ciudad.focus();
        return false;
    }
    if(formulario.exampleFormControlTextarea1.value === ""){
        document.getElementById("error").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo mensaje es obligatorio</div>';
        formulario.exampleFormControlTextarea1.focus();
        return false;
    }

    if(formulario.formulario != ""){
        alert("Mensaje enviado con exito, recuerde revisar su correo electronico");
    }

    
    formulario.submit();
}