// 3) Genere 2 prompt: uno que guarde el nombre del usuario y otro que permita al usuario ingresar una nota de menos de 30 caracteres.

/////// PARA EL CASO BLOG

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Verifique que la entrada del usuario sea menor a 30 caracteres. En el caso de que no lo sea, envíe una alerta con la siguiente frase: "Esta entrada excede la cantidad de caracteres disponibles."
// b) En el caso de que el ingreso sea correcto, envíe una alerta que muestre el nombre del usuario y la nota que acaba de ingresar.
// c) Realice un bucle que envíe tres cuadros de diálogo confirm que sean las solicitudes de amistad de nuevos contactos. 
// En cada iteración se debe poder visualizar el mensaje: "El usuario ${i} te envió una solicitud de amistad".

const userBlog = prompt("Ingrese su usuario:")
const notaBlog = prompt("Ingrese una entrada de menos de 30 caracteres:")

// Controlo cantidad de caracteres
function CuentoCaracteres (){
    
    for (let i = 0; i < notaBlog.length; i++) {

        if ( notaBlog.length > 30){
            console.log("Esta entrada excede la cantidad de caracteres disponibles.")
            break
        }
        else {
            alert(userBlog + "\n" + notaBlog)
            break
        }
    }
}
CuentoCaracteres ()

const nombreUno = "Pedro"
const nombreDos = "Joaquín"
const nombreTres = "Pepe"


    for ( let i = 0; i <= 2; i++ ){
        if ( i === 0 ){
            alert(`El usuario ${nombreUno} te envió una solicitud de amistad`)
        }
        else if (i === 1){
            alert(`El usuario ${nombreDos} te envió una solicitud de amistad`)
        }
        else {
            alert(`El usuario ${nombreTres} te envió una solicitud de amistad`)
        }
}


// Hola tengo - de 30 caracteres
// Hola soy un texto que tiene más de 30 caracteres, usame