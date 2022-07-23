import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraRua = ({ value, onChange }) => {
    return (
        <div class="form__group field">
            <InputMask
                placeholder="Rua"
                required
                class="form__field"
                value={value}
                onChange={onChange} />
            <label
                class="form__label"
                for="Rua">
                Rua
            </label>
        </div>
    )
}

export default MascaraRua; 