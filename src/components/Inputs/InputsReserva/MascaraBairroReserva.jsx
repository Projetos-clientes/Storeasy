import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraBairroReserva = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
            }
        })
    }
    return (
        <label className="inp" htmlFor="bairroReserva">
            <InputMask
                id="bairroReserva"
                placeholder="Grajaú"
                value={value}
                onChange={handleChange} />
            <span className="label">Bairro</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraBairroReserva;