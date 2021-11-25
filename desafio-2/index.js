const fs = require("fs");

let date = {

    "id": 1,
    "thumbail": "httpsgoogle.com",
    "price": 100,
    "title": "pedros"

};



class Contenedor {
    constructor(fileName) {this.fileName = fileName;}

    save(objet) {
        fs.readFile(`product.json`, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
            } else {
                let products = JSON.parse(data);
                products.push(date);
                fs.writeFile(`product.json`, JSON.stringify(products), function (err) {});
                // console.log(products);
            }
            
            return objet.id;
        });


    }

    getById (id) {
        fs.readFile(`product.json`, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
            } else {
                let products = JSON.parse(data);
                let product = products.find(function (product) {
                    return product.id == id;
                    
                })
                // let filterProducts = products.filter((product)  =>{product.id == id});
                
                // return filterProducts.length > 0 ? filterProducts[0] : null;
            }
        });
    }
}

const contenedors = new Contenedor("product.json");

// contenedors.save(date);
let product = contenedors.getById(1);
console.log(product);



