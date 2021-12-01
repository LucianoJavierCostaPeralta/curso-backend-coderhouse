import Contenedor from './databaseFS.js';
const carrito = new Contenedor('productos');


carrito.save(
    {
        title: 'Escuadra',
        price: 123.45,
        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    }
)
    .then(() =>
        // Producto 2
        carrito.save(
            {
                title: 'Calculadora',
                price: 234.56,
                thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
            }
        )
            .then(() =>
                // Producto 3
                carrito.save(
                    {
                        title: 'Globo Terráqueo',
                        price: 345.67,
                        thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
                    }
                )
            )
    )



// carrito.getById(2).then(data => console.log(data))
// carrito.getById(152).then(data => console.log(data))

// Borrar en base al ID
// carrito.deleteById(1).then(data => console.log(data))
// carrito.deleteById(152).then(data => console.log(data))

//  Buscar todos los productos
// carrito.getAll().then(data => console.log(data))
//  Borrar todos los productos
// carrito.deleteAll().then(data => console.log(data))