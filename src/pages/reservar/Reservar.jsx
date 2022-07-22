import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './Reservar.scss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Reservar = () => {
    const [pagamento, setAge] = React.useState('');

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
                        <h1>Forma de pagamento</h1>
                        <FormControl
                            style={{
                                width: '100%',
                                marginBottom: '20px'
                            }}>
                            <Select
                                value={pagamento}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Forma de pagamento' }}
                                placeholder={"forma de pagamento"}
                            >
                                <MenuItem disabled>
                                    <em>Forma de pagamento</em>
                                </MenuItem>
                                <MenuItem
                                    value="CartãoCredito"
                                    style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                    <CreditCardIcon /> Cartão de Crédito</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            pagamento === "CartãoCredito" &&
                            <div className='pagamentoCredito'>
                                <TextField label="Filled success" variant="filled" color="success" focused />
                            </div>
                        }
                    </div>
                </div>
                <div className='reserva-card'>
                </div>
            </div>
        </div >
    )
}
export default Reservar
