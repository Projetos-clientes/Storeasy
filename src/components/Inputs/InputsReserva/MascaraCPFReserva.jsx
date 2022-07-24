import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCPFReserva = ({ value, onChange }) => {
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
        <label class="inp" for="cpfReserva">
            <InputMask
                id="cpfReserva"
                mask="999.999.999-99"
                placeholder='___.___.___-__'
                value={value}
                onChange={handleChange} />
            <span class="label">CPF do titular</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraCPFReserva;