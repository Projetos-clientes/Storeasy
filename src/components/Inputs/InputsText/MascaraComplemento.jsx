import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraComplemento = ({ value, onChange }) => {
    return (
        <div class="form__group field">
            <InputMask
                placeholder="Complemento"
                class="form__field"
                value={value}
                onChange={onChange} />
            <label
                class="form__label"
                htmlFor="bairro">
                Complemento
            </label>
        </div>
    )
}

export default MascaraComplemento;