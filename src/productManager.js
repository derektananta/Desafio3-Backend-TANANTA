class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
        this.path = "";
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (this.products.some(product => product.code === code)) {
            console.log(`¡No se puede agregar! (${title}), ya existe un producto con este CODE. (${code}).`);
            return;
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Todos los campos son obligatorios para agregar un producto. Verifique los campos de su producto.');
            return;
        }

        this.products.push({
            id: this.id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        });
    }

    getProductById(idToSearch) {
        const productFound = this.products.find(product => product.id === idToSearch);

        if (productFound) {
            console.log(`Producto encontrado: ${productFound.title} - ID: ${productFound.id}`);
            return productFound;
        } else {
            console.log("Ningún producto ha sido encontrado con el ID proporcionado.");
        }

    }

    updateProduct(idToUpdate, updatedProduct) {
        const productToUpdate = this.products.find(product => product.id === idToUpdate);

        productToUpdate
            ? updatedProduct.id !== idToUpdate
                ? (console.log(`NO SE PUEDE ACTUALIZAR LA ID DEL PRODUCTO, EL MISMO CONTINUA CON LA ID ${idToUpdate}`), null)
                : (Object.assign(productToUpdate, updatedProduct), console.log(`Producto actualizado: ID ${idToUpdate}`), productToUpdate)
            : (console.log(`No se encontró ningún producto con el ID ${idToUpdate} para ser actualizado.`), null);

    }

    deleteProduct(idToDelete) {
        const productIndexToDelete = this.products.findIndex(product => product.id === idToDelete);

        productIndexToDelete !== -1
            ? (() => {
                const productDeleted = this.products.splice(productIndexToDelete, 1)[0];
                console.log(`Se borró el producto "${productDeleted.title}" con el ID ${productDeleted.id}`);
            })()
            : console.log(`No se encontró ningún producto con el ID ${idToDelete} para ser borrado.`);

    }
}

module.exports = ProductManager;