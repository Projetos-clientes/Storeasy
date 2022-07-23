import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyText = (str) => str.replace(/[^a-z, A-Z]/g, '')

const MascaraUf = ({ value, onChange }) => {
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
        <div class="form__group field">
            <InputMask
                placeholder="UF"
                mask="aa"
                required
                class="form__field ufUppercase"
                value={value}
                onChange={handleChange} />
            <label
                class="form__label"
                for="UF">
                UF
            </label>
        </div>
    )
}

export default MascaraUf;