import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCasa = ({ value, onChange }) => {
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
                required
                class="form__field"
                value={value}
                onChange={handleChange} />
            <label
                class="form__label"
                htmlFor="Casa">
                Casa
            </label>
        </div>
    )
}

export default MascaraCasa;