// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio.

/////////// PARA EL CASO LOGIN

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
// UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.


// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, 
//estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o 
//"Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".
// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.
// c) Valide con un bucle que el usuario tiene una arroba. De ser así, envíe el mensaje en consola: "Es un mail válido" e interrumpa el ciclo for con break. 
// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe una alerta con el siguiente mensaje: "Su contraseña es insegura."
// e) Valide con un bucle que la contraseña al menos tenga un número. En el caso de que no tenga uno, envíe un prompt que exprese lo siguiente: "Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?". Si el usuario dice si, entonces cambie el valor de la contraseña.

// Defino los valores correctos para login
let usuarioConEmail = "pedeachete@gmail.com"
let contrasenia = "aa"   

// Pido en 3 prompts los datos
let nombreUsuario = prompt("Ingrese su nombre:")
let mailUsuario = prompt("Ingrese su usuario:")
let seniaUsuario = prompt("Ingrese su contraseña:")

// Valido con un bucle si mail tiene arrba

for (let i = 0; i < mailUsuario.length; i++) {
    if (mailUsuario.charAt(i) === "@") {
        console.log("Es un mail válido")
        break   
    }
}


// Loguin y bienvenida
function Login (){
    
    if ( mailUsuario !== usuarioConEmail && contrasenia !== seniaUsuario ){
        alert("SU USUARIO Y CONTRASEÑA SON ERRÓNEOS")
    }
    else if ( mailUsuario !== usuarioConEmail ){
        alert("Su usuario es erróneo")
    }
    else if ( contrasenia !== seniaUsuario ){
        alert("Su contraseña es errónea")
    }
    else {
        alert(`Bienvenido ${ nombreUsuario }`)
    }
}

Login()

// Cambiar contraseña si no tiene caracter numérico 
////////////////////////////// (no me anduvo, revisar) /////////////////////////////////

/* for ( let i = 0; i < seniaUsuario.length; i++ ) {
    if ( seniaUsuario[i].match(/[0123456789]/) ) {
        break   
    }
    else {
        let seniaUsuario = confirm("Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?")
        if (seniaUsuario = false) {
            break
        }
        else {
        contrasenia = prompt("Ingrese su nueva contraseña:")
        console.log("Todo OK")
        }
    }
} */


// Valido que la contraseña tenga más de ocho caracteres
if ( seniaUsuario.length <= 8 ) {
    alert("Su contraseña es insegura.")
}

