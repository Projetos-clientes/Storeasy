import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';

const Reservar = () => {

    return (
        <div className="container-reserva">
            <Sidebar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />
        </div>
    )
}
export default Reservar
