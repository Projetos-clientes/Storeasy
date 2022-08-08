import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyText = (str) => str.replace(/[^a-zA-Z\u00C0-\u00FF " "]/g, '')

const MascaraNomeReserva = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
                value: onlyText(e.target.value)
            }
        })
    }
    return (
        <label class="inp" htmlFor="nomeReserva">
            <InputMask
                id="nomeReserva"
                placeholder=" "
                value={value}
                onChange={handleChange} />
            <span class="label">Nome completo do titular</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraNomeReserva;