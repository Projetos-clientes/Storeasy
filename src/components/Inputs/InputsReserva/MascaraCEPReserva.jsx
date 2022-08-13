import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCEPReserva = ({ value, onChange }) => {
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
        <label class="inp" htmlFor="cepReserva">
            <InputMask
                id="cepReserva"
                mask="99999-999"
                placeholder='12346-789'
                value={value}
                onChange={handleChange} />
            <span class="label">CEP</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraCEPReserva;