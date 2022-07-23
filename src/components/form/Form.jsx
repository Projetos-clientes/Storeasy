import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Form.scss';

const Form = () => {
    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const url =
            `https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=${value}`
        if (value) return;

        fetch(url)
            .then((r) => r.json())
            .then(console.log)

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
                {/* <InputBase
                    sx={{ ml: 1, flex: 1 }}

                    placeholder="Busque por cidade ou estado"
                    inputProps={{
                        'aria-label': 'Procurar cidade',
                    }}
                    autoFocus
                /> */}

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


            <div className="search-results">
                <ul>
                    <li>mario</li>
                    <li>mario2</li>
                    <li>mario3</li>
                </ul>
            </div>
        </div>
    );
};

export default Form;
