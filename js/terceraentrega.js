//***************************************************************/
//EVENTOS
//***************************************************************/

// Defino los valores correctos para login
const datosLogin = {
    user: "a",
    password: "a"
}


// Defino la interacción con el local Storage
// Mando info
const infoParaStorage = ( key, value ) => {
    localStorage.setItem( key, JSON.stringify(value))
}

//Recibo info
const infoDesdeStorage = ( key ) => {
    return JSON.parse(localStorage.getItem(key))
}

//Defino la info que voy a traer del HTML
const mostrarLogin = document.querySelector("#login")
const cerrarLogin = document.querySelector("#logout")
const inputUser = document.querySelector("#user")
const inputSenia = document.querySelector("#senia")
const contenedorForm = document.querySelector("#containerLogin")
const contenedorCards = document.querySelector("#containerCards")

//Cuando hago click en iniciar sesión se borra el botón "iniciar sesión" y aparece el form
mostrarLogin.onclick = ( e ) => {
    e.preventDefault()
    login.style.display = "none"
    containerLogin.style.display = "flex"
    }


//Cuando hago click en enviar, valido los datos que estén ok y si está ok aviso al Storage que el login es true
//Como opcional agregué un alert que avise si los datos no son los correctos
formLogin.onsubmit = ( e ) => {
        e.preventDefault()
        if ( inputUser.value === datosLogin.user && inputSenia.value === datosLogin.password ){
            infoParaStorage("login", true)
            validarSesion(infoDesdeStorage("login"))
        } else {
            alert("Los datos ingresados no son correctos, por favor verifiquelos")
        }
    }


//Acá valido que la sesión esté iniciada, si está OK muestro la info, sino solo muestro el mensaje de bienvenida
const validarSesion = ( valor ) => {
        if ( valor === true ){
            containerLogin.style.display = "none"
            logout.style.display = "block"
            login.style.display = "none"
            containerLogin.style.display = "none"
            containerWelcome.style.display = "none"
            containerTitle.style.display = "block"
            containerUsuarios.style.display = "flex"
            containerCards.style.display = "flex"
        } else {
            logout.style.display = "none"
            containerWelcome.style.display = "block"
            containerTitle.style.display = "none"
            containerUsuarios.style.display = "none"
            containerCards.style.display = "none"
        }
    }
validarSesion(infoDesdeStorage("login"))


//Cuando hago clic en cerrar sesión borro los datos del localStorage y vuelvo a prender el login
cerrarLogin.onclick = ( valor ) => {
    valor.preventDefault()
    logout.style.display = "none"
    login.style.display = "block"   
    localStorage.removeItem("login")
    validarSesion(infoDesdeStorage("login"))
}


//***************************************************************/
//DOM
//***************************************************************/

let funcionarios = []

//Evento sobre el click para agregar funcionario
document.querySelector("#agregarUser").onsubmit = (e) => {
    e.preventDefault()
    funcionarios.push({
        nombre: document.querySelector("#inputNombre").value,
        cargo: document.querySelector("#inputCargo").value,
        edad: document.querySelector("#inputEdad").value
    })
    infoParaStorage("funcionarios", funcionarios)
    // validarSesion(infoDesdeStorage("funcionarios"))
    subirFuncionarios(bajarFuncionarios)
}

//Acá creo la nueva card cada vez que se ingresa un funcionario
const subirFuncionarios = ( array ) => {
    const arrayNuevo = array.reduce( (acc, elemento) => {
        return acc + `
        <div class="card">
            <h4>
                ${elemento.nombre}
            </h4>
            <p>
                ${elemento.cargo}
            </p>
            <p>
                "Tiene ${elemento.edad} años"
            </p>
            </div>
        `
    }, "")
    document.querySelector("div#containerCards").innerHTML = arrayNuevo
}



let bajarFuncionarios = infoDesdeStorage("funcionarios")
funcionarios = bajarFuncionarios || []
subirFuncionarios(bajarFuncionarios)

//Para ir controlando el array
console.log(bajarFuncionarios)
