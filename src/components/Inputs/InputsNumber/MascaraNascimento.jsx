import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraNascimento = ({ value, onChange }) => {
    return (
        <div class="form__group field">
            <InputMask
                placeholder="Data de Nascimento"
                mask="99/99/9999"
                required
                class="form__field"
                value={value}
                onChange={onChange} />
            <label
                class="form__label"
                for="Data de Nascimento">
                Data de Nascimento
            </label>
        </div>
    )
}

export default MascaraNascimento;