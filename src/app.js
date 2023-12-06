const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
const ProductManager = require("./productManager");

const productManager = new ProductManager();

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc", 25);
productManager.addProduct("producto prueba 1", "Este es un producto prueba 1", 200, "Sin imagen 1", "abc1", 25);
productManager.addProduct("producto prueba 2", "Este es un producto prueba 2", 200, "Sin imagen 2", "abc2", 25);
productManager.addProduct("producto prueba 3", "Este es un producto prueba 3", 200, "Sin imagen 3", "abc3", 25);
productManager.addProduct("producto prueba 4", "Este es un producto prueba 4", 200, "Sin imagen 4", "abc4", 25);
productManager.addProduct("producto prueba 5", "Este es un producto prueba 5", 200, "Sin imagen 5", "abc5", 25);
productManager.addProduct("producto prueba 6", "Este es un producto prueba 6", 200, "Sin imagen 6", "abc6", 25);
productManager.addProduct("producto prueba 7", "Este es un producto prueba 7", 200, "Sin imagen 7", "abc7", 25);
productManager.addProduct("producto prueba 8", "Este es un producto prueba 8", 200, "Sin imagen 8", "abc8", 25);
productManager.addProduct("producto prueba 9", "Este es un producto prueba 9", 200, "Sin imagen 9", "abc9", 25);

const products = productManager.getProducts();

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/products", (req, res) => {
    let limit = req.query.limit;
    limit = parseInt(limit);

    if (!isNaN(limit)) {
        let filteredProducts = products.slice(0, limit);
        res.send({ filteredProducts });
    } else {
        res.send({ products });
    }
})


app.get("/products/:pid", (req, res) => {
    let pid = req.params.pid
    pid = parseInt(pid)

    let productID = products.find(p => p.id === pid)

    productID ? res.send({ productID }) : res.send({ error: `no existe un producto con la id ingresada o ingreso un parametro invalido` })
})

app.listen(8080, "localhost", () => {
    console.log("server is running in port 8080 w/ express")
})