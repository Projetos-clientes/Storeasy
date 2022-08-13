import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraCidadeReserva = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
            }
        })
    }
    return (
        <label class="inp" htmlFor="cidadeReserva">
            <InputMask
                id="cidadeReserva"
                placeholder="São Paulo"
                value={value}
                onChange={handleChange} />
            <span class="label">Cidade</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraCidadeReserva;