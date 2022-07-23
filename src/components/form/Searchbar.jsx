import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Form.scss';
import { useEffect } from 'react';

const Searchbar = ({ data }) => {
    const [inputSearch, setInputSearch] = React.useState("")
    const [filterSearch, setFilterSearch] = React.useState([])

    const [blurInput, setBlurInput] = React.useState(true)

    const handleInputChange = (e) => {
        //atualizando oq está sendo escrito
        setInputSearch(e.target.value)

        //filtrando oq está sendo escrito
        const newFilter = data.filter(i => i.Cidade.toLowerCase().includes(inputSearch.toLowerCase()))

        setFilterSearch(newFilter)
    }

    // apagando os resultados 
    useEffect(() => {
        if (inputSearch === "") return setFilterSearch([])
    }, [inputSearch])

    // definindo que não está focado
    const blurInputChange = () => {
        setBlurInput(true)
        setFilterSearch([])
    }

    // definindo que está focado
    const focusInputChange = () => {
        setBlurInput(false)
        setFilterSearch([])
    }

    return (
        <>
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
                        placeholder='Buscar cidade ou estado'
                        value={inputSearch}
                        onChange={handleInputChange}
                        onBlur={blurInputChange}
                        onFocus={focusInputChange}
                    />

                    <Divider
                        sx={{
                            height: 25,
                            m: 0.7
                        }}
                        orientation="vertical" />
                    <IconButton
                        sx={{
                            p: '8px',
                            color: '#fff',
                            backgroundColor: '#9C5BFF'
                        }}
                        className=""
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>

                {filterSearch !== 0 &&
                    <div className='dateResult'>
                        {filterSearch.map(({ id, Cidade }) => (
                            <div key={id} className='dataItem'>
                                <p>{Cidade}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>

    );
};

export default Searchbar;
