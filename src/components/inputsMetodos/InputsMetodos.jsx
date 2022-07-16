import React from 'react';
import './InputsMetodos.scss';
import { FormControl } from '@mui/material';
import FormattedInputs from './input.tsx';
import FormattedName from './inputName.tsx';
import BasicSelect from './Select.tsx';

const InputsMetodos = () => {
    return (
        <FormControl>
            <BasicSelect />
            <div className="inputsProfile" style={{ marginTop: '10px' }}>
                <FormattedName
                    mascara="*********************************************************************************************************************************************************************"
                    labelCampo="Nome do titular"
                    idCampo="standardName"
                />
                <FormattedInputs
                    mascara="000.000.000-00"
                    labelCampo="CPF do titular"
                    idCampo="standardCpf"
                />
            </div>
            <div className="inputsProfile">
                <FormattedInputs
                    mascara="00000000-0"
                    labelCampo="Conta"
                    idCampo="standardConta"
                />
                <FormattedInputs
                    mascara="0000"
                    labelCampo="Agência"
                    idCampo="standardAgencia"
                />
            </div>
            <div className="inputsProfile">
                <FormattedInputs
                    mascara="0000 0000 0000 0000"
                    labelCampo="Número do cartão"
                    idCampo="standardCartao"
                />

                <FormattedInputs
                    mascara="0000"
                    labelCampo="CVV"
                    idCampo="standardCpf"
                />

                <FormattedInputs
                    mascara="00/00"
                    labelCampo="Data de validade"
                    idCampo="standardValidade"
                />
            </div>
        </FormControl>
    );
};

export default InputsMetodos;
