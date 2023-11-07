const misProductos = [
    { id: "1", nombre: "Cruz", precio: 1500, stock:6, img:"../img/cruz.png", idCat: "1" },
    { id: "2", nombre: "Cunero", precio: 1000, stock:8, img:"../img/cunero.png", idCar:"1" },
    { id: "3", nombre: "Vela", precio: 1300, stock:10, img:"../img/vela.png", idCat: "2" },
    { id: "4", nombre: "Angel", precio: 1900, stock:6, img:"../img/angel.png", idCat: "2" },

]
export const getProductos = () =>  {
 return new Promise((resolve) => {
    setTimeout (() => {
        resolve(misProductos);
    }, 100)
})
}


export const getUnProducto = (id) => {
 return new Promise(resolve => {
    setTimeout ( () => {
        const producto = misProductos.find(prod=> prod.id === id);
        resolve(producto);
    }, 100)
})
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}
