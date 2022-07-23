import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Form.scss';
import SearchResults from './SearchResults';

const Form = () => {

    const lista = [
        {
            categoria: "Espaço pequeno",
            Endereco: "Av.Dona Blabla",
            Cidade: "Rio de Janeiro",
            Estado: "RJ",
            id: 1
        }
        ,
        {
            categoria: "Espaço Grande",
            Endereco: "Av.Dona Blabla",
            Cidade: "São Paulo",
            Estado: "SP",
            id: 2
        },

        {
            categoria: "Espaço médio",
            Endereco: "Av.Dona Blabla",
            Cidade: "Belo Horizonte",
            Estado: "MG",
            id: 3
        },

        {
            categoria: "Espaço Enrome",
            Endereco: "Av.Dona Blabla",
            Cidade: "Rio Branco",
            Estado: "AC",
            id: 4
        }
    ]
    const [data, setData] = React.useState([]);
    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setData(lista)
    }
    return (
        <div className="containerForm">
            <Paper
                className="form"
                component="form"
                sx={{
                    p: '10px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '50px',
                    paddingLeft: '30px',
                }}
            >
                <input
                    type="text"
                    className='inputForm'
                    placeholder='Busque por cidade ou estado'
                    onChange={handleInputChange} />

                <Divider sx={{ height: 25, m: 0.7 }} orientation="vertical" />
                <IconButton
                    sx={{
                        p: '8px',
                        color: '#fff',
                        backgroundColor: '#9C5BFF'
                    }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>

            <SearchResults data={data} />
        </div>
    );
};

export default Form;
