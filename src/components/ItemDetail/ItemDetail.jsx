import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css'



const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const { agregarProducto } = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }
  return (
    <div className="product-container">
      <h2 className="product-name">Nombre: {nombre}</h2>
      <h3 className="product-price">Precio: {precio}</h3>
      <h3 className="product-id">ID: {id}</h3>
      <p className="product-description">Productos artesanales en madera y aluminio</p>
      <div className="product-general">
        <img src={img} alt={nombre} className="product-image" />
        
        {
  agregarCantidad > 0 ? (
    <Link to="/cart" className="conditional-element">Terminar compra</Link>
  ) : (
    <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} className="conditional-element" />
  )
}
      </div>
    </div>
  );
};

export default ItemDetail;


