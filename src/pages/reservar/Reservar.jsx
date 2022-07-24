import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './Reservar.scss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MascaraCartaoCredito from '../../components/Inputs/InputsNumber/MascaraCartaoCredito';
import MascaraValidadeCartao from '../../components/Inputs/InputsNumber/MascaraValidadeCartao';
import MascaraCVVCartao from '../../components/Inputs/InputsNumber/MascaraCVVCartao';

const Reservar = () => {
    const [pagamento, setAge] = React.useState('');

    const [cartaoCredito, setCartaoCredito] = React.useState("");
    const [validadeCartao, setValidadeCartao] = React.useState("");
    const [cvvCartao, setCvvCartao] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="container-reserva">
            <Sidebar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />
            <div className="reserva">
                <div className="reserva-infos">
                    <div className="reserva-voltar">
                        <ArrowBackIosNewIcon className="voltar-button" />
                        <h1>Voltar</h1>
                    </div>
                    <div className='infos-da-reserva'>
                        <h1>Sua reserva</h1>
                        <div>
                            <h2>Data</h2>
                            <p>01/05/2022 - 23/05/2022.</p>
                        </div>
                    </div>
                    <div className='reserva-pagamento'>
                        <h1>Método de pagamento</h1>
                        <FormControl
                            style={{
                                width: '100%',
                                marginBottom: '20px'
                            }}>
                            <Select
                                value={pagamento}
                                onChange={handleChange}
                                inputProps={{
                                    'aria-label': 'Forma de pagamento'
                                }}
                                placeholder="forma de pagamento"
                                className='optionCartaoCredito'

                            >
                                <MenuItem
                                    disabled className='optionCartaoCredito'>
                                    <em>Forma de pagamento</em>
                                </MenuItem>
                                <MenuItem
                                    className='optionCartaoCredito'
                                    value="CartãoCredito">
                                    <CreditCardIcon style={{ marginRight: '5px' }} /> Cartão de Crédito</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            pagamento === "CartãoCredito" &&
                            <div className='pagamentoCredito'>
                                <div className='pagamentoCredito-cartao'>
                                    <MascaraCartaoCredito
                                        value={cartaoCredito}
                                        onChange={e => setCartaoCredito(e.target.value)} />
                                </div>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <MascaraValidadeCartao
                                        value={validadeCartao}
                                        onChange={e => setValidadeCartao(e.target.value)} />
                                    <MascaraCVVCartao
                                        value={cvvCartao}
                                        onChange={e => setCvvCartao(e.target.value)} />
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className='reserva-card'>
                </div>
            </div>
        </div>
    )
}
export default Reservar
