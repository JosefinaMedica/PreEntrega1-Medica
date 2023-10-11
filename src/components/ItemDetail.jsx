import React from 'react'


const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="my-4 text-center">
      <h2 className="h5">Nombre: {nombre}</h2>
      <h3 className="h6">Precio: {precio}</h3>
      <h3 className="h6">ID: {id}</h3>
      <p className="text-sm">Productos artesanales de madera y alumino</p>
      <div className="d-flex justify-content-center">
        <img src={img} alt={nombre} className="img-fluid w-25" />
      </div>
    </div>
  );
};

export default ItemDetail;


