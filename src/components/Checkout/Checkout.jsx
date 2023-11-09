import React from "react";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos.");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden.");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden.");
            });
    };

    return (
        <div className="checkout-container">
            <div className="checkout-content">
                <h2>Checkout</h2>
                <form onSubmit={manejadorFormulario}>
                    {carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))}
                    <hr />

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailConfirmacion">Email Confirmación</label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit">Finalizar Compra</button>
                </form>

                {ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es {ordenId}</strong>
                )}
            </div>
        </div>
    );
};

export default Checkout;
