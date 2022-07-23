import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyText = (str) => str.replace(/[^a-zA-Z\u00C0-\u00FF " "]/g, '')

const MascaraCidade = ({ value, onChange }) => {
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
                placeholder="Cidade"
                required
                class="form__field"
                value={value}
                onChange={handleChange} />
            <label
                class="form__label"
                for="Cidade">
                Cidade
            </label>
        </div>
    )
}

export default MascaraCidade;