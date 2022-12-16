// 2) GENERE 6 VARIABLES PARA DOS CHARACTERS DIFERENTES: tipoDeHeroe, danioBase y vidaBase (para el héroe). Para el enemigo: tipoDeMonstruo, danioMostruoBase y vidaMonstruoBase. tipoDeHeroe y tipoDeMonstruo tiene un string vacío como valor, danioMonstruoBase, danioBase, vidaMonstruoBase y vidaBase valen cero como valor. Use variables que puedan ser reasignadas.

///////////////////////////////// HEROES
///////////////////////////////// para interactuar con el usuario

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS. 
// UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un mago, guerrero o tanque?". En el caso de que elija mago, la vida que se le asignará a vidaBase será de 225, en el caso de que elija guerrero 300 y tanque 450. Para danioBase: mago --> 150, guerrero ---> 80 y tank ---> 50.
// b) Genere 1 prompt y pregúntele al usuario: "¡Desea crear un gobling, orco o demonio?". Para la variable de vidaMonstruoBase: en el caso de que elija gobling: 180, en el caso de que elija orco 350 y demonio: 450. Para danioMonstruoBase: gobling --> 70, orco ---> 130 y demonio ---> 110.
// c) Con un bucle, genere 3 encuentros entre los contrincantes. Usando las estadísticas de los personajes, se deberán registrar los movimientos mediante cada iteración: `El ${heroe} ha atacado al ${monstruo}, por ${x} de daño. El monstruo ha perdido ${x} puntos de vida`. También en el caso del monstruo: `El ${monstruo} ha atacado al ${heroe}, por ${x} de daño. El heroe ha perdido ${x} puntos de vida`.
// d) mediante una estructura condicional, valide la vida del héroe y del monstruo. Si alguno de ellos llega a 0 o menos de vida, entonces detenga la iteración del ciclo. Eso se puede con el uso de break dentro del bucle. Antes de detener la iteración, envíe un mensaje en consola: `El ${x} ha caído. El ganador del encuentro es: ${y}`
// e) EN EL CASO DE QUE NO MUERA NINGUNO, VERIFICAR QUIÉN ES EL QUE TIENE MÁS VIDA. ENVIAR UN MENSAJE EN CONSOLA QUE AVISE QUIÉN FUE EL GANADOR DEL ENCUENTRO
// F) SI TIENEN LA MISMA VIDA, ENVIAR UN MENSAJE EN CONSOLA QUE MUESTREN QUE EMPATARON.

// // ejemplo de break

// for ( let i = 0; i < 10; i++ ) {
//     console.log(`Estamos en la iteración ${i}`)

//     if ( i === 5) {        
//         break;   // todo lo que va después del break no es tomado en cuenta!     
//     }
// }

// // ejemplo de if y else if en una función

// const validarEdad = ( edad, permiso ) => {   

//     if ( edad >= 18 ){

//         return ` puede acceder al cine`
//     } else if ( permiso === true ) {
//         return ` puede acceder al cine`
//     } else {
//         return `no puede acceder`
//     }


// }


//Declaro las variables iniciales, y creo funciones para ingresar los valores de los personajes
let tipoHeroe = ""
let vidaBase = 0
let danioBase = 0

let tipoMonstruo = ""
let vidaMonstruoBase = 0
let danioMonstruoBase = 0

let vidaRestante = 0

// Clases para ingreso de datos
class IngresoHeroe {
    constructor(tipoHeroe, vidaBase, danioBase) {
        this.tipoHeroe = tipoHeroe
        this.vidaBase = vidaBase
        this.danioBase = danioBase
    }
}

class IngresoMonstruo {
    constructor(tipoMonstruo, vidaMonstruoBase, danioMonstruoBase) {
        this.tipoMonstruo = tipoMonstruo
        this.vidaMonstruoBase = vidaMonstruoBase
        this.danioMonstruoBase = danioMonstruoBase
    }
}

// Valores para usar
const heroe1 = new IngresoHeroe ( "mago", 225 , 150 )
const heroe2 = new IngresoHeroe ( "guerrero", 300 , 80 )
const heroe3 = new IngresoHeroe ( "tanque", 450 , 50 )

const monstruo1 = new IngresoMonstruo ( "gobling", 180 , 70 )
const monstruo2 = new IngresoMonstruo( "orco", 350 , 130 )
const monstruo3 = new IngresoMonstruo( "demonio", 450 , 110 )


// Bucle de batalla
    for (let i = 0; i <= 2; i++) {

        let elegirHeroe = prompt("¿Desea crear un mago, guerrero o tanque?")
        let elegirMonstruo = prompt ("¿Desea crear un gobling, orco o demonio?")

    if (elegirHeroe === "mago", "guerrero", "tanque" && elegirMonstruo === "gobling", "orco", "demonio" ){
        console.log("nada") 
        break
    }
}