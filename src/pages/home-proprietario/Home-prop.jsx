import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home-prop.scss';
import Home from './home.png';
import Caixa from './box.png';
import Ticket from './ticket.png';
import Espacos from './storage.png';
import { Link } from 'react-router-dom';
import garagem from './garagem.jpg';
import Galeria from '../../components/pageHomeProp/galleryAdd/Gallery.jsx';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputCat from './InputCat';
import InputsLocal from '../../components/pageHomeProp/inputsLocal/InputsLocal';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import Creatable, { useCreatable } from 'react-select/creatable';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Upload from "./icone-upload.png";
import ButtonSpace from '../../components/pageHome/buttonSpace/ButtonSpace';
import Create from 'react-select';
import { ActionMeta, OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';

import CreatableSelect from 'react-select/creatable';
import Checkbox from '../../components/Checkbox/Checkbox';


const HomeProp = () => {
    let [timeStart, setTimeStart] = React.useState('00:00');
    let [timeEnd, setTimeEnd] = React.useState('00:00');

    const Calend = () => {
        const disabledDays = [
            {
                year: 2022,
                month: 3,
                day: 6,
            },
        ];
        const handleDisabledSelect = (disabledDay) => {
            alert(
                'Está data já se encontra alugada. Faça a escolha de outra data!',
                disabledDay,
            );
        };

        const [selectedDays, setSelectedDays] = React.useState([]);
        return (
            <div>
                <Calendar
                    value={selectedDays}
                    onChange={setSelectedDays}
                    colorPrimary="#DD0AC8"
                    shouldHighlightWeekends
                    disabledDays={disabledDays}
                    onDisabledDayError={handleDisabledSelect}
                />
                <p style={{ marginTop: '5px', color: '#2e2d2d7f' }}>
                    * Selecionar dias indisponiveis
                </p>
            </div>
        );
    };
    let Inicio = () => {
        return (
            <div className="box-1 content">
            
            <img src={garagem} alt="pequeno espaço" className='image'/>
                <div className="boxText">  
                   <div className="divTexts">
                       <h4>Categoria</h4>
                       <p className="text">
                      Espaços pequenos 
                       </p>
                   </div>
                   <div className="divTexts">
                   <h4>Endereço</h4>
                   <p className="text">
                    Rua joão magnólio, São Paulo/SP   
                  </p>
                   </div>
                 
                  
                   <div className="divTexts">
                   <h4>Metragem</h4>
                   <p className="text">
                   20 x 20 mt²    
                  </p>
                  
   
                  
                   </div>
                   <div className="values">
                  
                   <p className="text-value">
                   <strong>210,00 </strong>   / diária  
                  </p>
                   
                   </div>
           </div>
           <div className="bottomBlock">
                 <Link to={'/item'} className="linkBlock">
                 <button className='btn'>Ver</button>
                </Link>
            </div>
               
           </div>
           
        );
    };

 
    let AddEspaco = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Adicionar espaço</h1>

                <br />
                <div
                    className="espaco-itens"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    {/* <Galeria /> */}


                    <Box
                        component="form"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        sx={{
                            '& > :not(style)': { m: 1, width: '280px' },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="filled-basic"
                            label="Título"
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Descrição"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="filled"
                        />
              <label style={{fontSize: '20px', color: '#494949', }}>Metragem quadrada</label>
             <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            
               <input style={{fontSize: '20px', color: '#494949', padding: '5px', borderRadius: '5px', width: '75px', borderColor: '#494949' }}   type={"number"} />
             
              <p>X </p>   
            
               <input style={{fontSize: '20px', color: '#494949', padding: '5px', borderRadius: '5px', width: '75px', borderColor: '#494949' }}    type={"number"} />
             </div>
              
                    </Box>
                </div>

                <h3>Imagens do seu espaço</h3>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={() => setEstadoHome(<ImgEspaco />)}
                    >
                        Próximo
                    </Button>
                </div>
            </div>
        );
    };

    let ImgEspaco = () => {


        return (
            <>
                <div className="imgContainer">
                    <div className="textImg">
                    <h3>Imagens do seu espaço</h3>
                <p>As imagens do seu espaço são obrigatórias! Elas seram responsáveis por seu cliente
                    ter a visualização do espaço que está alugando.
                </p>
                    </div>
               
                    <img className="imgUp" src={Upload} alt="upload de imagens" />

                    <Button
                            variant="contained"
                            
                        >
                            Subir imagem
                        </Button>
                        <br />

                        <ButtonSpace
                            Text="Próximo"
                            variant="contained"
                            onClick={() => setEstadoHome(<RegraAcesso />)}
                       />
                          
                </div>
            </>

        );
    }

    let RegraAcesso = () => {

        const options = [
            {value: "item09", label: "entrada pública"}, 
            {value: "item10", label: "Com escada"}, 
            {value: "item11", label: "Agendar antes da visita"} 
        ]

        const animatedComponents = makeAnimated();
        return (
            <div className="containerAcess">

            <div className="textSelect">
              
                    <h3>Defina regras de acesso para o seu espaço</h3>
                

            </div>

            <CreatableSelect 
            className="selectAcesso"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}

            />
            <Checkbox />


            <Button
            Text="Próximo"
            variant="contained"
            onClick={() => setEstadoHome(<CaracterSecurity />)}
        > Próximo </Button>

            </div>
        )
    }
 


    let CaracterLocal = () => {

        const animatedComponents = makeAnimated();

        

        const options = [
            { value: "Item01", label: "Local climatizado"}, 
            { value: "item02", label: "Proibido pets" }, 
            {value: "iitem03", label: "Proibido fumar"},
            {value: "item04", label: "local fechado com cadeado/chave"},
            {value: "item05", label: "Área coberta"}, 
            {value: "item06", label: "Local com boa iluminação"}, 
            {value: "item07", label: "Wifi liberado"}, 
            {value: "item08", label: "entrada privada"}, 
            {value: "item09", label: "entrada pública"}, 
            {value: "item10", label: "local limpado frequentimente"}, 
            {value: "item11", label: "Oferece embalagem para os pertences"}
        ]

        return (
            <div className="containerLocal">

            <div className="textSelect">
              
                    <h3>Escolha as caracteristicas de segurança</h3>
                <p>As caracteristicas podem determinar o sucesso do seu local!


                </p>
            </div>

            <CreatableSelect 
            className="select"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}

            />

           


            <Button
            Text="Próximo"
            variant="contained"
            onClick={() => setEstadoHome(<CaracterSecurity />)}
        > Próximo </Button>

            </div>
        )
    }
    let CaracterSecurity = () => {

        const animatedComponents = makeAnimated();

        const options = [
            { value: "Item01", label: "Detector de fumaça"}, 
            { value: "item02", label: "Camêra de segurança" }, 
            {value: "iitem03", label: "Vigilante/Zelador"},
            {value: "item04", label: "Alarme de monóxido de carbono"},
            {value: "item10", label: "Práticas contra a COVID-19 em vigor"}, 
            {value: "item11", label: "Extintor de incêncio"}
        ]

        return (
            <div className="containerLocal">

            <div className="textSelect">
              
                    <h3>Escolha as caracteristicas específicas do seu local</h3>
                <p>As caracteristicas podem determinar o sucesso do seu local!
            
                </p>
            </div>

            <CreatableSelect 
            className="selectSecury"
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}

            />

        <h3>Este espaço é de propriedade sua ou de terceiros?</h3>



                    <div className="textRadio">
                    <input type="radio" id="radio1" name="question" value="0"/>
                    <label htmlFor="radio1">Meu espaço</label>
                    </div>

                    
                    <div className="textRadio">
                    <input type="radio" id="radio2" name="question" value="1"/>
                    <label htmlFor="radio2">De outra pessoa</label>
                    </div>


            <Button
            Text="Próximo"
            variant="contained"
            onClick={() => setEstadoHome(<InputAddLocal />)}
        > Próximo </Button>

            </div>
        )
    }

    let InputAddLocal = () => {
        return (
            <>
                <h3>Endereço do local</h3>
                <div className="espacoLocal">
                    <InputsLocal />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <Button 
                            variant="contained"
                            onClick={() => setEstadoHome(<AddCalendarDate />)}
                        >
                            Próximo
                        </Button>
                            
                    </div>
                </div>
            </>
        );
    };
    let AddCalendarDate = () => {
        return (
            <>
                <div className="espaco-itens">
                    <h3>Disponibilidade</h3>
                    <div
                        className="time-hours"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        &nbsp;Das&nbsp;
                        <input
                            type="time"
                            id="start-time"
                            required
                            defaultValue={timeStart}
                            onChange={() => {
                                setTimeStart(
                                    document.querySelector('#start-time').value,
                                );
                            }}
                        />
                        &nbsp;até&nbsp;
                        <input
                            type="time"
                            id="end-time"
                            required
                            defaultValue={timeEnd}
                            onChange={() => {
                                setTimeEnd(
                                    document.querySelector('#end-time').value,
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Calend />
                    </div>
                    <div
                        className="espaco-itens"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Stack
                            direction="row"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button onClick={() => setEstadoHome(<ValorPublic />)}>Próximo</Button>
                        </Stack>
                    </div>
                </div>
            </>
        );
    };

    let ValorPublic = () => {

    const [valor, setValor] = useState('00,00');

   const handleAlterar = () => {
    
    setValor('20,00')
    }

        return (
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>

                <h1> Qual valor será cobrado pelo seu espaço?</h1>

                <input type="number" style={{padding: '20px', borderRadius: '5px', color: '#ccc', borderWidth: '1px', borderColor: '#1b1b1b', fontSize: '20px', }} placeholder='digite o valor do espaço' className='value' />

                &nbsp; &nbsp; &nbsp;<button onClick={handleAlterar} style={{padding: '10px', color: '#fff', fontWeight: 'bold', backgroundColor: 'blueviolet', border: 'none', borderRadius: '10px', fontSize: '18px', cursor: 'pointer'}}>Calcular valor</button>

                    <h3>Taxa da Storeasy:   &nbsp;  &nbsp;  &nbsp;  &nbsp;  {valor} </h3> 

                    <Button onClick={() => setEstadoHome(<ValorPublic />)}>Públicar</Button>

            </div>
        );
    }
    
    let Tickets = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Tickets</h1>
                <div className="espaco-itens"></div>
            </div>
        );
    };

    let EditarEspaco = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Editar espaço</h1>
                <div
                    className="espaco-itens"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    {/* <Galeria /> */}
                    <Box
                        component="form"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        sx={{
                            '& > :not(style)': { m: 1, width: '280px' },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="filled-basic"
                            label="Título"
                            variant="filled"
                            value="Texto de teste"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Descrição"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="filled"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <InputCat />
                    </Box>
                </div>
                <h3>Imagens do espaço</h3>
                <div className="espaco-itens">IMAGEM</div>
                <h3>Endereço do local</h3>
                <div className="espaco-itens">
                    <InputsLocal />
                </div>
                <h3>Disponibilidade</h3>
                <div className="espaco-itens">
                    <div
                        className="time-hours"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        &nbsp;Das&nbsp;
                        <input
                            type="time"
                            id="start-time"
                            required
                            defaultValue={timeStart}
                            onChange={() => {
                                setTimeStart(
                                    document.querySelector('#start-time').value,
                                );
                            }}
                        />
                        &nbsp;até&nbsp;
                        <input
                            type="time"
                            id="end-time"
                            required
                            defaultValue={timeEnd}
                            onChange={() => {
                                setTimeEnd(
                                    document.querySelector('#end-time').value,
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Calend />
                    </div>
                    <div
                        className="espaco-itens"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Stack
                            direction="row"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button variant="contained">EDITAR</Button>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    };

    /*  inputsAdd = () => {
        return (
            <div>

            </div>
        );
    } */

    let [estadoHome, setEstadoHome] = React.useState(<Inicio />);

    return (
        <div className="container-home-prop">
            <Sidebar />
            <div className="prop-container">
                <div className="prop-buttons" style={{ display: 'flex' }}>
                    <Link to="/">
                        <div className="prop-button">
                            <img src={Home} alt="" />
                            <div className="button-frase">
                                <div>Home</div>
                                <div>Principal</div>
                            </div>
                        </div>
                    </Link>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<Inicio />)}
                    >
                        <img src={Espacos} alt="" />
                        <div className="button-frase">
                            <div>Meus</div>
                            <div>Espaços</div>
                        </div>
                    </div>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<AddEspaco />)}
                    >
                        <img src={Caixa} alt="" />

                        <div className="button-frase">
                            <div>Adicionar</div>
                            <div>Espaços</div>
                        </div>
                    </div>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<Tickets />)}
                    >
                        <img src={Ticket} alt="" />
                        <div className="button-frase">
                            <div>Meus</div>
                            <div>Tickets</div>
                        </div>
                    </div>
                </div>
                <main className="prop-content">{estadoHome}</main>
            </div>
        </div>
    );
};

export default HomeProp;
