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
        <label class="inp" htmlFor="ruaReserva">
            <InputMask
                id="ruaReserva"
                placeholder="Av. Jardim Minas"
                value={value}
                onChange={handleChange} />
            <span class="label">Rua</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraRuaReserva;