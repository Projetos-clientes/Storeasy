import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraBairro = ({ value, onChange }) => {
    return (
        <div class="form__group field">
            <InputMask
                placeholder="Bairro"
                required
                class="form__field"
                value={value}
                onChange={onChange} />
            <label
                class="form__label"
                for="bairro">
                Bairro
            </label>
        </div>
    )
}

export default MascaraBairro;