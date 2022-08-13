import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraNumeroReserva = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
                value: onlyNumber(e.target.value)
            }
        })
    }
    return (
        <label class="inp" htmlFor="numeroReserva">
            <InputMask
                id="numeroReserva"
                mask="(99) 9 9999-9999"
                placeholder='(00) 1 2345-6789'
                value={value}
                onChange={handleChange} />
            <span class="label">Número do titular</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraNumeroReserva;