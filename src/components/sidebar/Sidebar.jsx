import React, { useState } from 'react';
import './Sidebar.scss';
import img from '../pageHome/img/logo-storeasy.png';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import person from '../pageHome/img/pessoa-perfil.png';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

const Sidebar = () => {
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
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="Side">
            <div className="left">
                <Link to="/">
                    <img src={img} alt="logo da empresa" className="logo" />
                </Link>
            </div>

            <div className="menuHamburguer">
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
                {isOpen && (
                    <div className="modalHamburguer">
                        <div>MODAL</div>
                    </div>
                )}
            </div>

            <nav className="middle">
                <ul className="lista">
                    <Link to="/logar">
                        <div className="login">
                            <button className="btn_login">Acesse</button>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className="enterHome">
                            <button className="btn_login">
                                Torne-se anfitrião
                            </button>
                        </div>
                    </Link>
                    <div className="optionsBar">
                        <li className="item">
                            <CommentOutlinedIcon
                                color="#1b1b1b"
                                fontSize="16px"
                            />
                        </li>

                        <li className="item" onClick={handlenotification}>
                            <CircleNotificationsOutlinedIcon
                                color="#1b1b1b"
                                fontSize="16px"
                                position="relative"
                            />
                            <Notif notification={notification} />
                        </li>

                        <div className="exit">
                            <ExitToAppTwoToneIcon fontSize="large" />
                        </div>
                    </div>

                    <Link to="/profile">
                        <li className="person">
                            <img
                                src={person}
                                alt="icone do perfil"
                                className="person"
                            />
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Sidebar;
