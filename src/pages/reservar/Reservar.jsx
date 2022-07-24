import React, { useState } from 'react'

//elemento importado
import Sidebar from '../../components/sidebar/Sidebar';

//elementos lib
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//seta lib
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

//css
import './Reservar.scss';

//img para teste
import garagem from '../../components/pageItem/imgs/garagem.jpg';

//Mascaras
import MascaraCartaoCredito from '../../components/Inputs/InputsNumber/MascaraCartaoCredito';
import MascaraValidadeCartao from '../../components/Inputs/InputsNumber/MascaraValidadeCartao';
import MascaraCVVCartao from '../../components/Inputs/InputsNumber/MascaraCVVCartao';
import MascaraNomeReserva from '../../components/Inputs/InputsReserva/MascaraNomeReserva';
import MascaraCPFReserva from '../../components/Inputs/InputsReserva/MascaraCPFReserva';

const Reservar = () => {
    //escolha da forma de pagamento
    const [pagamento, setPagamento] = React.useState('CartãoCredito');

    //infos cartão
    const [cartaoCredito, setCartaoCredito] = React.useState("");
    const [validadeCartao, setValidadeCartao] = React.useState("");
    const [cvvCartao, setCvvCartao] = React.useState("");

    //infos titular
    const [nomeReserva, setNomeReserva] = React.useState("");
    const [cpfReserva, setCpfReserva] = React.useState("");

    const handleChange = (event) => {
        setPagamento(event.target.value);
        console.log(event.target.value)
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
                        <h1>Fazer a reserva</h1>
                    </div>
                    <div className='infos-da-reserva'>
                        <h1>Sua reserva</h1>
                        <div>
                            <h2>Data</h2>
                            <p>01/05/2022 - 23/05/2022
                            </p>
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
                                <h2>Informações do titular do cartão</h2>
                                <div className="pagamentoCredito-Nome">
                                    <MascaraNomeReserva
                                        value={nomeReserva}
                                        onChange={e => setNomeReserva(e.target.value)} />

                                    <MascaraCPFReserva
                                        value={cpfReserva}
                                        onChange={e => setCpfReserva(e.target.value)} />

                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='reserva-card'>
                    <div className='reserva-card-img'>
                        <img src={garagem} alt="" />
                        <div>
                            <span>Espaço pequeno</span>
                            <p>Garagem pequena</p>
                        </div>
                    </div>
                    <hr />
                    <div className="reserva-card-infos">
                        <h2>Informações de valores</h2>
                        <div className='card-infos-valor'>
                            <span>R$ 320,00 x 20 dias</span>
                            <span>R$ 6.400,00</span>
                        </div>
                        <div className='card-infos-taxa'>
                            <span>Taxa de serviço</span>
                            <span>R$ 30,00</span>
                        </div>
                        <hr />
                        <div className='card-infos-total'>
                            <span>Total</span>
                            <span>R$ 6.430,00</span>
                        </div>
                    </div>
                    <button class="btn-reservar">Reservar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Reservar
