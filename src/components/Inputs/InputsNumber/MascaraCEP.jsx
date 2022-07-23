import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCEP = ({ value, onChange }) => {
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
        <div class="form__group field">
            <InputMask
                placeholder="Digite somente números"
                mask="99999-999"
                required
                class="form__field"
                value={value}
                onChange={handleChange} />
            <label
                class="form__label"
                for="CEP">
                CEP
            </label>
        </div>
    )
}

export default MascaraCEP;