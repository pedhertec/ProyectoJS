/* // CASO ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

* LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

* EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
- id –> number
- producto –> nombre del producto
- precio –> number
- fechaVencimiento (en el caso de que tenga una) —> string
- descripción –> string
- categoría (si tiene una) —> string
- oferta (booleano) –> true o false

Quiero que algunos de los elementos tengan un true en oferta.

2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).

Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos:

- […array] —> spread operator

- array.slice() —> copia segura en otra variable

- [].concat(array) —> copia segura en otra variable

4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert(). */


// Creo un array con 15 productos
const productos = [
    {
        id: 001,
        nombre: "platos",
        precio: 200,
        descripcion: "juego de platos",
        categoria: "vajilla",
        oferta: false,
    },
    {
        id: 002,
        nombre: "vasos",
        precio: 150,
        descripcion: "juego de vasos",
        categoria: "vajilla",
        oferta: false,
    },
    {
        id: 003,
        nombre: "cubiertos",
        precio: 100,
        descripcion: "par de cubiertos",
        categoria: "cubiertos",
        oferta: true,
    },
    {
        id: 004,
        nombre: "tazas",
        precio: 180,
        descripcion: "tazas buena calidad",
        categoria: "vajilla",
        oferta: false,
    },
    {
        id: 005,
        nombre: "tazas chinas",
        precio: 80,
        descripcion: "tazas chinas",
        categoria: "vajilla",
        oferta: true,
    },
    {
        id: 006,
        nombre: "platillos chinos",
        precio: 120,
        descripcion: "para las tazas chinas",
        categoria: "vajilla",
        oferta: false,
    },
    {
        id: 007,
        nombre: "juguera",
        precio: 200,
        descripcion: "para hacer jugos naturales",
        categoria: "accesorios",
        oferta: true,
    },
    {
        id: 008,
        nombre: "sopera",
        precio: 1000,
        descripcion: "sopera antigua",
        categoria: "vajilla",
        oferta: false,
    },
    {
        id: 009,
        nombre: "rallador",
        precio: 135,
        descripcion: "ralla fino y grueso",
        categoria: "accesorios",
        oferta: false,
    },
    {
        id: 010,
        nombre: "cuchilla",
        precio: 250,
        descripcion: "cuchilla de cocina",
        categoria: "cubiertos",
        oferta: false,
    },
    {
        id: 011,
        nombre: "posa vaso",
        precio: 50,
        descripcion: "para posar los vasos",
        categoria: "accesorios",
        oferta: false,
    },
    {
        id: 012,
        nombre: "panera",
        precio: 120,
        descripcion: "para servir el pan",
        categoria: "accesorios",
        oferta: true,
    },
    {
        id: 013,
        nombre: "huevera",
        precio: 150,
        descripcion: "para guardar los huevos",
        categoria: "accesorios",
        oferta: false,
    },
    {
        id: 014,
        nombre: "cucharon",
        precio: 95,
        descripcion: "para revolver",
        categoria: "accesorios",
        oferta: false,
    },
    {
        id: 015,
        nombre: "postrera",
        precio: 80,
        descripcion: "para servir el postre",
        categoria: "vajilla",
        oferta: false,
    }
]

// para verificar que quede todo en orden
console.table(productos)

// Hago una copia de seguridad del array

const respaldoProductos = productos.slice()
console.table(respaldoProductos)

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento 
// (elijan el descuento que quieran).


productos.forEach( (ofertas) => {
    if (ofertas.oferta === true){
        ofertas.precio = ofertas.precio * 0.90
        }   
    })


//Verificando que haga el descuento
console.table(productos)

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
// como ya está ordenado por id, lo voy a ordenar alfabeticamente

productos.sort( (a, b) =>  {
    if (a.nombre > b.nombre) {
        return 1
    }
    else if (a.nombre < b.nombre) {
        return -1;
    } else
        return 0;
    });

//Verificando que se ordenó por nombre
console.table(productos)


// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. 
// En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

const arrax = confirm("¿Desea conocer las ofertas?")

if ( arrax === true ){
    const ArrayOfertas = productos.filter( productos => productos.oferta === true)
    //Verificando que se ordenó por nombre
    console.table(ArrayOfertas)
}


// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().

const buscarProducto = prompt("¿Escriba el nombre de un producto para buscarlo?").toLowerCase()

// Verificando que encontró el producto

if ( findProducto = productos.find( product => product.nombre === buscarProducto) ) {
    alert(`El producto ${ findProducto.nombre } lo tenemos en stock`)
    }   
    else {  // Agregué un alert que muestre también cuando no encuentra el producto
    alert(`El producto ${ buscarProducto } no lo tenemos en stock`)
}