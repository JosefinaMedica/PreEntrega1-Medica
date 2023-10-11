import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='d-flex justify-content-between mb-3'>
      <div className='card bg-light text-dark w-24'>
        <img className='imgProducto' src={img} alt={nombre} />
        <div className='card-body'>
          <h5 className='card-title'>Nombre: {nombre}</h5>
          <p className='card-text'>Precio: {precio}</p>
          <p className='card-text'>ID: {id}</p>
          <Link to={`/item/${id}`} className='btn btn-secondary'>
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;

