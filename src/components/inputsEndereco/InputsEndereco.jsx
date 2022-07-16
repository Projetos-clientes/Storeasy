import React from 'react';
import './InputsEndereco.scss';
import { Button, FormControl } from '@mui/material';
import FormattedIn from './input.tsx';
import FormattedNa from './inputName.tsx';
import InputsMetodos from '../inputsMetodos/InputsMetodos';

const ProfileDados = () => {
    return (
        <div>
            <div className="main-dados">
                <h3
                    style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        marginTop: '40px',
                    }}
                >
                    Informações pessoais
                </h3>
                <div className="inputsProfile">
                    <FormattedNa
                        mascara="*********************************************************************************************************************************************************************"
                        labelCampo="Nome Completo"
                        idCampo="standardNamecompleto"
                        rq="true"
                    />
                    <FormattedNa
                        mascara="00/00/0000"
                        labelCampo="Data de nascimento"
                        idCampo="standardNamecompleto"
                        rq="true"
                    />
                </div>
            </div>

            <div className="main-endereco">
                <FormControl>
                    <h3
                        style={{
                            textAlign: 'center',
                            fontWeight: '600',
                            marginTop: '40px',
                        }}
                    >
                        Endereço completo
                    </h3>
                    <div
                        className="inputsProfile"
                        style={{ marginTop: '10px' }}
                    >
                        <FormattedIn
                            onClick={() => console.log('lsa')}
                            mascara="00000-000"
                            labelCampo="CEP"
                            idCampo="standarCep"
                            rq="true"
                        />
                        <FormattedIn
                            mascara="000000"
                            labelCampo="Número"
                            idCampo="standardNumero"
                            rq="true"
                        />
                    </div>
                    <div className="inputsProfile">
                        <FormattedNa
                            mascara="*********************************"
                            labelCampo="Bairro"
                            idCampo="standardBairro"
                            rq="true"
                        />
                        <FormattedNa
                            mascara="**************************************************************"
                            labelCampo="Rua"
                            idCampo="standardRua"
                            rq="true"
                        />
                    </div>
                    <div className="inputsProfile">
                        <FormattedNa
                            mascara="*********************************"
                            labelCampo="Complemento"
                            idCampo="standardComplemento"
                        />
                        <FormattedNa
                            mascara="**************************************************************"
                            labelCampo="Cidade"
                            idCampo="standardRua"
                            rq="true"
                        />{' '}
                        <FormattedNa
                            mascara="**"
                            labelCampo="UF"
                            idCampo="standardUf"
                            rq="true"
                        />
                    </div>
                </FormControl>
            </div>
            <div className="main-pagamento">
                <h3
                    style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        marginTop: '40px',
                    }}
                >
                    Informações de pagamento padrão
                </h3>
                <InputsMetodos />
            </div>

            <Button
                style={{
                    width: '100px',
                    alignSelf: 'center',
                    marginTop: '30px',
                    backgroundColor: '#000',
                    color: '#FFF',
                }}
                className="buttonSalvar"
                variant="contained"
            >
                salvar
            </Button>
        </div>
    );
};

export default ProfileDados;
