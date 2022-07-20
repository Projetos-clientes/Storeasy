import React, { useState } from 'react';
import './Sidebar.scss';
import img from '../pageHome/img/logo-storeasy.png';

import person from '../pageHome/img/pessoa-perfil.png';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Sidebar = ({
    logo,
    menu,
    acesse,
    tornese,
    mensagem,
    noti,
    sair,
    perfil }) => {
    const [notification, setNotification] = useState(false);


    function Notif({ notification }) {
        return (
            <>
                <div className="containerNotifc">
                    {notification && <div className="notific"></div>}
                </div>
            </>
        );
    }
    function handlenotification() {
        setNotification(!notification);
    }

    const [isOpen, setOpen] = useState(false); //abrir/fehcar-menu-hamburguer

    const [isLoggedIn, setLoggedIn] = useState(true) //mudar barra de navegação

    return (
        <header className="Side">

            {logo &&
                <div className="left">
                    <Link to={'/'}>
                        <img src={img} alt="logo da empresa" className="logo" />
                    </Link>
                </div>
            }

            {menu &&
                <div className="menuHamburguer">
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
                    {isOpen && (
                        <div className="modalHamburguer">
                            <div>MODAL</div>
                        </div>
                    )}
                </div>
            }

            <nav className="middle">
                {!isLoggedIn && acesse &&
                    <Link to="/logar">
                        <div className="login">
                            <button className="btn_login">Entrar </button>
                        </div>
                    </Link>
                }

                <ul className="lista">

                    {
                        /* 
                            barra de opções se estiver logado
                        */
                    }
                    {isLoggedIn &&
                        <div className="optionsBar">

                            {tornese &&
                                <Link to="/home">
                                    {/* <div className="enterHome">
                                        <button className="btn_login">
                                            Torne-se anfitrião
                                        </button>
                                    </div> */}
                                    <li className='item'>
                                        <button class="icon-btn add-btn">
                                            <div class="add-icon"></div>
                                            <div class="btn-txt">Seja um anfitrião</div>
                                        </button>
                                    </li>

                                </Link>
                            }


                            {mensagem &&
                                <li className="item">
                                    <CommentOutlinedIcon
                                        className='item-Icon'

                                    />
                                </li>
                            }
                            {noti &&
                                <li className="item"
                                    onClick={handlenotification}>
                                    <CircleNotificationsOutlinedIcon
                                        className='item-Icon'

                                    />
                                    <Notif notification={notification} />
                                </li>
                            }

                            {sair &&
                                <li className="item">
                                    <ExitToAppTwoToneIcon
                                        className='item-Icon'

                                    />
                                </li>
                            }

                            {perfil &&
                                <Link to="/profile">
                                    <li className="person">
                                        <img
                                            src={person}
                                            alt="icone do perfil"
                                            className="person"
                                        />
                                    </li>
                                </Link>
                            }
                        </div>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Sidebar;
