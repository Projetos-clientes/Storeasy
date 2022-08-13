import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'


const MascaraRuaReserva = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target
            }
        })
    }
    return (
        <label className="inp" htmlFor="ruaReserva">
            <InputMask
                id="ruaReserva"
                placeholder="Av. Jardim Minas"
                value={value}
                onChange={handleChange} />
            <span className="label">Rua</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraRuaReserva;