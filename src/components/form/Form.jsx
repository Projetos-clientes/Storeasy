import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Form.scss';

const Form = () => {
    return (
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
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar Propriedades"
                inputProps={{
                    'aria-label': 'Buscar Propriedade',
                }}
                autoFocus
            />

            <Divider sx={{ height: 25, m: 0.7 }} orientation="vertical" />
            <IconButton
                type="submit"
                sx={{ p: '8px', color: '#fff', backgroundColor: '#9C5BFF' }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Form;
