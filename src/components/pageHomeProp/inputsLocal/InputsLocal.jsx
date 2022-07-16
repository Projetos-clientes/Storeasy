import React from 'react';
import './InputsLocal.scss';
import { FormControl } from '@mui/material';
import FormattedIn from './inputLocal.tsx';
import FormattedNa from './inputLocal.tsx';

const InputsLocal = () => {
    return (
        <div>
            <div className="main-enderecoLocal">
                <FormControl>

                <br />
                <br />
                    <div
                        className="inputsProfileLocal"
                        style={{ marginTop: '10px', gap: '30px' }}
                    >
                        <FormattedIn
                            mascara="00000-000"
                            labelCampo="CEP"
                            idCampo="standarCep"
                            className="campLocal"
                        />
                        </div>

                        <div
                        className="inputsProfileLocal"
                        style={{ marginTop: '10px', gap: '30px' }}
                    >

                        <FormattedIn
                            mascara="000000"
                            labelCampo="Número"
                            idCampo="standardNumero"
                            rq="true"
                            className="campLocal"
                        />
                    </div>
                        

                        
                        
                    
                    <div className="inputsProfileLocal">
                        <FormattedNa
                            mascara="*********************************"
                            labelCampo="Bairro"
                            idCampo="standardBairro"
                            rq="true"
                            className="campLocal"
                        />
                        </div>
                        <div className="inputsProfileLocal">


                        <FormattedNa
                            mascara="**************************************************************"
                            labelCampo="Rua"
                            idCampo="standardRua"
                            rq="true"
                            className="campLocal"
                        />

                        </div>
                     
                    
                    <div className="inputsProfileLocal">
                        <FormattedNa
                            mascara="*********************************"
                            labelCampo="Complemento"
                            idCampo="standardComplemento"
                            className="campLocal"
                        />
                        </div>
                        <div className="inputsProfileLocal">

                        <FormattedNa
                            mascara="**************************************************************"
                            labelCampo="Cidade"
                            idCampo="standardRua"
                            rq="true"
                            className="campLocal"
                        />{' '}

                        </div>

                        <div className="inputsProfileLocal">

                        <FormattedNa
                            mascara="**"
                            labelCampo="UF"
                            idCampo="standardUf"
                            rq="true"
                            className="campLocal"
                        />

                        </div>
                       
                        
                    
                </FormControl>
            </div>
        </div>
    );
};

export default InputsLocal;
