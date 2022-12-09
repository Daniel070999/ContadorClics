import React from "react";
import '../hoja-estilos/Contador.css'

function Contador({ numero }) {
    return (
        <div className='contador'>
            {numero}
        </div>
    );
}
export default Contador;