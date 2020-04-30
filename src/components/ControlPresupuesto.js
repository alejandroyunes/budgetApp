import React from 'react'
import { revisarPresupuesto } from '../components/Helper'

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <>
        <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>

        <div className={revisarPresupuesto(presupuesto, restante)}>
            restante:$ {restante}
        </div>
            
        </>
    )
}

export default ControlPresupuesto
