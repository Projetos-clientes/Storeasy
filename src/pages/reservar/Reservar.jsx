import React, { useState } from 'react'
import Calendario from '../../components/pageLocation/calendar/Calendario'
import ButtonLogin from '../../components/pageLogin/buttonLogin/ButtonLogin'
import './Reservar.scss';
import Stack from '@mui/material/Stack';
import ButtonCadastrar from '../../components/pageLogin/buttonCadastresse/ButtonCadastrar';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const Reservar = () => {
  let [calendarData, setCalendarData] = useState('Calendar');

    const [cartao02, setCartao02] = useState(false)
  const [cartao, setCartao] = useState(false);

  const handlecard2 = () => {
    setCartao02(!cartao02)
  }

  const  handleCards = () => {
    setCartao(!cartao);

  }


  return (
    <div className="container-login">
    

    <div className="login-bg">
       
        <div className="login">
            {calendarData === 'Calendar' && (
                <div className='meuEspaco'>
                    <h3>Reserve o seu espaço na aqui!</h3>
                    <h4>De maneira rápida e fácil</h4>

                   
                    
                    <div className="or">
                       Digite os seus dados bancários para continuar
                    </div>
                    <div >
                    <input type="radio" id="radio" name="question" value="0"/>

                    <label htmlFor="radio1"> &nbsp; &nbsp; usar dados cadastrados na minha conta</label>
                    </div>

                    <button onClick={handleCards} style={{float: 'left', padding: '5px', borderRadius: '5px', color: '#494949', borderWidth: '1px', borderColor: 'blueviolet', backgroundColor: '#fff', cursor: 'pointer'}}>Cartão de débito</button>
                    <CardDebit cartao={cartao}/>

                    <button onClick={handlecard2} style={{float: 'left', padding: '5px', borderRadius: '5px', color: '#494949', borderWidth: '1px', borderColor: 'blueviolet', backgroundColor: '#fff', cursor: 'pointer'}}>Cartão de Crédito</button>
                    

                    <CardCredit cartao02={cartao02}/>
                    <div className="buttonsLogin">
                        <div>
                            
                            <div onClick={() => setCalendarData('pagamento')}>
                                <button className='btn_prox'>Próximo</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            {calendarData === 'pagamento' && (
                <div style={{transition: '0.5s'}}>
                
                    <div className="or">Ou</div>
                    <div className="email-senha">
                        
                    </div>
                    <div className="passwordhelp">
                        <div onClick={() => setCalendarData('Calendar')}>
                            <a>  Voltar</a>
                        </div>
                    </div>
                    <div className="buttonsLogin">
                        <div>
                            <div onClick={() => setCalendarData('pagamento')}>
                                <Stack direction="row" spacing={2}>
                                    <button
                                        
                                    >
                                        Cadastrar
                                    </button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>
  )
}

let CardDebit = ({cartao}) => {


    return(
        <>
        {      cartao &&  
        <div className="cards">

                <div className='numbers'> 
                    <label> Digite o número do seu cartão </label>
                    <input placeholder=' 000 000 000 000 '/>
                </div> 
                
                <div className='numbers'> 
                    <label> Digite sua conta </label>
                    <input placeholder=' 000000-00 '/>
                </div>  

        <div className='numbers'> 
        <label> Digite o número do sua agência </label>
        <input placeholder=' 000000-000 '/>
        </div>

        </div>
         
        
        }
        </>
        
    )
   
}

let CardCredit = ({cartao02}) => {


    return(
        <>
        {      cartao02 &&  
        <div className="cards">

                <div className='numbers'> 
                    <label> Digite o número do seu cartão </label>
                    <input placeholder=' 000 000 000 000 '/>
                </div> 
                
                <div className='numbers'> 
                    <label> Digite sua conta </label>
                    <input placeholder=' 000000-00 '/>
                </div>  

        <div className='numbers'> 
        <label> Digite o número do sua agência </label>
        <input placeholder=' 000000-000 '/>
        </div>

        </div>
         
        
        }
        </>
        
    )
   
}

export default Reservar
  