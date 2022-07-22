import React from 'react';
import './Profile.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import perfilImg from '../../components/pageHome/img/pessoa-perfil.png';
import RatingRead from '../../components/pageProfile/Rating';
import MaskedInput from '../../components/Inputs/InputsNumber/MaskedInput';

const Profile = () => {
    return (
        <div className="container-profile">
            <Sidebar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />
            <main className="profile-content-top">
                <div className="content-top">
                    <div className="top-img">
                        <img src={perfilImg} draggable="false" alt="" />
                    </div>
                    <div className="top-dados">
                        <div className="dados-rating">
                            <RatingRead only="true" fontSize="40" />
                        </div>
                        <div className="dados-name">
                            <h2>Claudia Ferreira da Silva </h2>
                        </div>
                    </div>
                </div>
                <div className="content-main">
                    <MaskedInput />
                </div>
            </main>
        </div>
    );
};

export default Profile;
