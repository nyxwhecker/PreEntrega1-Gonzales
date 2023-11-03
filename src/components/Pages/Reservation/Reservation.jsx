import "./Reservation.css";
import image from "../Reservation/choco.png";
import React, { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    hora: "",
    numero: "",
    tipoDeReserva: "cumpleanos",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div>
      <div className="TituloReservation">
        <h1>RESERVATION</h1>
      </div>

      <div className="container-reservaciones">
        <div className="imagen-note">
          <img src={image} alt="anotando" />
        </div>

        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />

            <label htmlFor="correo">Email:</label>
            <input
              type="email"
              name="correo"
              id="correo"
              value={formData.correo}
              onChange={handleChange}
            />

            <label htmlFor="telefono">Telefono:</label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />

            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              name="fecha"
              id="fecha"
              value={formData.fecha}
              onChange={handleChange}
            />

            <label htmlFor="hora">Hora:</label>
            <input
              type="time"
              name="hora"
              id="hora"
              value={formData.hora}
              onChange={handleChange}
            />

            <label htmlFor="numero">Numero de invitados</label>
            <input
              type="number"
              name="numero"
              id="numero"
              value={formData.numero}
              onChange={handleChange}
            />

            <label htmlFor="tipoDeReserva">Tipo de Reserva:</label>
            <select
              name="tipoDeReserva"
              id="tipoDeReserva"
              value={formData.tipoDeReserva}
              onChange={handleChange}
            >
              <option value="cumpleanos">Cumpleaños</option>
              <option value="comun">Común</option>
              <option value="especiales">Especiales</option>
            </select>

            <button type="submit" className="buttonReservation">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
