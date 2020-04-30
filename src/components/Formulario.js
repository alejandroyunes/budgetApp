import React, { useState } from "react";
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState('');
    const [ error, guardarError ] = useState(false);



    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN( cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        
        //contruir gasto

        const gasto = {
            nombre, 
            cantidad,
            id: shortid.generate()
        }
         //pasar gasto al componente principal
         guardarGasto(gasto)
         guardarCrearGasto(true)

        //reeatr el form

        guardarNombre('');
        guardarCantidad(0)
    }


  return (
    <form onSubmit={agregarGasto}>
         <h2>Agrega tus gastos aquí</h2>
         { error ? <Error mensaje="ambos campos son obligatorios o presupuesto incorrecto"/>: null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. 300" 
          value={cantidad}
          onChange={ e => guardarCantidad( parseInt(e.target.value))}
        />
      </div>
      <input
      type="submit"
      className="button-primary u-full-width"
      value="agregar gasto"/>
    </form>
  );
};

export default Formulario;
