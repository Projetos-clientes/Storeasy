import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraValidadeCartao = ({ value, onChange }) => {
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
        <label class="inp" for="inp">
            <InputMask
                id="inp"
                mask="99/99"
                placeholder='MM / AA'
                value={value}
                onChange={handleChange} />
            <span class="label">Validade</span>
            <span class="focus-bg"></span>
        </label>
    )
}

export default MascaraValidadeCartao;