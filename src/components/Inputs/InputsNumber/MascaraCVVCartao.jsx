import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCVVCartao = ({ value, onChange }) => {
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
        <label class="inp" htmlFor="cvvCartaoReserva">
            <InputMask
                id="cvvCartaoReserva"
                mask="9999"
                placeholder='1234'
                value={value}
                onChange={handleChange} />
            <span class="label">CVV</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraCVVCartao;