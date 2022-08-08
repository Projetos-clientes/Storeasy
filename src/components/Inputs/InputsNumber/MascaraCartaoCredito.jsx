import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCartaoCredito = ({ value, onChange }) => {
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
        <label class="inp" htmlFor="cartaoCreditoReserva">
            <InputMask
                id="cartaoCreditoReserva"
                mask="9999 9999 9999 9999"
                placeholder='0000 0000 0000 0000'
                value={value}
                onChange={handleChange} />
            <span class="label">Número do cartão</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraCartaoCredito;